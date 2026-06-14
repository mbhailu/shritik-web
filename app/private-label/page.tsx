import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Package, Star, Zap, Users } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import PageHeroDecor from '../components/PageHeroDecor';

export const metadata: Metadata = {
  title: 'Private Label',
  description: 'Private label cashew kernels, dehydrated onion, garlic, and ginger from India. Custom packaging, branding, and formulation support for food brands worldwide.',
  keywords: [
    'private label cashew kernels India',
    'private label dehydrated vegetables India',
    'white label food manufacturer India',
    'custom packaging food export India',
    'co-packing food ingredients India',
    'own brand food manufacturing India',
  ],
  alternates: { canonical: 'https://www.shritikllp.com/private-label' },
  openGraph: {
    title: 'Private Label Food Manufacturing — Shritik Enterprises LLP',
    description: 'Custom private label cashew kernels, dehydrated onion, garlic, and ginger from India. Your brand, our manufacturing expertise.',
    url: 'https://www.shritikllp.com/private-label',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Private Label Food Manufacturing — Shritik Enterprises LLP' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Label Food Manufacturing — Shritik Enterprises LLP',
    description: 'Custom private label cashew kernels and dehydrated food ingredients from India.',
    images: ['/opengraph-image'],
  },
};

const whoWeServe = [
  { emoji: '🛒', name: 'Retail Brands' },
  { emoji: '🏪', name: 'Specialty Food Stores' },
  { emoji: '🍽️', name: 'Restaurant Chains' },
  { emoji: '🧂', name: 'Spice Brands' },
  { emoji: '📦', name: 'E-Commerce Food Brands' },
  { emoji: '🏬', name: 'Supermarket Own Labels' },
  { emoji: '💊', name: 'Health & Wellness Brands' },
  { emoji: '🌍', name: 'International Distributors' },
  { emoji: '🍰', name: 'Bakery Ingredient Brands' },
  { emoji: '🌶️', name: 'Seasoning Companies' },
];

const supplyOptions = [
  { title: 'Own Brand Packaging', desc: 'We manufacture and pack under your brand name, logo, and packaging design. Minimum quantities are flexible.' },
  { title: 'White Label (Ready to Brand)', desc: 'Pre-packed, unbranded product ready for your labels — fastest time-to-market option.' },
  { title: 'Co-Packing', desc: 'Supply us your packaging material and we fill, seal, and pack to your specification.' },
  { title: 'Custom Formulation', desc: 'Blended seasoning mixes, custom granulation sizes, or specific moisture specs built to your brief.' },
];

const whyPartner = [
  'Low minimum order quantities — ideal for new product launches',
  'Custom pack sizes: retail pouches, jars, bulk bags, or tins',
  'Full nutritional labelling support for EU, US, and GCC markets',
  'Barcode generation and compliance label design on request',
  'Confidential NDA available for product formulations',
  'On-time delivery with pre-shipment QC and documentation',
];

const process = [
  { step: '01', title: 'Inquiry', desc: 'Share your product, quantity, pack size, and branding requirements.' },
  { step: '02', title: 'Quotation', desc: 'We send a detailed quote within 24–48 hours including lead time and MOQ.' },
  { step: '03', title: 'Sample', desc: 'A pre-production sample is produced for your approval before bulk manufacture.' },
  { step: '04', title: 'Production', desc: 'Bulk production begins upon sample approval and order confirmation.' },
  { step: '05', title: 'QC & Pack', desc: 'Final product is tested, packed under your brand, and documented for export.' },
  { step: '06', title: 'Dispatch', desc: 'Shipment sent with full documentation. Tracking provided throughout.' },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shritikllp.com" },
    { "@type": "ListItem", position: 2, name: "Private Label", item: "https://www.shritikllp.com/private-label" },
  ],
};

