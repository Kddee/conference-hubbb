const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('./src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replace hex colors
    content = content.replace(/bg-\[\#0099cc\]/g, 'bg-primary');
    content = content.replace(/text-\[\#0099cc\]/g, 'text-primary');
    content = content.replace(/border-\[\#0099cc\]/g, 'border-primary');
    content = content.replace(/from-\[\#0099cc\]/g, 'from-primary');
    content = content.replace(/to-\[\#0099cc\]/g, 'to-primary');
    content = content.replace(/via-\[\#00bfff\]/g, 'via-accent');
    content = content.replace(/to-\[\#0066ff\]/g, 'to-secondary');
    content = content.replace(/to-\[\#00d9ff\]/g, 'to-accent');
    content = content.replace(/to-\[\#00e5ff\]/g, 'to-accent');
    content = content.replace(/rgba\(0,153,204,/g, 'rgba(16,185,129,'); // Emerald shadow
    content = content.replace(/color:\s*['"]#0099cc['"]/g, 'color: "hsl(var(--primary))"');
    
    // Replace specific tailwind colors
    content = content.replace(/blue-600/g, 'secondary');
    content = content.replace(/blue-400/g, 'primary');
    content = content.replace(/amber-400/g, 'accent');
    content = content.replace(/amber-500/g, 'secondary');
    content = content.replace(/amber-300/g, 'accent');
    content = content.replace(/yellow-400/g, 'primary');
    content = content.replace(/yellow-500/g, 'primary');
    content = content.replace(/rgba\(255,193,7,/g, 'rgba(16,185,129,');
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated', file);
    }
});
