import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Target, Eye, Heart, Globe, Shield, Star } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import PageHeroDecor from '../components/PageHeroDecor';
import CountUp from '../components/CountUp';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Shritik Enterprises LLP — India-based manufacturer and exporter of premium cashew kernels and dehydrated food ingredients. Learn about our story, values, and capabilities.',
  keywords: [
    'about Shritik Enterprises',
    'cashew exporter India story',
    'Indian food manufacturer exporter',
    'dehydrated food manufacturer India',
    'FSSAI APEDA certified company India',
  ],
  alternates: { canonical: 'https://www.shritikenterprises.com/about' },
  openGraph: {
    title: 'About Shritik Enterprises LLP — Indian Food Exporter',
    description: 'India-based manufacturer and exporter of premium cashew kernels and dehydrated food ingredients. FSSAI, APEDA, ISO, Halal & Kosher certified.',
    url: 'https://www.shritikenterprises.com/about',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'About Shritik Enterprises LLP' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Shritik Enterprises LLP — Indian Food Exporter',
    description: 'India-based manufacturer and exporter of premium cashew kernels and dehydrated food ingredients.',
    images: ['/opengraph-image'],
  },
};

const values = [
  { icon: Shield, title: 'Integrity', desc: 'Honest business practices, transparent pricing, and no compromise on product specifications.' },
  { icon: Target, title: 'Precision', desc: 'Exact moisture levels, consistent granulation, and grade-accurate sorting — every batch, every time.' },
  { icon: Eye, title: 'Transparency', desc: 'Full documentation: COA, lab reports, shipping docs, and real-time shipment updates.' },
  { icon: Heart, title: 'Customer Focus', desc: 'Dedicated export managers who understand your market and anticipate your requirements.' },
  { icon: Globe, title: 'Global Mindset', desc: 'Products formulated to meet EU, US, Middle East, and Asian regulatory requirements.' },
  { icon: CheckCircle, title: 'Consistency', desc: 'Buffer stock, multi-season sourcing, and robust QC to ensure supply continuity.' },
];

