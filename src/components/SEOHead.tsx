import { useEffect } from "react";

export interface SEOHeadProps {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: Record<string, any> | Array<Record<string, any>>;
}

export const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = "/placeholder.svg",
  ogType = "website",
  schema,
}: SEOHeadProps) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Update Meta Description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", description);
    }

    // 3. Update Canonical Link
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement("link");
        linkCanonical.setAttribute("rel", "canonical");
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute("href", canonical);
    }

    // 4. Update OpenGraph Tags
    const setMetaTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMetaTag("og:title", title);
    if (description) setMetaTag("og:description", description);
    if (canonical) setMetaTag("og:url", canonical);
    if (ogImage) setMetaTag("og:image", ogImage);
    setMetaTag("og:type", ogType);

    // 5. Update Schema.org JSON-LD Script
    let schemaScript = document.getElementById("page-structured-data");
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.id = "page-structured-data";
        schemaScript.setAttribute("type", "application/ld+json");
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema, null, 2);
    } else if (schemaScript) {
      schemaScript.remove();
    }
  }, [title, description, canonical, ogImage, ogType, schema]);

  return null;
};

export default SEOHead;
