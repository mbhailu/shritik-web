import type { Metadata } from 'next';

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shritikllp.com" },
    { "@type": "ListItem", position: 2, name: "Contact Us", item: "https://www.shritikllp.com/contact" },
  ],
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Shritik Enterprises LLP",
  url: "https://www.shritikllp.com/contact",
  description: "Send an export inquiry or request product samples. We respond within 24 hours.",
  mainEntity: {
    "@type": "Organization",
    name: "Shritik Enterprises LLP",
    url: "https://www.shritikllp.com",
    email: "info@shritikllp.com",
    telephone: ["+912764357360", "+919925246360"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "73, Subhangen Bunglows",
      addressLocality: "Kalol",
      addressRegion: "Gujarat",
      postalCode: "382721",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@shritikllp.com",
      telephone: "+919925246360",
      availableLanguage: ["English", "Hindi", "Gujarati"],
      areaServed: "Worldwide",
    },
  },
};

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Shritik Enterprises LLP for export inquiries, product samples, pricing, and private label requests. We respond within 24 hours.',
  keywords: [
    'contact Shritik Enterprises',
    'cashew export inquiry India',
    'dehydrated food export quote India',
    'food ingredients supplier contact India',
    'request sample cashew India',
  ],
  alternates: { canonical: 'https://www.shritikllp.com/contact' },
  openGraph: {
    title: 'Contact Us — Shritik Enterprises LLP',
    description: 'Send an export inquiry or request product samples. We respond within 24 hours for all pricing and specification requests.',
    url: 'https://www.shritikllp.com/contact',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Contact Shritik Enterprises LLP' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us — Shritik Enterprises LLP',
    description: 'Send an export inquiry. We respond within 24 hours.',
    images: ['/opengraph-image'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      {children}
    </>
  );
}
