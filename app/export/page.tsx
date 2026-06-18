import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Globe, Ship, FileText, Package } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import PageHeroDecor from '../components/PageHeroDecor';

export const metadata: Metadata = {
  title: 'Export & Packaging',
  description: 'Shritik Enterprises LLP exports cashew kernels and dehydrated food ingredients to 30+ countries. Learn about our export markets, packaging options, and documentation.',
  keywords: [
    'cashew nuts manufacturer exporter India',
    'cashew kernels manufacturer exporter',
    'premium cashew kernels export India',
    'cashew export from India',
    'onion powder exporter India',
    'beetroot powder exporter India',
    'dehydrated food export India',
    'food export packaging India',
    'FCL LCL food shipment India',
    'phytosanitary certificate India export',
    'food export documentation India',
  ],
  alternates: { canonical: 'https://www.shritikllp.com/export' },
  openGraph: {
    title: 'Export & Packaging — Shritik Enterprises LLP',
    description: 'Exporting cashew kernels and dehydrated food ingredients to 30+ countries. Full export documentation, flexible packaging, and logistics support.',
    url: 'https://www.shritikllp.com/export',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Export & Packaging — Shritik Enterprises LLP' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Export & Packaging — Shritik Enterprises LLP',
    description: 'Exporting cashew kernels and dehydrated food ingredients to 30+ countries.',
    images: ['/opengraph-image'],
  },
};

const exportMarkets = [
  { region: 'Middle East', emoji: '🌙', countries: 'UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain', products: 'Cashew kernels, dehydrated onion & garlic' },
  { region: 'Europe', emoji: '🇪🇺', countries: 'Netherlands, Germany, UK, Spain, France, Italy', products: 'All products — EU-compliant specifications' },
  { region: 'North America', emoji: '🌎', countries: 'USA, Canada', products: 'Cashew kernels, dehydrated ingredients' },
  { region: 'Southeast Asia', emoji: '🌏', countries: 'Vietnam, Thailand, Malaysia, Indonesia, Philippines', products: 'Cashew kernels, dehydrated onion & garlic' },
  { region: 'South Asia', emoji: '🇮🇳', countries: 'Sri Lanka, Bangladesh, Nepal', products: 'All products' },
  { region: 'Africa', emoji: '🌍', countries: 'South Africa, Kenya, Nigeria, Egypt', products: 'Cashew kernels, dehydrated ingredients' },
  { region: 'Australia & NZ', emoji: '🦘', countries: 'Australia, New Zealand', products: 'Cashew kernels, dehydrated vegetables' },
  { region: 'Central Asia', emoji: '🏔️', countries: 'Kazakhstan, Uzbekistan', products: 'Dehydrated ingredients' },
];

const exportServices = [
  { num: '01', title: 'Pre-Shipment Quality Check', desc: 'Third-party or buyer-nominated lab testing before shipping — we facilitate access and sampling.' },
  { num: '02', title: 'Export Documentation', desc: 'Full documentation support: phytosanitary, fumigation, COO, commercial invoice, packing list, COA.' },
  { num: '03', title: 'Freight & Logistics Coordination', desc: 'We coordinate with freight forwarders for FCL and LCL shipments from Indian ports.' },
  { num: '04', title: 'Regulatory Compliance', desc: 'Products prepared to meet EU, US FDA, Gulf standards, and destination country requirements.' },
  { num: '05', title: 'Custom Labelling', desc: 'Private label or white-label packaging with your branding, nutrition info, and barcodes.' },
  { num: '06', title: 'Real-Time Updates', desc: 'Shipment tracking and documentation shared proactively throughout the export process.' },
];

const cashewPackaging = [
  '25kg vacuum-sealed foil bags in cartons',
  '10kg vacuum-sealed foil bags in cartons',
  'Custom retail pouches (250g, 500g, 1kg) — private label',
  'Bulk 50kg polypropylene bags with inner liner',
];

const dehydratedPackaging = [
  '25kg multi-layer paper/poly bags',
  '10kg food-grade poly bags in cartons',
  'Retail jars or pouches (private label, on request)',
  'Drums for powder products (20kg net)',
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shritikllp.com" },
    { "@type": "ListItem", position: 2, name: "Export & Packaging", item: "https://www.shritikllp.com/export" },
  ],
};

