import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Award, CheckCircle, Shield, FlaskConical } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import PageHeroDecor from '../components/PageHeroDecor';

export const metadata: Metadata = {
  title: 'Quality & Certifications',
  description: 'Shritik Enterprises LLP holds FSSAI, APEDA, IEC, ISO, Halal, and Kosher certifications. Learn about our quality control process for cashews and dehydrated food exports.',
  keywords: [
    'premium quality cashew kernels India',
    'premium quality cashew nuts certified',
    'certified cashew kernels manufacturer India',
    'FSSAI certified food exporter India',
    'APEDA registered exporter India',
    'ISO certified food company India',
    'Halal certified food exporter',
    'Kosher certified food India',
    'food quality control India export',
    'IEC certified exporter India',
    'quality assured food manufacturer India',
  ],
  alternates: { canonical: 'https://www.shritikllp.com/quality' },
  openGraph: {
    title: 'Quality & Certifications — Shritik Enterprises LLP',
    description: 'FSSAI, APEDA, IEC, ISO, Halal & Kosher certified Indian food exporter. Rigorous QC at every production stage for cashews and dehydrated food.',
    url: 'https://www.shritikllp.com/quality',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Quality & Certifications — Shritik Enterprises LLP' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quality & Certifications — Shritik Enterprises LLP',
    description: 'FSSAI, APEDA, IEC, ISO, Halal & Kosher certified Indian food exporter.',
    images: ['/opengraph-image'],
  },
};

const certifications = [
  {
    name: 'FSSAI',
    full: 'Food Safety and Standards Authority of India',
    desc: 'Ensures our manufacturing and processing operations comply with Indian food safety standards. Required for all food exports from India.',
    color: 'bg-blue-50 border-blue-200',
    badge: 'bg-blue-600',
  },
  {
    name: 'APEDA',
    full: 'Agricultural & Processed Food Products Export Development Authority',
    desc: 'Registration under APEDA certifies us as an authorised exporter of processed food and agricultural products from India.',
    color: 'bg-green-50 border-green-200',
    badge: 'bg-green-600',
  },
  {
    name: 'IEC',
    full: 'Importer Exporter Code',
    desc: 'Government-issued IEC code confirms our legal standing as a registered import-export business in India.',
    color: 'bg-purple-50 border-purple-200',
    badge: 'bg-purple-600',
  },
  {
    name: 'ISO',
    full: 'International Organization for Standardization',
    desc: 'ISO certification demonstrates our quality management systems meet international standards for consistent product quality and process control.',
    color: 'bg-indigo-50 border-indigo-200',
    badge: 'bg-indigo-600',
  },
  {
    name: 'Halal',
    full: 'Halal Certified',
    desc: 'Our products are certified Halal, confirming compliance with Islamic dietary laws — a requirement for access to Middle Eastern and Southeast Asian markets.',
    color: 'bg-emerald-50 border-emerald-200',
    badge: 'bg-emerald-600',
  },
  {
    name: 'Kosher',
    full: 'Kosher Certified',
    desc: 'Kosher certification validates compliance with Jewish dietary laws and opens doors to North American and European specialty markets.',
    color: 'bg-amber-50 border-amber-200',
    badge: 'bg-amber-600',
  },
];

const qcChecklist = [
  'Raw material inspection on arrival (visual, moisture, microbial)',
  'In-process quality monitoring at each production stage',
  'Grade sorting and size screening using automated equipment',
  'Moisture content testing per batch (Karl Fischer method)',
  'Microbial testing: TPC, E. coli, Salmonella, Yeast & Mould',
  'Pesticide residue testing against EU MRL limits',
  'Metal detection and physical contamination checks',
  'Pre-shipment sampling and third-party lab verification',
  'Certificate of Analysis (COA) issued with every shipment',
];

const foodSafety = [
  'HACCP-based hazard analysis at all critical control points',
  'Allergen management and cross-contamination prevention protocols',
  'Temperature and humidity monitoring in storage and processing',
  'Personal hygiene and GMP compliance for all plant personnel',
  'Pest control programme with documented inspection logs',
  'Traceability system — lot-to-field tracking for every batch',
  'Supplier qualification and raw material audit programme',
  'Regular internal audits and corrective action management',
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shritikllp.com" },
    { "@type": "ListItem", position: 2, name: "Quality & Certifications", item: "https://www.shritikllp.com/quality" },
  ],
};

export default function QualityPage() {
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
            <span className="text-white">Quality & Certifications</span>
          </div>
          <h1 className="ph-title font-serif text-4xl sm:text-5xl font-bold text-white mb-4">Quality & Certifications</h1>
          <p className="ph-desc text-green-100 text-lg max-w-2xl">
            Our quality systems are built around international food safety standards. Every product that leaves our facility is tested, documented, and certified.
          </p>
        </div>
      </div>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="up">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-[#d4a017] uppercase tracking-widest mb-3">Verified Compliance</p>
              <h2 className="section-heading mb-4">Our Certifications</h2>
              <div className="accent-line-anim sr-visible mx-auto" />
              <p className="section-subheading mx-auto text-center">Recognised by food safety authorities and import regulators worldwide.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert.name} animation="pop" delay={i * 80}>
                <div className={`border rounded-2xl p-6 cert-card card-shimmer h-full ${cert.color}`}>
                  <div className={`inline-flex items-center gap-2 ${cert.badge} text-white rounded-full px-3 py-1.5 text-xs font-bold mb-4`}>
                    <Award className="w-3.5 h-3.5" />
                    {cert.name}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-2">{cert.full}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cert.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* QC Process */}
      <section className="py-20 bg-[#f8fdf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* QC Checklist */}
            <ScrollReveal animation="left">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#1a472a] flex items-center justify-center">
                  <FlaskConical className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#d4a017] uppercase tracking-widest">Testing & Verification</p>
                  <h2 className="font-serif text-2xl font-bold text-[#1a472a]">Quality Control Checklist</h2>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Every batch undergoes a full quality verification cycle from raw material arrival to pre-shipment testing.
              </p>
              <ul className="space-y-3">
                {qcChecklist.map((item, i) => (
                  <ScrollReveal key={item} animation="up" delay={i * 60}>
                    <li className="flex items-start gap-3 bg-white border border-green-100 rounded-xl px-4 py-3 card-shimmer">
                      <CheckCircle className="w-5 h-5 text-[#2d6a4f] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </ScrollReveal>

            {/* Food Safety */}
            <ScrollReveal animation="right">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Plant Compliance</p>
                  <h2 className="font-serif text-2xl font-bold text-[#1a472a]">Food Safety Practices</h2>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Our facility operates under HACCP principles with documented food safety management procedures.
              </p>
              <ul className="space-y-3">
                {foodSafety.map((item, i) => (
                  <ScrollReveal key={item} animation="up" delay={i * 60}>
                    <li className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 card-shimmer">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Documents CTA */}
      <section className="py-16 bg-[#1a472a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="up">
            <Award className="w-10 h-10 text-[#d4a017] mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-bold text-white mb-4">Request Certificates & Lab Reports</h2>
            <p className="text-green-200 mb-6">
              We provide full documentation with every shipment — COA, lab test reports, certificates, and product spec sheets. Contact us to receive copies.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#d4a017] hover:bg-[#f0c040] text-[#1a472a] font-bold px-6 py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5"
            >
              Request Documentation <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