const milestones = [
  { year: '2014', title: 'Founded', desc: 'Established as a cashew processing unit in Gujarat, India.' },
  { year: '2016', title: 'First Export', desc: 'Began exporting cashew kernels to the Middle East and Southeast Asia.' },
  { year: '2018', title: 'Dehydrated Line', desc: 'Added dehydrated onion, garlic, and ginger processing capacity.' },
  { year: '2020', title: 'ISO Certified', desc: 'Achieved ISO certification and expanded to European markets.' },
  { year: '2022', title: '20+ Countries', desc: 'Established buyer relationships across 20+ countries.' },
  { year: '2024', title: 'Private Label', desc: 'Launched dedicated private label and co-packing services.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Animated Page Hero */}
      <div className="page-hero-animated">
        <PageHeroDecor />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1fr,auto] gap-12 items-center">
            <div>
              <div className="breadcrumb ph-breadcrumb">
                <Link href="/">Home</Link>
                <span>/</span>
                <span className="text-white">About Us</span>
              </div>
              <h1 className="ph-title font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
                About Shritik Enterprises LLP
              </h1>
              <p className="ph-desc text-green-100 text-lg max-w-2xl">
                An India-based manufacturer and exporter committed to delivering premium food ingredients to global buyers with consistency and care.
              </p>
            </div>

            {/* Animated Logo Showcase */}
            <div className="hidden lg:flex items-center justify-center ph-desc">
              <div className="relative flex items-center justify-center w-[220px] h-[220px]">
                {/* Outer spinning gradient ring */}
                <div
                  className="logo-ring-spin absolute rounded-full"
                  style={{
                    inset: '-10px',
                    background: 'conic-gradient(from 0deg, transparent 20%, #52b788 45%, #d4a017 65%, transparent 85%)',
                    borderRadius: '50%',
                  }}
                />
                {/* Inner counter-spinning dashed ring */}
                <div
                  className="logo-ring-rev absolute rounded-full"
                  style={{
                    inset: '4px',
                    border: '2px dashed rgba(82,183,136,0.45)',
                  }}
                />
                {/* Ping ring 1 */}
                <div
                  className="logo-ping absolute rounded-full"
                  style={{ inset: '0', border: '2px solid rgba(82,183,136,0.5)' }}
                />
                {/* Ping ring 2 */}
                <div
                  className="logo-ping-2 absolute rounded-full"
                  style={{ inset: '0', border: '2px solid rgba(212,160,23,0.35)' }}
                />
                {/* White mask to hide gradient bleed */}
                <div className="absolute rounded-full bg-white/10" style={{ inset: '2px' }} />
                {/* Logo */}
                <div className="relative rounded-full bg-white shadow-2xl overflow-hidden logo-float logo-glow flex items-center justify-center" style={{ width: 180, height: 180 }}>
                  <Image
                    src="/images/logo.png"
                    alt="Shritik Enterprises LLP"
                    width={170}
                    height={176}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="left">
              <p className="text-sm font-semibold text-[#d4a017] uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="section-heading mb-4">Built on Quality, Grown on Trust</h2>
              <div className="accent-line-anim sr-visible" />
              <p className="text-gray-600 leading-relaxed mb-5">
                Shritik Enterprises LLP was founded with a clear mission: to bridge the gap between India&apos;s exceptional agricultural produce and the world&apos;s food manufacturers who need reliable, certified supply.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Starting with cashew kernels in Gujarat — one of India&apos;s largest cashew processing hubs — we expanded over the years to include dehydrated onion, garlic, and ginger, building dedicated processing lines and quality labs for each product category.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Today, we serve importers, distributors, food manufacturers, and private label brands across 30+ countries, with a reputation for product consistency, documentation accuracy, and responsive service.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#f0fdf4] rounded-xl p-5 text-center border border-green-100 stat-highlight">
                  <div className="font-serif text-4xl font-bold text-[#1a472a] mb-1">
                    <CountUp end={10} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-600">Years in Business</div>
                </div>
                <div className="bg-amber-50 rounded-xl p-5 text-center border border-amber-100 stat-highlight">
                  <div className="font-serif text-4xl font-bold text-amber-800 mb-1">
                    <CountUp end={30} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-600">Export Countries</div>
                </div>
              </div>
            </ScrollReveal>

            {/* Animated Timeline */}
            <ScrollReveal animation="right">
              <div className="space-y-4">
                {milestones.map((m, i) => (
                  <ScrollReveal key={m.year} animation="up" delay={i * 90}>
                    <div className="flex gap-5">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-[#1a472a] flex items-center justify-center text-white text-xs font-bold flex-shrink-0 timeline-dot-pulse">
                          {m.year.slice(2)}
                        </div>
                        {i < milestones.length - 1 && (
                          <div className="w-0.5 flex-1 bg-green-100 my-1" />
                        )}
                      </div>
                      <div className="pb-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-[#d4a017]">{m.year}</span>
                          <span className="font-semibold text-[#1a472a] text-sm">{m.title}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{m.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#f8fdf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal animation="left" delay={0}>
              <div className="bg-gradient-to-br from-[#1a472a] to-[#2d6a4f] rounded-2xl p-8 text-white mission-card card-shimmer h-full">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-[#d4a017]" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-green-100 leading-relaxed">
                  To deliver premium Indian food ingredients — cashew kernels and dehydrated vegetables — to global buyers with consistent quality, reliable supply, and world-class service. We aim to be the most trusted Indian food export partner for international food businesses.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="right" delay={80}>
              <div className="bg-gradient-to-br from-[#b8860b] to-[#d4a017] rounded-2xl p-8 text-white mission-card card-shimmer h-full">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-yellow-50 leading-relaxed">
                  To be a leading name in global food ingredient exports from India, recognised for the quality of our products and the integrity of our partnerships. We envision a future where every product that leaves our facility represents India&apos;s best agricultural and manufacturing capabilities.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="up">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-[#d4a017] uppercase tracking-widest mb-3">What We Stand For</p>
              <h2 className="section-heading mb-4">Our Core Values</h2>
              <div className="accent-line-anim sr-visible mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} animation="pop" delay={i * 80}>
                <div className="p-6 border border-gray-100 rounded-2xl bg-white shadow-sm card-hover card-shimmer why-card h-full">
                  <div className="w-11 h-11 rounded-xl bg-[#f0fdf4] flex items-center justify-center mb-4 why-icon">
                    <v.icon className="w-5 h-5 text-[#2d6a4f]" />
                  </div>
                  <h3 className="font-semibold text-[#1a472a] mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f0fdf4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="up">
            <div className="inline-flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-[#d4a017]" fill="currentColor" />
              <span className="text-sm font-semibold text-[#d4a017] uppercase tracking-widest">Partner With Us</span>
            </div>
            <h2 className="section-heading mb-4">Ready to Work Together?</h2>
            <p className="section-subheading mx-auto text-center mb-8">
              Whether you&apos;re sourcing for the first time or looking to switch suppliers, we&apos;re here to help you find the right product and terms.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/products" className="btn-outline-primary">
                Our Products <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
