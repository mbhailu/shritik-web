import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dehydrated Garlic',
  description: 'Dehydrated garlic flakes, granules, minced, and powder with high allicin content. Exported from India with FSSAI, Halal, and Kosher certification.',
  keywords: [
    'garlic powder manufacturer India',
    'dehydrated garlic manufacturer India',
    'garlic powder bulk manufacturer',
    'premium quality garlic powder India',
    'dehydrated garlic exporter India',
    'dried garlic flakes wholesale India',
    'garlic granules supplier India',
    'garlic powder bulk exporter India',
    'high allicin garlic powder India',
    'Halal Kosher garlic powder India',
  ],
  alternates: { canonical: 'https://www.shritikllp.com/products/dehydrated-garlic' },
  openGraph: {
    title: 'Dehydrated Garlic Exporter India — Flakes, Granules & Powder',
    description: 'Dehydrated garlic flakes, granules, minced, and powder with high allicin content. FSSAI, APEDA, Halal & Kosher certified. Exported from India.',
    url: 'https://www.shritikllp.com/products/dehydrated-garlic',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Dehydrated Garlic — Shritik Enterprises LLP' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dehydrated Garlic Exporter India — Flakes, Granules & Powder',
    description: 'High allicin dehydrated garlic flakes, granules, minced, and powder exported from India.',
    images: ['/opengraph-image'],
  },
};

const products = [
  { form: 'Flakes', size: '3–5mm', moisture: 'Max 6%', allicin: 'High', uses: 'Marinades, pizza, ready meals' },
  { form: 'Minced', size: '1–3mm', moisture: 'Max 6%', allicin: 'High', uses: 'Seasoning blends, sauces' },
  { form: 'Granules', size: '0.5–1mm', moisture: 'Max 6%', allicin: 'High', uses: 'Spice mixes, dry rubs' },
  { form: 'Powder', size: '40–80 mesh', moisture: 'Max 6%', allicin: 'Medium-High', uses: 'Gravies, instant foods, seasoning' },
];

const highlights = [
  'Made from fresh, mature garlic with high allicin content',
  'Low-temperature dehydration preserves flavour compounds',
  'Consistent white to creamy colour — no browning',
  'No additives, preservatives, or artificial enhancers',
  'Rehydration ratio: approx. 1kg powder = 6–7kg fresh garlic',
  'FSSAI, APEDA, Halal, and Kosher certified',
];

const applications = [
  ['Seasoning blends & spice mixes', 'Garlic bread & pizza', 'Soups & gravies'],
  ['Processed meats & sausages', 'Instant noodles & ready meals', 'Marinades & dry rubs'],
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shritikllp.com" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://www.shritikllp.com/products" },
    { "@type": "ListItem", position: 3, name: "Dehydrated Garlic", item: "https://www.shritikllp.com/products/dehydrated-garlic" },
  ],
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Dehydrated Garlic",
  description: "Dehydrated garlic flakes, granules, minced, and powder with high allicin content. Low-temperature dehydration preserves flavour compounds. Processed in India.",
  brand: { "@type": "Brand", name: "Shritik Enterprises LLP" },
  manufacturer: {
    "@type": "Organization",
    name: "Shritik Enterprises LLP",
    url: "https://www.shritikllp.com",
  },
  countryOfOrigin: { "@type": "Country", name: "India" },
  category: "Dehydrated Vegetables",
  additionalProperty: [
    { "@type": "PropertyValue", name: "Forms", value: "Flakes, Granules, Minced, Powder" },
    { "@type": "PropertyValue", name: "Key Compound", value: "High Allicin Content" },
    { "@type": "PropertyValue", name: "Moisture", value: "Max 6%" },
    { "@type": "PropertyValue", name: "Shelf Life", value: "18–24 Months" },
    { "@type": "PropertyValue", name: "Certifications", value: "FSSAI, APEDA, Halal, Kosher" },
  ],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    seller: { "@type": "Organization", name: "Shritik Enterprises LLP" },
    url: "https://www.shritikllp.com/products/dehydrated-garlic",
  },
};

export default function DehydratedGarlicPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #14532d 0%, #166534 60%, #16a34a 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/products">Products</Link><span>/</span>
            <span className="text-white">Dehydrated Garlic</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🧄</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">Dehydrated Garlic</h1>
          </div>
          <p className="text-green-100 text-lg max-w-2xl">High-allicin dehydrated garlic in flakes, granules, minced, and powder form — trusted by spice companies and food manufacturers worldwide.</p>
        </div>
      </div>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-green-700 uppercase tracking-widest mb-3">Product Overview</p>
              <h2 className="section-heading mb-4">Flavour-Rich Dehydrated Garlic</h2>
              <div className="accent-line" />
              <p className="text-gray-600 leading-relaxed mb-6">
                We source fresh garlic from India&apos;s prime growing regions — Madhya Pradesh and Gujarat — and process it in our dedicated garlic dehydration line. Our controlled-temperature drying process ensures maximum allicin retention and a clean, sharp garlic flavour that food manufacturers trust.
              </p>
              <ul className="space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-3xl p-10 text-center">
              <div className="text-8xl mb-6">🧄</div>
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Moisture</div>
                  <div className="font-bold text-green-800">Max 6%</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Forms</div>
                  <div className="font-bold text-green-800">4 Variants</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Shelf Life</div>
                  <div className="font-bold text-green-800">18–24 Months</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Allicin</div>
                  <div className="font-bold text-green-800">High Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading mb-3">Available Forms & Specifications</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-card">
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ background: '#14532d' }}>Form</th>
                  <th style={{ background: '#14532d' }}>Particle Size</th>
                  <th style={{ background: '#14532d' }}>Moisture</th>
                  <th style={{ background: '#14532d' }}>Allicin Level</th>
                  <th style={{ background: '#14532d' }}>Typical Uses</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.form}>
                    <td className="font-bold text-green-800">{p.form}</td>
                    <td>{p.size}</td>
                    <td>{p.moisture}</td>
                    <td>{p.allicin}</td>
                    <td className="text-gray-500">{p.uses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="section-heading mb-3">Applications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((col, i) => (
              <div key={i} className="bg-green-50 border border-green-100 rounded-2xl p-6">
                <ul className="space-y-3">
                  {col.map((a) => (
                    <li key={a} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#14532d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Request Dehydrated Garlic Samples</h2>
          <p className="text-green-200 mb-6">COA, microbiological reports, and samples available on request before order confirmation.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#d4a017] hover:bg-[#f0c040] text-[#14532d] font-bold px-6 py-3 rounded-xl text-sm transition-all">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
