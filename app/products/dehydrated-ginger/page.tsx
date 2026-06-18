import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dehydrated Ginger',
  description: 'Dehydrated ginger slices, flakes, granules, and powder retaining natural gingerol. Exported from India with FSSAI, Halal, and Kosher certification.',
  keywords: [
    'ginger powder manufacturer India',
    'dehydrated ginger manufacturer India',
    'ginger powder bulk manufacturer',
    'premium quality ginger powder India',
    'dehydrated ginger exporter India',
    'dried ginger powder bulk India',
    'ginger flakes granules supplier India',
    'high gingerol ginger powder India',
    'ginger for herbal tea supplier',
    'Halal Kosher ginger powder India',
  ],
  alternates: { canonical: 'https://www.shritikllp.com/products/dehydrated-ginger' },
  openGraph: {
    title: 'Dehydrated Ginger Exporter India — Slices, Flakes & Powder',
    description: 'Dehydrated ginger slices, flakes, granules, and powder with natural gingerol retained. FSSAI, APEDA, Halal & Kosher certified. Exported from India.',
    url: 'https://www.shritikllp.com/products/dehydrated-ginger',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Dehydrated Ginger — Shritik Enterprises LLP' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dehydrated Ginger Exporter India — Slices, Flakes & Powder',
    description: 'Natural gingerol-rich dehydrated ginger in all forms exported from India.',
    images: ['/opengraph-image'],
  },
};

const products = [
  { form: 'Slices', size: '3–5mm', moisture: 'Max 8%', gingerol: 'High', uses: 'Herbal teas, beverages' },
  { form: 'Flakes', size: '2–4mm', moisture: 'Max 8%', gingerol: 'High', uses: 'Bakery, confectionery' },
  { form: 'Granules', size: '0.5–1mm', moisture: 'Max 8%', gingerol: 'High', uses: 'Spice blends, dry mixes' },
  { form: 'Powder', size: '40–80 mesh', moisture: 'Max 8%', gingerol: 'Medium-High', uses: 'Curry mixes, sauces, supplements' },
];

const highlights = [
  'Made from fresh, mature ginger root with high gingerol content',
  'Low-temperature drying retains volatile essential oils',
  'Natural fibrous texture and characteristic heat/spice profile',
  'No added sulphites, bleaching agents, or preservatives',
  'Suitable for beverages, bakery, and nutraceutical applications',
  'FSSAI, APEDA, Halal, and Kosher certified',
];

const applications = [
  { emoji: '🫖', name: 'Herbal Teas & Drinks', desc: 'Ginger slices and powder used in wellness teas, ginger ale, and functional beverages.' },
  { emoji: '🍪', name: 'Bakery & Confectionery', desc: 'Flakes and granules for gingerbread, biscuits, cakes, and chocolate.' },
  { emoji: '🍛', name: 'Curry & Sauces', desc: 'Powder and granules in curry mixes, hot sauces, and marinades.' },
  { emoji: '💊', name: 'Health Supplements', desc: 'High-gingerol powder for nutraceuticals, capsules, and wellness blends.' },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shritikllp.com" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://www.shritikllp.com/products" },
    { "@type": "ListItem", position: 3, name: "Dehydrated Ginger", item: "https://www.shritikllp.com/products/dehydrated-ginger" },
  ],
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Dehydrated Ginger",
  description: "Dehydrated ginger slices, flakes, granules, and powder retaining natural gingerol. Controlled dehydration preserves essential oils and characteristic heat. Processed in India.",
  brand: { "@type": "Brand", name: "Shritik Enterprises LLP" },
  manufacturer: {
    "@type": "Organization",
    name: "Shritik Enterprises LLP",
    url: "https://www.shritikllp.com",
  },
  countryOfOrigin: { "@type": "Country", name: "India" },
  category: "Dehydrated Spices",
  additionalProperty: [
    { "@type": "PropertyValue", name: "Forms", value: "Slices, Flakes, Granules, Powder" },
    { "@type": "PropertyValue", name: "Key Compound", value: "High Gingerol Content" },
    { "@type": "PropertyValue", name: "Moisture", value: "Max 8%" },
    { "@type": "PropertyValue", name: "Shelf Life", value: "18–24 Months" },
    { "@type": "PropertyValue", name: "Certifications", value: "FSSAI, APEDA, Halal, Kosher" },
  ],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    seller: { "@type": "Organization", name: "Shritik Enterprises LLP" },
    url: "https://www.shritikllp.com/products/dehydrated-ginger",
  },
};

export default function DehydratedGingerPage() {
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
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #7c2d12 0%, #c2410c 60%, #ea580c 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/products">Products</Link><span>/</span>
            <span className="text-white">Dehydrated Ginger</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🫚</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">Dehydrated Ginger</h1>
          </div>
          <p className="text-orange-100 text-lg max-w-2xl">Natural gingerol retained through controlled dehydration. Available in slices, flakes, granules, and powder for food and nutraceutical manufacturers.</p>
        </div>
      </div>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-orange-600 uppercase tracking-widest mb-3">Product Overview</p>
              <h2 className="section-heading mb-4">Maximum Potency, Minimal Processing</h2>
              <div className="accent-line" />
              <p className="text-gray-600 leading-relaxed mb-6">
                Our ginger is sourced from prime growing regions — Kerala and Himachal Pradesh — where the gingerol content is naturally highest. We peel, slice, and dehydrate at carefully controlled temperatures to preserve the characteristic heat, flavour, and bioactive compounds that buyers demand.
              </p>
              <ul className="space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-3xl p-10 text-center">
              <div className="text-8xl mb-6">🫚</div>
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Moisture</div>
                  <div className="font-bold text-orange-800">Max 8%</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Forms</div>
                  <div className="font-bold text-orange-800">4 Variants</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Shelf Life</div>
                  <div className="font-bold text-orange-800">18–24 Months</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Key Compound</div>
                  <div className="font-bold text-orange-800">Gingerol (High)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading mb-3">Available Forms & Specifications</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-card">
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ background: '#7c2d12' }}>Form</th>
                  <th style={{ background: '#7c2d12' }}>Particle Size</th>
                  <th style={{ background: '#7c2d12' }}>Moisture</th>
                  <th style={{ background: '#7c2d12' }}>Gingerol</th>
                  <th style={{ background: '#7c2d12' }}>Typical Uses</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.form}>
                    <td className="font-bold text-orange-800">{p.form}</td>
                    <td>{p.size}</td>
                    <td>{p.moisture}</td>
                    <td>{p.gingerol}</td>
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
          <div className="text-center mb-10">
            <h2 className="section-heading mb-3">Applications</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((a) => (
              <div key={a.name} className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
                <div className="text-3xl mb-3">{a.emoji}</div>
                <h3 className="font-semibold text-orange-900 mb-2 text-sm">{a.name}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#7c2d12]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Request Dehydrated Ginger Samples</h2>
          <p className="text-orange-200 mb-6">Lab reports, COA, and product samples available before you place your first order.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#d4a017] hover:bg-[#f0c040] text-[#7c2d12] font-bold px-6 py-3 rounded-xl text-sm transition-all">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
