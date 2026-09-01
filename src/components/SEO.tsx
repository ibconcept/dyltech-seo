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
  const siteTitle = "Dyltech Computers | Premium Laptops & Computer Shop in Nairobi";
  const siteDesc = "Dyltech Computers - Your trusted computer and laptop shop in Nairobi CBD. Buy new & refurbished HP, Dell, Lenovo laptops, gaming PCs, desktops & accessories. Bulk computer sales & Windows/Linux installation. Meru South House, Tom Mboya Street.";
  const siteUrl = "https://www.dyltechcomputers.co.ke";
  const previewImage = "/dyltech_preview.png";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ComputerStore",
    "name": "Dyltech Computers",
    "description": "Premium laptops, desktops, gaming PCs and accessories in Nairobi CBD. Bulk computer sales, Windows/Linux installation.",
    "image": "https://www.dyltechcomputers.co.ke/dyltech_preview.png",
    "@id": "https://www.dyltechcomputers.co.ke",
    "url": "https://www.dyltechcomputers.co.ke",
    "telephone": "+254759944689",
    "priceRange": "$$",
    "currenciesAccepted": "KES",
    "paymentAccepted": "Cash, M-Pesa, Card, Bank Transfer",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Meru South House, Tom Mboya Street",
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi County",
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
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Kenya"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Computer Products & Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Laptops",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "HP Laptops" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Dell Laptops" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Lenovo Laptops" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Gaming Laptops" } }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Desktop Computers",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Desktop PCs" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Gaming Desktops" } }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Computer Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Windows Installation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Linux Installation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bulk Computer Sales" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Computer Repairs" } }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Accessories",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Computer Accessories" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Monitors" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Printers" } }
          ]
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.dyltechcomputers.co.ke/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Dyltech Computers",
        "item": "https://www.dyltechcomputers.co.ke/"
      }
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
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Dyltech Computers" />
      <meta property="og:locale" content="en_KE" />

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
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
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