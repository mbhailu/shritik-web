import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dehydrated Onion',
  description: 'Dehydrated onion flakes, minced, granules, and powder — white and red varieties. Exported from India with FSSAI and Halal certification.',
  keywords: [
    'dehydrated onion exporter India',
    'dried onion flakes wholesale India',
    'onion powder bulk supplier India',
    'red onion flakes exporter India',
    'onion granules minced India',
    'Halal dehydrated onion India',
  ],
  alternates: { canonical: 'https://www.shritikenterprises.com/products/dehydrated-onion' },
  openGraph: {
    title: 'Dehydrated Onion Exporter India — Flakes, Granules & Powder',
    description: 'Dehydrated white and red onion in flakes, minced, granules, and powder form. FSSAI, APEDA & Halal certified. Exported from India.',
    url: 'https://www.shritikenterprises.com/products/dehydrated-onion',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Dehydrated Onion — Shritik Enterprises LLP' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dehydrated Onion Exporter India — Flakes, Granules & Powder',
    description: 'White and red dehydrated onion in all forms exported from India. FSSAI & Halal certified.',
    images: ['/opengraph-image'],
  },
};

const products = [
  { form: 'Flakes', size: '3–5mm', moisture: 'Max 6%', color: 'White / Light cream', uses: 'Soups, sauces, pizza toppings' },
  { form: 'Minced', size: '1–3mm', moisture: 'Max 6%', color: 'White / Light cream', uses: 'Ready meals, seasoning blends' },
  { form: 'Granules', size: '0.5–1mm', moisture: 'Max 6%', color: 'White / Light cream', uses: 'Spice mixes, dry rubs' },
  { form: 'Powder', size: '40–80 mesh', moisture: 'Max 6%', color: 'Off-white / Cream', uses: 'Gravies, sauces, instant foods' },
  { form: 'Red Onion Flakes', size: '3–5mm', moisture: 'Max 6%', color: 'Red / Pink', uses: 'Salads, garnishes, retail' },
  { form: 'Red Onion Powder', size: '40–80 mesh', moisture: 'Max 6%', color: 'Light pink', uses: 'Seasoning blends, dressings' },
];

const highlights = [
  'Made from fresh, mature onions with strong pungency',
  'Low moisture content for excellent shelf life (18–24 months)',
  'High rehydration ratio — 1kg powder rehydrates to approx. 7–8kg fresh',
  'No artificial colour, preservatives, or additives',
  'Available in white and red onion varieties',
  'FSSAI, APEDA, Halal, and Kosher certified',
];

const applications = [
  ['Soups & instant noodles', 'Seasoning blends & spice mixes', 'Ready meals & frozen foods'],
  ['Pizza & pasta sauces', 'Snack coatings & chips', 'Meat marinades & rubs'],
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shritikenterprises.com" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://www.shritikenterprises.com/products" },
    { "@type": "ListItem", position: 3, name: "Dehydrated Onion", item: "https://www.shritikenterprises.com/products/dehydrated-onion" },
  ],
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Dehydrated Onion",
  description: "Dehydrated white and red onion in flakes, minced, granules, and powder. Consistent pungency, colour, and rehydration ratio — processed from fresh Indian onions.",
  brand: { "@type": "Brand", name: "Shritik Enterprises LLP" },
  manufacturer: {
    "@type": "Organization",
    name: "Shritik Enterprises LLP",
    url: "https://www.shritikenterprises.com",
  },
  countryOfOrigin: { "@type": "Country", name: "India" },
  category: "Dehydrated Vegetables",
  additionalProperty: [
    { "@type": "PropertyValue", name: "Forms", value: "Flakes, Minced, Granules, Powder" },
    { "@type": "PropertyValue", name: "Varieties", value: "White Onion, Red Onion" },
    { "@type": "PropertyValue", name: "Moisture", value: "Max 6%" },
    { "@type": "PropertyValue", name: "Shelf Life", value: "18–24 Months" },
    { "@type": "PropertyValue", name: "Certifications", value: "FSSAI, APEDA, Halal, Kosher" },
  ],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    seller: { "@type": "Organization", name: "Shritik Enterprises LLP" },
    url: "https://www.shritikenterprises.com/products/dehydrated-onion",
  },
};

export default function DehydratedOnionPage() {
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
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #581c87 0%, #7c3aed 60%, #a855f7 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/products">Products</Link><span>/</span>
            <span className="text-white">Dehydrated Onion</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🧅</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">Dehydrated Onion</h1>
          </div>
          <p className="text-purple-100 text-lg max-w-2xl">White and red onion — flakes, minced, granules, and powder. Consistent pungency, colour, and rehydration ratio for food manufacturers worldwide.</p>
        </div>
      </div>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-3">Product Overview</p>
              <h2 className="section-heading mb-4">Consistent Quality, Every Batch</h2>
              <div className="accent-line" />
              <p className="text-gray-600 leading-relaxed mb-6">
                Our dehydrated onion is produced in a dedicated dehydration plant using fresh onions sourced from Gujarat and Rajasthan — India&apos;s largest onion-growing regions. We use carefully controlled temperature drying to preserve natural pungency and colour.
              </p>
              <ul className="space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-3xl p-10 text-center">
              <div className="text-8xl mb-6">🧅</div>
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Moisture</div>
                  <div className="font-bold text-purple-800">Max 6%</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Forms</div>
                  <div className="font-bold text-purple-800">6 Variants</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Shelf Life</div>
                  <div className="font-bold text-purple-800">18–24 Months</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Pack Sizes</div>
                  <div className="font-bold text-purple-800">10kg–25kg Bags</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Table */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading mb-3">Available Forms & Specifications</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-card">
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ background: '#581c87' }}>Form</th>
                  <th style={{ background: '#581c87' }}>Particle Size</th>
                  <th style={{ background: '#581c87' }}>Moisture</th>
                  <th style={{ background: '#581c87' }}>Colour</th>
                  <th style={{ background: '#581c87' }}>Typical Uses</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.form}>
                    <td className="font-bold text-purple-800">{p.form}</td>
                    <td>{p.size}</td>
                    <td>{p.moisture}</td>
                    <td>{p.color}</td>
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
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((col, i) => (
              <div key={i} className="bg-purple-50 border border-purple-100 rounded-2xl p-6">
                <ul className="space-y-3">
                  {col.map((a) => (
                    <li key={a} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
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
      <section className="py-14 bg-[#581c87]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Request Dehydrated Onion Samples</h2>
          <p className="text-purple-200 mb-6">We supply COA, lab reports, and samples before you commit to an order.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#d4a017] hover:bg-[#f0c040] text-[#581c87] font-bold px-6 py-3 rounded-xl text-sm transition-all">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
