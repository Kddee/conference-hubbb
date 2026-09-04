const https = require('https');

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycby2g7lUyq3Y_t1BWlY3sNB9jv3K_Rjm3suUPAajo9twE3OhQSRDEOxV-Hjaq2BkvYNb3g/exec";

/**
 * Appends a work record to the live Google Sheet:
 * https://docs.google.com/spreadsheets/d/1ZYnO2jnI145Y0ivmMBo5I_tydXW41t40c-LPgwHUCd0/edit
 *
 * @param {Object} record
 * @param {string} record.date - e.g. "2026-09-04"
 * @param {string} record.category - e.g. "Keynote Speakers"
 * @param {string} record.title - e.g. "Add speaker X"
 * @param {string} record.description - e.g. "Added speaker X with portrait"
 * @param {string} [record.status="Completed"]
 * @param {string} [record.branch="main (Kddee/conference-hubbb)"]
 */
function logWork(record) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      date: record.date || new Date().toISOString().split('T')[0],
      category: record.category || "General",
      title: record.title || "Update",
      description: record.description || "Work completed",
      status: record.status || "Completed",
      branch: record.branch || "main (Kddee/conference-hubbb)"
    });

    function sendRequest(targetUrl) {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload)
        }
      };

      const req = https.request(targetUrl, options, (res) => {
        // Handle Google Apps Script 302 redirect
        if (res.statusCode === 302 || res.statusCode === 301) {
          const redirectUrl = res.headers.location;
          https.get(redirectUrl, (redirectRes) => {
            let body = '';
            redirectRes.on('data', chunk => body += chunk);
            redirectRes.on('end', () => {
              try {
                resolve(JSON.parse(body));
              } catch (e) {
                resolve(body);
              }
            });
          }).on('error', reject);
          return;
        }

        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          try {
            resolve(JSON.parse(body));
          } catch (e) {
            resolve(body);
          }
        });
      });

      req.on('error', reject);
      req.write(payload);
      req.end();
    }

    sendRequest(new URL(WEB_APP_URL));
  });
}

module.exports = { logWork };

// Command line usage: node scripts/sync_sheets.js "Category" "Title" "Description"
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length >= 2) {
    const category = args[0];
    const title = args[1];
    const description = args[2] || title;
    logWork({
      date: new Date().toISOString().split('T')[0],
      category,
      title,
      description
    })
      .then(res => console.log("Google Sheets updated successfully:", res))
      .catch(err => console.error("Error updating Google Sheets:", err));
  } else {
    console.log("Usage: node scripts/sync_sheets.js <Category> <Title> <Description>");
  }
}
