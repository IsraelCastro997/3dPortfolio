import { useEffect } from "react";
import { site } from "../config/site";

const Seo = () => {
  useEffect(() => {
    if (!site.siteUrl) return undefined;

    const href = site.siteUrl.replace(/\/$/, "");
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = href;

    const setMeta = (selector, attr, value) => {
      const node = document.querySelector(selector);
      if (node) node.setAttribute(attr, value);
    };

    setMeta('meta[property="og:url"]', "content", href);
    setMeta('meta[property="og:image"]', "content", `${href}/og.png`);
    setMeta('meta[name="twitter:image"]', "content", `${href}/og.png`);

    return undefined;
  }, []);

  return null;
};

export default Seo;
