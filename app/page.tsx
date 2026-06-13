'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Leaf, Shield, Globe, Award, CheckCircle, ChevronRight, Star, Package, Truck, Users, Factory } from 'lucide-react';
import HeroSlideshow from './components/HeroSlideshow';
import ScrollReveal from './components/ScrollReveal';
import FloatingLeaves from './components/FloatingLeaves';

function AnimatedCounter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { label: 'Years of Experience', value: 10, suffix: '+' },
  { label: 'Export Countries', value: 30, suffix: '+' },
  { label: 'MT Annual Capacity', value: 5000, suffix: '+' },
  { label: 'Certifications', value: 6, suffix: '' },
];

const products = [
  {
    name: 'Cashew Kernels',
    desc: 'Premium W180 to W450 grades and splits — whole, broken, and splits for snacking, confectionery, and food processing.',
    href: '/products/cashew-kernels',
    icon: '/images/cashew.png',
    tags: ['W180', 'W240', 'W320', 'W450', 'Splits'],
    color: 'from-amber-50 to-yellow-50',
    border: 'border-amber-200',
    badge: 'bg-amber-100 text-amber-800',
  },
  {
    name: 'Dehydrated Onion',
    desc: 'Flakes, minced, granules, and powder in white and red varieties. Consistent colour, pungency, and rehydration ratio.',
    href: '/products/dehydrated-onion',
    icon: '🧅',
    tags: ['Flakes', 'Minced', 'Granules', 'Powder'],
    color: 'from-purple-50 to-pink-50',
    border: 'border-purple-200',
    badge: 'bg-purple-100 text-purple-800',
  },
  {
    name: 'Dehydrated Garlic',
    desc: 'Flakes, granules, minced, and powder with high allicin content. Ideal for seasonings, sauces, and ready meals.',
    href: '/products/dehydrated-garlic',
    icon: '🧄',
    tags: ['Flakes', 'Granules', 'Minced', 'Powder'],
    color: 'from-green-50 to-emerald-50',
    border: 'border-green-200',
    badge: 'bg-green-100 text-green-800',
  },
  {
    name: 'Dehydrated Ginger',
    desc: 'Slices, flakes, granules, and powder retaining natural gingerol. Used in beverages, bakery, and health products.',
    href: '/products/dehydrated-ginger',
    icon: '🫚',
    tags: ['Slices', 'Flakes', 'Granules', 'Powder'],
    color: 'from-orange-50 to-amber-50',
    border: 'border-orange-200',
    badge: 'bg-orange-100 text-orange-800',
  },
];

const whyUs = [
  { icon: Factory, title: 'Integrated Manufacturing', desc: 'Own processing units for cashews and dehydrated vegetables — no middlemen, consistent supply.' },
  { icon: Shield, title: 'Certified Quality', desc: 'FSSAI, APEDA, IEC, ISO, Halal, and Kosher certified. Rigorous QC at every production stage.' },
  { icon: Package, title: 'Custom Packaging', desc: 'Flexible MOQs with private label, bulk, and retail-ready packaging options for any market.' },
  { icon: Globe, title: 'Global Export Expertise', desc: 'Serving buyers in Middle East, Europe, North America, Southeast Asia, and Africa.' },
  { icon: Truck, title: 'Reliable Logistics', desc: 'Experienced in international shipping, documentation, and on-time delivery commitments.' },
  { icon: Users, title: 'Dedicated Support', desc: 'Dedicated export managers for each account. Responsive, solution-focused service.' },
];

const certifications = ['FSSAI', 'APEDA', 'IEC', 'ISO', 'Halal', 'Kosher'];

const industries = [
  { emoji: '🏭', name: 'Food Processing' },
  { emoji: '🧂', name: 'Seasonings & Spices' },
  { emoji: '🍜', name: 'Ready Meals & Soups' },
  { emoji: '🍫', name: 'Confectionery' },
  { emoji: '🥤', name: 'Beverages' },
  { emoji: '🥖', name: 'Bakery & Snacks' },
  { emoji: '🏪', name: 'Retail & Private Label' },
  { emoji: '💊', name: 'Nutraceuticals' },
];

