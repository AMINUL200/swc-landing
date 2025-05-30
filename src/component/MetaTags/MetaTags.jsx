// components/MetaTags.js
import { Helmet } from 'react-helmet';

const DEFAULT_META = {
  page_title: "Default Title | Your Site",
  meta_description: "Default description for your site.",
  meta_keywords: "default, keywords",
};
const MetaTags = ({ meta }) => {
    if (!meta) {
        // console.log("No meta data received");
        return null;
    }
    
    // console.log("Received meta data:", meta);


    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{meta.page_title || meta.meta_title || "Default Title"}</title>
            <meta name="description" content={meta.meta_description || ""} />
            <meta name="keywords" content={meta.meta_keywords || ""} />
            <meta name="viewport" content={meta.view_port_meta || "width=device-width, initial-scale=1.0"} />
            <meta charSet={meta.character_meta || "UTF-8"} />

            {/* Open Graph (Facebook, LinkedIn) */}
            <meta property="og:title" content={meta.meta_title || ""} />
            <meta property="og:description" content={meta.meta_description || ""} />
            <meta property="og:url" content={meta.canonical_url || window.location.href} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={meta.meta_title || ""} />
            <meta name="twitter:description" content={meta.meta_description || ""} />

            {/* Canonical URL (SEO) */}
            {meta.canonical_url && <link rel="canonical" href={meta.canonical_url} />}
        </Helmet>
    );
};

export default MetaTags;