import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import PageHeroDecor from '../components/PageHeroDecor';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore Shritik Enterprises LLP product range: cashew kernels (W180–W450), dehydrated onion, dehydrated garlic, and dehydrated ginger for global food markets.',
  keywords: [
    'cashew kernels manufacturer company',
    'cashew nuts manufacturer India',
    'premium quality cashew kernels',
    'premium quality cashew nuts',
    'cashew kernels W320 W180 India',
    'onion powder manufacturer India',
    'dehydrated onion flakes powder India',
    'beetroot powder supplier India',
    'dehydrated garlic granules India',
    'dehydrated ginger powder India',
    'food ingredients export India',
    'bulk food ingredients wholesale India',
    'dehydrated vegetable powder manufacturer India',
  ],
  alternates: { canonical: 'https://www.shritikllp.com/products' },
  openGraph: {
    title: 'Products — Shritik Enterprises LLP',
    description: 'Cashew kernels (W180–W450), dehydrated onion, garlic, and ginger. All products manufactured in-house, certified, and available for global export.',
    url: 'https://www.shritikllp.com/products',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Food Products — Shritik Enterprises LLP' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products — Shritik Enterprises LLP',
    description: 'Cashew kernels, dehydrated onion, garlic, and ginger manufactured and exported from India.',
    images: ['/opengraph-image'],
  },
};