const checkItems = [
  'End-to-end in-house processing — no outsourcing',
  'Flexible MOQ and private label capability',
  'Consistent year-round supply with buffer stock',
  'Dedicated export documentation support',
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Shritik Enterprises LLP",
  url: "https://www.shritikenterprises.com",
  logo: "https://www.shritikenterprises.com/logo.png",
  description:
    "India-based manufacturer and exporter of premium cashew kernels, dehydrated onion, garlic, and ginger. Certified with FSSAI, APEDA, IEC, ISO, Halal & Kosher.",
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
  sameAs: [],
  knowsAbout: [
    "Cashew Kernels Export",
    "Dehydrated Onion",
    "Dehydrated Garlic",
    "Dehydrated Ginger",
    "Food Ingredients Export",
    "Private Label Food",
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://www.shritikenterprises.com",
  name: "Shritik Enterprises LLP",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://www.shritikenterprises.com/products?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0d2b14]">
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #52b788 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d2b14] via-[#1a472a]/90 to-[#2d6a4f]/60" />
        {/* Floating leaves (nature / organic theme) */}
        <FloatingLeaves />
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-14 items-center w-full">

            {/* Left: text — staggered page-load animations */}
            <div className="lg:col-span-5">
              <div className="hero-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-green-200 font-medium mb-6">
                <Leaf className="w-4 h-4 text-[#52b788]" />
                India-based Manufacturer &amp; Exporter
              </div>
              <h1 className="hero-title font-serif text-5xl sm:text-6xl lg:text-5xl xl:text-[3.25rem] 2xl:text-6xl font-bold text-white leading-tight mb-6">
                Premium Food <br />
                <span className="text-gold-gradient">Ingredients</span> for<br />
                Global Markets
              </h1>
              <p className="hero-desc text-lg sm:text-xl text-green-100 leading-relaxed mb-10 max-w-xl">
                Shritik Enterprises LLP manufactures and exports certified cashew kernels, dehydrated onion, garlic, and ginger to buyers across 30+ countries. Quality you can trust, supply you can rely on.
              </p>
              <div className="hero-buttons flex flex-wrap gap-4">
                <Link href="/products" className="btn-accent">
                  Explore Products <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn-outline">
                  Request a Quote <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="hero-certs mt-10 flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <span key={cert} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-white backdrop-blur-sm">
                    {cert} Certified
                  </span>
                ))}
              </div>
            </div>

            {/* Right: slideshow — slides in from right */}
            <div className="lg:col-span-7">
              <div className="hero-slideshow relative h-[280px] sm:h-[360px] lg:h-[460px] xl:h-[520px]">
                <HeroSlideshow />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────── */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} animation="pop" delay={i * 100} className="stat-card text-center">
                <div className="font-serif text-4xl sm:text-5xl font-bold text-[#1a472a] mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro / About ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text — slides in from left */}
            <ScrollReveal animation="left">
              <p className="text-sm font-semibold text-[#d4a017] uppercase tracking-widest mb-3">Who We Are</p>
              <h2 className="section-heading mb-4">Trusted Source for Premium Indian Food Exports</h2>
              {/* Animated accent line */}
              <ScrollReveal animation="fade" delay={200} className="accent-line-anim" />
              <p className="section-subheading mb-6">
                Shritik Enterprises LLP is a certified manufacturer and exporter based in India, specialising in cashew kernels and dehydrated food ingredients for global food businesses.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                With our integrated processing facilities, we control quality from raw material sourcing through final export packaging. Our products meet international food safety standards and are trusted by importers, distributors, and food manufacturers worldwide.
              </p>
              <div className="space-y-3 mb-8">
                {checkItems.map((item, i) => (
                  <ScrollReveal key={item} animation="left" delay={i * 80} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2d6a4f] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </ScrollReveal>
                ))}
              </div>
              <Link href="/about" className="btn-primary">
                Learn About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>

            {/* Product mini-grid — pops in with stagger */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { bg: 'bg-[#f0fdf4]', border: 'border-green-100',  icon: '/images/cashew-icon.png', title: 'Cashew Kernels',    sub: 'W180 to W450 and all splits — the full range', head: 'text-[#1a472a]', mt: '', href: '/products/cashew-kernels' },
                { bg: 'bg-purple-50',  border: 'border-purple-100', icon: '🧅', title: 'Dehydrated Onion',  sub: 'White & red, all forms',                          head: 'text-purple-900', mt: 'mt-6', href: '/products/dehydrated-onion' },
                { bg: 'bg-orange-50',  border: 'border-orange-100', icon: '🧄', title: 'Dehydrated Garlic', sub: 'High allicin, all forms',                          head: 'text-orange-900', mt: '', href: '/products/dehydrated-garlic' },
                { bg: 'bg-amber-50',   border: 'border-amber-100',  icon: '🫚', title: 'Dehydrated Ginger', sub: 'Natural gingerol retained',                        head: 'text-amber-900',  mt: 'mt-6', href: '/products/dehydrated-ginger' },
              ].map((card, i) => (
                <ScrollReveal key={card.title} animation="pop" delay={i * 100} className={card.mt}>
                  <Link href={card.href} className={`${card.bg} rounded-2xl p-6 border ${card.border} card-hover h-full block cursor-pointer`}>
                    <div className="text-3xl mb-3">
                      {card.icon.startsWith('/') ? (
                        <img src={card.icon} alt={card.title} className="w-9 h-9" />
                      ) : card.icon}
                    </div>
                    <h3 className={`font-semibold ${card.head} mb-2`}>{card.title}</h3>
                    <p className="text-sm text-gray-600">{card.sub}</p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Products ──────────────────────────────────────────── */}
      <section className="py-20 bg-[#f8fdf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal animation="up" className="text-center mb-14">
            <p className="text-sm font-semibold text-[#d4a017] uppercase tracking-widest mb-3">Our Range</p>
            <h2 className="section-heading mb-4">Products We Export</h2>
            <div className="accent-line mx-auto" />
            <p className="section-subheading mx-auto text-center mt-2">
              All products are manufactured in-house, tested for international standards, and available in customised forms and packaging.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <ScrollReveal key={product.name} animation="up" delay={i * 100}>
                <Link href={product.href} className={`bg-gradient-to-b ${product.color} border ${product.border} rounded-2xl p-6 product-card-3d flex flex-col h-full cursor-pointer block`}>
                  <div className="text-4xl mb-4">
                    {product.icon.startsWith('/')
                      ? <img src={product.icon} alt={product.name} className="w-10 h-10" />
                      : product.icon}
                  </div>
                  <h3 className="font-serif font-bold text-[#1a472a] text-lg mb-3">{product.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{product.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {product.tags.map((tag) => (
                      <span key={tag} className={`px-2 py-0.5 rounded-full text-xs font-semibold ${product.badge}`}>{tag}</span>
                    ))}
                  </div>
                  <span className="flex items-center gap-2 text-[#2d6a4f] font-semibold text-sm group-hover:gap-3 transition-all">
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="up" delay={200} className="text-center mt-10">
            <Link href="/products" className="btn-primary">
              All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>

        </div>
      </section>

      {/* ── Why Us ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal animation="up" className="text-center mb-14">
            <p className="text-sm font-semibold text-[#d4a017] uppercase tracking-widest mb-3">Why Shritik</p>
            <h2 className="section-heading mb-4">Why Buyers Choose Us</h2>
            <div className="accent-line mx-auto" />
            <p className="section-subheading mx-auto text-center mt-2">
              From manufacturing to shipment, we deliver more than products — we deliver confidence.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item.title} animation="up" delay={i * 80}>
                <div className="why-card p-6 rounded-2xl border border-gray-100 bg-white shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 h-full">
                  <div className="why-icon w-12 h-12 rounded-xl bg-[#f0fdf4] flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#2d6a4f]" />
                  </div>
                  <h3 className="font-semibold text-[#1a472a] text-base mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── Certifications strip ──────────────────────────────── */}
      <section className="py-16 bg-[#1a472a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal animation="up" className="text-center mb-10">
            <p className="text-sm font-semibold text-[#d4a017] uppercase tracking-widest mb-2">Verified Standards</p>
            <h2 className="font-serif text-3xl font-bold text-white mb-3">Internationally Certified</h2>
            <p className="text-green-200 max-w-xl mx-auto text-sm">
              Our certifications reflect our commitment to food safety, traceability, and compliance with global import requirements.
            </p>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert} animation="pop" delay={i * 80}>
                <div className="cert-badge-glow animate-glow flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-5 py-3">
                  <Award className="w-4 h-4 text-[#d4a017]" />
                  <span className="text-white font-semibold text-sm">{cert}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade" delay={400} className="text-center mt-8">
            <Link href="/quality" className="inline-flex items-center gap-2 text-[#d4a017] hover:text-[#f0c040] font-semibold text-sm transition-colors">
              View All Certifications <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>

        </div>
      </section>

      {/* ── Industries ────────────────────────────────────────── */}
      <section className="py-20 bg-[#f8fdf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal animation="up" className="text-center mb-14">
            <p className="text-sm font-semibold text-[#d4a017] uppercase tracking-widest mb-3">Applications</p>
            <h2 className="section-heading mb-4">Industries We Serve</h2>
            <div className="accent-line mx-auto" />
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((item, i) => (
              <ScrollReveal key={item.name} animation="pop" delay={i * 60}>
                <div className="industry-item bg-white rounded-2xl border border-gray-100 p-5 text-center shadow-sm h-full">
                  <div className="industry-emoji text-3xl mb-3">{item.emoji}</div>
                  <p className="text-sm font-semibold text-[#1a472a]">{item.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="cta-animated-bg py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #52b788 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <ScrollReveal animation="fade">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-green-200 font-medium mb-6">
              <Star className="w-4 h-4 text-[#d4a017]" fill="currentColor" />
              Start Your Export Partnership
            </div>
          </ScrollReveal>

          <ScrollReveal animation="up" delay={100}>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-5">
              Ready to Source Premium<br />Indian Food Ingredients?
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="up" delay={220}>
            <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
              Tell us your product, quantity, and destination. We&apos;ll respond with pricing, specs, and samples within 24 hours.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="up" delay={340}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-accent">
                Send Export Inquiry <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/products" className="btn-outline">
                Browse Products <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </>
  );
}