export default function ExportPage() {
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
            <Link href="/">Home</Link><span>/</span>
            <span className="text-white">Export & Packaging</span>
          </div>
          <h1 className="ph-title font-serif text-4xl sm:text-5xl font-bold text-white mb-4">Export & Packaging</h1>
          <p className="ph-desc text-green-100 text-lg max-w-2xl">
            We ship to 30+ countries with full export documentation, compliance support, and flexible packaging options for every market.
          </p>
        </div>
      </div>

      {/* Export Markets */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="up">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-[#d4a017] uppercase tracking-widest mb-3">Global Reach</p>
              <h2 className="section-heading mb-4">Export Markets</h2>
              <div className="accent-line-anim sr-visible mx-auto" />
              <p className="section-subheading mx-auto text-center">
                Trusted buyers across the globe receive consistent, certified product from Shritik Enterprises LLP.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {exportMarkets.map((m, i) => (
              <ScrollReveal key={m.region} animation="pop" delay={i * 65}>
                <div className="bg-[#f8fdf9] border border-green-100 rounded-2xl p-5 market-card card-shimmer h-full">
                  <div className="text-3xl mb-3 float-icon">{m.emoji}</div>
                  <h3 className="font-semibold text-[#1a472a] text-sm mb-1">{m.region}</h3>
                  <p className="text-xs text-gray-500 mb-2">{m.countries}</p>
                  <p className="text-xs text-[#2d6a4f] font-medium">{m.products}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Export Services */}
      <section className="py-20 bg-[#f8fdf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="up">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-[#d4a017] uppercase tracking-widest mb-3">End-to-End Support</p>
              <h2 className="section-heading mb-4">Export Services</h2>
              <div className="accent-line-anim sr-visible mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {exportServices.map((s, i) => (
              <ScrollReveal key={s.num} animation="up" delay={i * 80}>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm process-card card-shimmer h-full">
                  <div className="font-mono text-3xl font-bold text-[#d4a017] mb-3 leading-none step-num-glow">{s.num}</div>
                  <h3 className="font-semibold text-[#1a472a] mb-2 text-sm">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="up">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-[#d4a017] uppercase tracking-widest mb-3">Flexible Options</p>
              <h2 className="section-heading mb-4">Packaging Options</h2>
              <div className="accent-line-anim sr-visible mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal animation="left">
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-8 facility-card card-shimmer h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="float-icon"><img src="/images/cashew-icon.png" alt="Cashew" className="w-10 h-10" /></div>
                  <h3 className="font-serif text-xl font-bold text-amber-900">Cashew Kernel Packaging</h3>
                </div>
                <ul className="space-y-3">
                  {cashewPackaging.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="right">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 facility-card card-shimmer h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="text-3xl float-icon-delayed">🌿</div>
                  <h3 className="font-serif text-xl font-bold text-green-900">Dehydrated Product Packaging</h3>
                </div>
                <ul className="space-y-3">
                  {dehydratedPackaging.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Package, title: 'Custom Sizes', desc: 'We accommodate non-standard pack sizes for large buyers.' },
              { icon: FileText, title: 'Custom Labelling', desc: 'Nutrition labels, barcodes, and language variants for any market.' },
              { icon: Ship, title: 'FCL & LCL', desc: 'Full container loads and groupage shipments supported.' },
              { icon: Globe, title: 'Any Port', desc: 'Experience shipping to major ports across all export regions.' },
            ].map((b, i) => (
              <ScrollReveal key={b.title} animation="up" delay={i * 70}>
                <div className="bg-[#f8fdf9] border border-gray-100 rounded-xl p-5 text-center card-hover card-shimmer why-card h-full">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center mx-auto mb-3 why-icon">
                    <b.icon className="w-5 h-5 text-[#2d6a4f]" />
                  </div>
                  <h4 className="font-semibold text-[#1a472a] text-sm mb-1">{b.title}</h4>
                  <p className="text-xs text-gray-500">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a472a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="up">
            <Ship className="w-10 h-10 text-[#d4a017] mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-bold text-white mb-4">Ready to Start Importing from India?</h2>
            <p className="text-green-200 mb-6">
              Share your product, quantity, destination, and packaging requirements — we&apos;ll send a detailed quote within 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#d4a017] hover:bg-[#f0c040] text-[#1a472a] font-bold px-6 py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5"
            >
              Send Export Inquiry <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