const products = [
  {
    emoji: '/images/cashew-icon.png',
    name: 'Cashew Kernels',
    href: '/products/cashew-kernels',
    tagline: 'Premium grades for every application',
    desc: 'Sourced from the finest cashew belts and processed in our state-of-the-art facility, our cashew kernels are available in all internationally traded grades — whole, splits, and pieces.',
    grades: ['W180', 'W210', 'W240', 'W320', 'W450', 'SW', 'SSW', 'JH', 'LWP', 'SWP', 'BB', 'SP', 'Broken'],
    forms: ['Whole Kernels', 'Splits & Pieces', 'Roasted (on request)'],
    applications: ['Snacking & retail', 'Confectionery & chocolate', 'Bakery & granola', 'Food service & catering'],
    color: 'from-amber-500 to-yellow-500',
    bg: 'from-amber-50 to-yellow-50',
    border: 'border-amber-200',
    btnClass: 'bg-amber-600 hover:bg-amber-700 text-white',
    tagClass: 'bg-amber-100 text-amber-800',
    floatClass: 'float-icon',
  },
  {
    emoji: '🧅',
    name: 'Dehydrated Onion',
    href: '/products/dehydrated-onion',
    tagline: 'White & red varieties, all forms',
    desc: 'Processed from fresh white and red onions in our dedicated dehydration plant. Consistent pungency, colour, and rehydration ratio — ideal for food manufacturers and spice blenders.',
    grades: ['Flakes (3–5mm)', 'Minced (1–3mm)', 'Granules (0.5–1mm)', 'Powder (40–80 mesh)'],
    forms: ['White Onion', 'Red Onion', 'Kibbled / Chopped'],
    applications: ['Soups & sauces', 'Seasoning blends', 'Ready meals', 'Snack coatings'],
    color: 'from-purple-500 to-pink-500',
    bg: 'from-purple-50 to-pink-50',
    border: 'border-purple-200',
    btnClass: 'bg-purple-700 hover:bg-purple-800 text-white',
    tagClass: 'bg-purple-100 text-purple-800',
    floatClass: 'float-icon-slow',
  },
  {
    emoji: '🧄',
    name: 'Dehydrated Garlic',
    href: '/products/dehydrated-garlic',
    tagline: 'High allicin, full range of forms',
    desc: 'Made from fresh, mature garlic bulbs using low-temperature dehydration to preserve allicin content, flavour compounds, and natural colour. Trusted by spice companies worldwide.',
    grades: ['Flakes (3–5mm)', 'Granules (0.5–1mm)', 'Minced (1–3mm)', 'Powder (40–80 mesh)'],
    forms: ['Natural Garlic', 'Roasted Garlic (on request)'],
    applications: ['Seasoning blends', 'Marinades & rubs', 'Instant noodles', 'Processed meats'],
    color: 'from-green-500 to-emerald-500',
    bg: 'from-green-50 to-emerald-50',
    border: 'border-green-200',
    btnClass: 'bg-green-700 hover:bg-green-800 text-white',
    tagClass: 'bg-green-100 text-green-800',
    floatClass: 'float-icon-delayed',
  },
  {
    emoji: '🫚',
    name: 'Dehydrated Ginger',
    href: '/products/dehydrated-ginger',
    tagline: 'Natural gingerol, maximum potency',
    desc: 'Fresh ginger roots carefully cleaned, peeled, and dehydrated at controlled temperatures to retain natural gingerol, shogaols, and essential oils. Available in slices, flakes, granules, and powder.',
    grades: ['Slices (3–5mm)', 'Flakes (2–4mm)', 'Granules (0.5–1mm)', 'Powder (40–80 mesh)'],
    forms: ['Natural', 'Steam-treated (on request)'],
    applications: ['Beverages & teas', 'Bakery & confectionery', 'Health supplements', 'Curry pastes & sauces'],
    color: 'from-orange-500 to-amber-500',
    bg: 'from-orange-50 to-amber-50',
    border: 'border-orange-200',
    btnClass: 'bg-orange-600 hover:bg-orange-700 text-white',
    tagClass: 'bg-orange-100 text-orange-800',
    floatClass: 'float-icon',
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shritikllp.com" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://www.shritikllp.com/products" },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Animated Page Hero */}
      <div className="page-hero-animated">
        <PageHeroDecor />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="breadcrumb ph-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span className="text-white">Products</span>
          </div>
          <h1 className="ph-title font-serif text-4xl sm:text-5xl font-bold text-white mb-4">Our Products</h1>
          <p className="ph-desc text-green-100 text-lg max-w-2xl">
            Certified, export-ready food ingredients manufactured in-house. Available in customised forms, grades, and packaging.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {products.map((p, i) => (
            <ScrollReveal key={p.name} animation={i % 2 === 0 ? 'left' : 'right'} delay={0}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${p.color} text-white rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-4`}>
                    {p.emoji.startsWith('/') ? <img src={p.emoji} alt="" className="w-5 h-5" /> : p.emoji}
                    {p.name}
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-[#1a472a] mb-2">{p.tagline}</h2>
                  <div className="accent-line-anim sr-visible" />
                  <p className="text-gray-600 leading-relaxed mb-6">{p.desc}</p>

                  <div className="mb-5">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Available Grades / Forms</p>
                    <div className="flex flex-wrap gap-2">
                      {p.grades.map((g, gi) => (
                        <span
                          key={g}
                          className={`px-3 py-1 rounded-full text-xs font-semibold tag-pop ${p.tagClass}`}
                          style={{ animationDelay: `${gi * 60}ms` }}
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Applications</p>
                    <ul className="space-y-1.5">
                      {p.applications.map((a) => (
                        <li key={a} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-[#2d6a4f] flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={p.href}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:-translate-y-0.5 ${p.btnClass}`}
                  >
                    Full Product Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Visual panel */}
                <div className={`bg-gradient-to-br ${p.bg} border ${p.border} rounded-3xl p-10 flex flex-col items-center justify-center text-center card-shimmer facility-card ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`mb-6 ${p.floatClass}`}>
                    {p.emoji.startsWith('/')
                      ? <img src={p.emoji} alt={p.name} className="w-28 h-28 mx-auto" />
                      : <span className="text-8xl">{p.emoji}</span>}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1a472a] mb-3">{p.name}</h3>
                  <div className="space-y-2 w-full max-w-xs">
                    {p.forms.map((f) => (
                      <div key={f} className="flex items-center gap-2 bg-white/70 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#2d6a4f] flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f8fdf9] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="up">
            <h2 className="section-heading mb-4">Need Customised Specifications?</h2>
            <p className="section-subheading mx-auto text-center mb-8">
              We work with buyers to tailor moisture levels, granulation sizes, packaging formats, and certifications to your exact requirements.
            </p>
            <Link href="/contact" className="btn-primary">
              Discuss Your Requirements <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