export default function PrivateLabelPage() {
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
            <span className="text-white">Private Label</span>
          </div>
          <h1 className="ph-title font-serif text-4xl sm:text-5xl font-bold text-white mb-4">Private Label Services</h1>
          <p className="ph-desc text-green-100 text-lg max-w-2xl">
            Launch your own brand of cashew kernels or dehydrated food ingredients. We manufacture, pack, and export — you focus on your brand.
          </p>
        </div>
      </div>

      {/* Who We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="up">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-[#d4a017] uppercase tracking-widest mb-3">Who We Work With</p>
              <h2 className="section-heading mb-4">We Serve Brands Worldwide</h2>
              <div className="accent-line-anim sr-visible mx-auto" />
              <p className="section-subheading mx-auto text-center">
                From startup food brands to established supermarket chains, we partner with businesses of all sizes.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {whoWeServe.map((w, i) => (
              <ScrollReveal key={w.name} animation="pop" delay={i * 60}>
                <div className="bg-[#f8fdf9] border border-green-100 rounded-2xl p-5 text-center serve-card card-shimmer h-full">
                  <div className="text-3xl mb-2 float-icon">{w.emoji}</div>
                  <p className="text-xs font-semibold text-[#1a472a]">{w.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Options */}
      <section className="py-20 bg-[#f8fdf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="up">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-[#d4a017] uppercase tracking-widest mb-3">Flexible Models</p>
              <h2 className="section-heading mb-4">Supply Options</h2>
              <div className="accent-line-anim sr-visible mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supplyOptions.map((opt, i) => (
              <ScrollReveal key={opt.title} animation="up" delay={i * 80}>
                <div className="bg-gradient-to-br from-[#1a472a] to-[#2d6a4f] rounded-2xl p-6 text-white supply-card card-shimmer h-full">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#d4a017] font-bold text-sm mb-4">
                    0{i + 1}
                  </div>
                  <h3 className="font-semibold text-white mb-3 text-sm">{opt.title}</h3>
                  <p className="text-green-200 text-xs leading-relaxed">{opt.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal animation="left">
              <p className="text-sm font-semibold text-[#d4a017] uppercase tracking-widest mb-3">Why Partner With Us</p>
              <h2 className="section-heading mb-4">Everything You Need to Launch</h2>
              <div className="accent-line-anim sr-visible" />
              <p className="text-gray-600 leading-relaxed mb-6">
                We handle manufacturing, testing, packing, and export — leaving you free to focus on building your brand and growing your customer base.
              </p>
              <ul className="space-y-3">
                {whyPartner.map((item, i) => (
                  <ScrollReveal key={item} animation="up" delay={i * 55}>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#2d6a4f] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal animation="right">
              <div className="space-y-4">
                {[
                  { icon: Package, title: 'Packaging Design Support', desc: 'We can connect you with packaging designers who understand food labelling regulations for your target market.' },
                  { icon: Star, title: 'Sample Before You Commit', desc: 'Pre-production samples are standard. You approve quality before bulk manufacture begins.' },
                  { icon: Zap, title: 'Fast Turnaround', desc: 'Typical lead time of 15–25 days from approved sample to shipment dispatch.' },
                  { icon: Users, title: 'Dedicated Account Manager', desc: 'One point of contact who knows your brand, your specs, and your delivery schedule.' },
                ].map((b, i) => (
                  <ScrollReveal key={b.title} animation="up" delay={i * 70}>
                    <div className="flex gap-4 bg-[#f8fdf9] border border-green-100 rounded-xl p-5 card-shimmer why-card">
                      <div className="w-10 h-10 rounded-xl bg-[#f0fdf4] flex items-center justify-center flex-shrink-0 why-icon">
                        <b.icon className="w-5 h-5 text-[#2d6a4f]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1a472a] text-sm mb-1">{b.title}</h3>
                        <p className="text-gray-600 text-xs leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#f8fdf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="up">
            <div className="text-center mb-14">
              <h2 className="section-heading mb-4">How It Works</h2>
              <div className="accent-line-anim sr-visible mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((p, i) => (
              <ScrollReveal key={p.step} animation="up" delay={i * 75}>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm process-card card-shimmer h-full">
                  <div className="font-mono text-3xl font-bold text-[#d4a017] mb-3 leading-none step-num-glow">{p.step}</div>
                  <h3 className="font-semibold text-[#1a472a] mb-2 text-sm">{p.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#1a472a] to-[#2d6a4f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="up">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-green-200 font-medium mb-5">
              <Star className="w-4 h-4 text-[#d4a017]" fill="currentColor" />
              Start Your Private Label Journey
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              Let&apos;s Build Your Brand Together
            </h2>
            <p className="text-green-100 mb-8">
              Share your product concept and we&apos;ll handle everything from manufacturing to export-ready packaging. Get a quote in 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#d4a017] hover:bg-[#f0c040] text-[#1a472a] font-bold px-6 py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5"
            >
              Start Your Inquiry <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
