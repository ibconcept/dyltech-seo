import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  schema?: any;
}

const SEO = ({ title, description, image, url, schema }: SEOProps) => {
  const siteTitle = "Dyltech Computers | Premium Laptops & Accessories in Nairobi";
  const siteDesc = "Dyltech Computers - Your hub for premium laptops, computers, and accessories in Nairobi. Bulk computer sales, Windows/Linux installation, and more.";
  const siteUrl = "https://www.dyltechcomputers.co.ke";
  const previewImage = "/dyltech_preview.png";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ComputerStore",
    "name": "Dyltech Computers",
    "image": "https://www.dyltechcomputers.co.ke/dyltech-computers-blue-logo.PNG",
    "@id": "https://www.dyltechcomputers.co.ke",
    "url": "https://www.dyltechcomputers.co.ke",
    "telephone": "+254759944689",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Meru South House, Tom Mboya Street",
      "addressLocality": "Nairobi",
      "postalCode": "00100",
      "addressCountry": "KE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -1.2842,
      "longitude": 36.8251
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:30"
    },
    "sameAs": [
      "https://www.facebook.com/dyltechcomputers",
      "https://www.instagram.com/dyltechcomputers"
    ]
  };

  return (
    <Helmet>
      <title>{title ? `${title} | Dyltech Computers` : siteTitle}</title>
      <meta name="description" content={description || siteDesc} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || siteDesc} />
      <meta property="og:image" content={image || previewImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url || siteUrl} />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || siteDesc} />
      <meta name="twitter:image" content={image || previewImage} />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
