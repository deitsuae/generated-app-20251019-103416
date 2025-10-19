import React from 'react';
import { Helmet } from 'react-helmet-async';
interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}
export function SEO({ title, description, keywords }: SEOProps) {
  const siteName = "Dune Emirates IT Solutions (DEITS)";
  const fullTitle = `${title} | ${siteName}`;
  const defaultKeywords = "IT services dubai, IT support, managed IT services, photocopier rental UAE, toner supply dubai, custom pc build UAE";
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}