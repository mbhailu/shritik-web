import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Cashew Kernels',
  description: 'Premium cashew kernels in W180, W210, W240, W320, W450, splits and pieces. Exported from India with FSSAI, APEDA, and Halal certifications.',
  keywords: [
    'cashew kernels W320 exporter India',
    'W180 cashew kernels bulk',
    'W240 W450 cashew kernels India',
    'cashew splits pieces India',
    'JH LWP cashew kernels India',
    'buy cashew kernels India wholesale',
    'Halal cashew kernels India',
  ],
  alternates: { canonical: 'https://www.shritikenterprises.com/products/cashew-kernels' },
  openGraph: {
    title: 'Cashew Kernels Exporter India — W180 to W450 & Splits',
    description: 'Premium cashew kernels in all internationally traded grades: W180, W210, W240, W320, W450, JH, LWP, splits and pieces. FSSAI, APEDA & Halal certified.',
    url: 'https://www.shritikenterprises.com/products/cashew-kernels',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Premium Cashew Kernels — Shritik Enterprises LLP' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cashew Kernels Exporter India — W180 to W450 & Splits',
    description: 'Premium cashew kernels in all grades. Exported from India with FSSAI, APEDA & Halal certification.',
    images: ['/opengraph-image'],
  },
};

const highlights = [
  'Naturally sweet flavour with creamy texture',
  'Low moisture (max 5%) for extended shelf life',
  'Hand-sorted and machine-graded for uniformity',
  'Available raw or roasted and salted on request',
  'FSSAI, APEDA, ISO, Halal and Kosher certified',
  'Custom packaging: bulk bags, retail pouches, tin cans',
];

const applications = [
  { emoji: '🍫', name: 'Confectionery & Chocolate' },
  { emoji: '🥐', name: 'Bakery & Pastry' },
  { emoji: '🥗', name: 'Salads & Cuisines' },
  { emoji: '🧃', name: 'Granola & Snack Bars' },
  { emoji: '🛒', name: 'Retail & Private Label' },
  { emoji: '🏭', name: 'Food Manufacturing' },
];

type Spec = { label: string; value: string };
type Grade = {
  grade: string;
  name: string;
  image: string;
  badge: string;
  badgeClass: string;
  description: string;
  specs: Spec[];
  bestSeller?: boolean;
};

const wholeGrades: Grade[] = [
  {
    grade: 'W180',
    name: 'Premium Jumbo Whole',
    image: '/images/cashew-categories/WW180.png',
    badge: 'Ultra Premium',
    badgeClass: 'bg-yellow-400 text-yellow-900',
    description: 'Large, hand-selected whole kernels with rich buttery flavour. Preferred for luxury retail packs, gifting, and gourmet food applications.',
    specs: [
      { label: 'Kernel Count', value: '170–180/lb' },
      { label: 'Color', value: 'White/Pale Ivory' },
      { label: 'Moisture', value: 'Max 5%' },
      { label: 'Broken Pieces', value: 'Minimal' },
      { label: 'Usage', value: 'Premium retail & exports' },
    ],
  },
  {
    grade: 'W210',
    name: 'Large Whole',
    image: '/images/cashew-categories/WW210.png',
    badge: 'Premium',
    badgeClass: 'bg-amber-500 text-white',
    description: 'Popular export-grade whole kernel offering a balance of size, flavour, and value. Suitable for bulk buyers and premium snack brands.',
    specs: [
      { label: 'Kernel Count', value: '200–210/lb' },
      { label: 'Color', value: 'Natural White' },
      { label: 'Moisture', value: 'Max 5%' },
      { label: 'Defects', value: 'Very Low' },
      { label: 'Usage', value: 'Snacks & wholesale' },
    ],
  },
  {
    grade: 'W240',
    name: 'Standard Premium Whole',
    image: '/images/cashew-categories/WW240.png',
    badge: 'Premium',
    badgeClass: 'bg-amber-500 text-white',
    description: 'Well-shaped whole kernels widely used in retail and food manufacturing. Consistent sizing and smooth texture make this a versatile grade.',
    specs: [
      { label: 'Kernel Count', value: '220–240/lb' },
      { label: 'Grade', value: 'Whole White' },
      { label: 'Moisture', value: 'Max 5%' },
      { label: 'Shelf Life', value: '12 months' },
      { label: 'Usage', value: 'Retail & processing' },
    ],
  },
  {
    grade: 'W320',
    name: 'Best Selling Grade',
    image: '/images/cashew-categories/WW320.png',
    badge: '★ Best Seller',
    badgeClass: 'bg-emerald-500 text-white',
    description: "The world's most demanded cashew grade. Valued for affordability and consistent quality — ideal for supermarkets and bulk export.",
    specs: [
      { label: 'Kernel Count', value: '300–320/lb' },
      { label: 'Color', value: 'White' },
      { label: 'Moisture', value: 'Max 5%' },
      { label: 'Packaging', value: 'Vacuum/Customized' },
      { label: 'Usage', value: 'Mass retail' },
    ],
    bestSeller: true,
  },
  {
    grade: 'W450',
    name: 'Economy Whole',
    image: '/images/cashew-categories/WW450.png',
    badge: 'Economy',
    badgeClass: 'bg-stone-500 text-white',
    description: 'Smaller whole kernels offering cost efficiency while maintaining excellent taste and crunch. Ideal for food manufacturing applications.',
    specs: [
      { label: 'Kernel Count', value: '400–450/lb' },
      { label: 'Color', value: 'Light Ivory' },
      { label: 'Moisture', value: 'Max 5%' },
      { label: 'Grade', value: 'Affordable Grade' },
      { label: 'Usage', value: 'Food manufacturing' },
    ],
  },
  {
    grade: 'SW320',
    name: 'Scorched Whole',
    image: '/images/cashew-categories/SW320.png',
    badge: 'Scorched',
    badgeClass: 'bg-orange-700 text-white',
    description: 'Slightly darker whole kernels with excellent taste and crisp texture. Commonly used in baking and food ingredient manufacturing.',
    specs: [
      { label: 'Kernel Count', value: '300–320/lb' },
      { label: 'Color', value: 'Light Brown' },
      { label: 'Moisture', value: 'Max 5%' },
      { label: 'Texture', value: 'Crisp' },
      { label: 'Usage', value: 'Bakery & ingredients' },
    ],
  },
];

const pieceGrades: Grade[] = [
  {
    grade: 'LP',
    name: 'Large Pieces',
    image: '/images/cashew-categories/LP.png',
    badge: 'Value Grade',
    badgeClass: 'bg-sky-500 text-white',
    description: 'Large broken cashew pieces designed for confectionery, bakery, and dessert production. Cost-effective without compromising on taste.',
    specs: [
      { label: 'Piece Size', value: 'Large' },
      { label: 'Color', value: 'White' },
      { label: 'Moisture', value: 'Max 5%' },
      { label: 'Price Point', value: 'Cost Effective' },
      { label: 'Usage', value: 'Bakery' },
    ],
  },
  {
    grade: 'SP',
    name: 'Small Pieces',
    image: '/images/cashew-categories/SP.png',
    badge: 'Bulk Supply',
    badgeClass: 'bg-violet-600 text-white',
    description: 'Smaller cashew pieces ideal for cereals, sweets, toppings, and industrial food processing. Available in large bulk quantities.',
    specs: [
      { label: 'Piece Size', value: 'Small' },
      { label: 'Color', value: 'White/Light Cream' },
      { label: 'Moisture', value: 'Max 5%' },
      { label: 'Supply', value: 'Bulk Available' },
      { label: 'Usage', value: 'Industrial processing' },
    ],
  },
];

function GradeCard({ grade, index }: { grade: Grade; index: number }) {
  return (
    <ScrollReveal animation="up" delay={index * 120}>
      <div
        className={`group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 h-full flex flex-col border-2 hover:-translate-y-2 ${
          grade.bestSeller
            ? 'border-emerald-400 shadow-emerald-100'
            : 'border-amber-100 hover:border-amber-300'
        }`}
      >
        {grade.bestSeller && (
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-center text-xs font-bold py-1.5 tracking-widest uppercase">
            ★ Globally Most Traded Grade ★
          </div>
        )}

        {/* Image */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-amber-50 to-stone-100 flex-shrink-0">
          <Image
            src={grade.image}
            alt={`${grade.grade} ${grade.name} cashew kernels`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-3 left-3">
            <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md ${grade.badgeClass}`}>
              {grade.badge}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="mb-3">
            <h3 className="text-2xl font-bold text-amber-900 font-serif leading-tight">{grade.grade}</h3>
            <p className="text-sm font-semibold text-amber-600 mt-0.5">{grade.name}</p>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{grade.description}</p>

          {/* Specs */}
          <div className="border-t border-amber-100 pt-4 mt-auto">
            <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-3">Specifications</p>
            <div className="space-y-2">
              {grade.specs.map((spec) => (
                <div key={spec.label} className="flex items-center justify-between gap-2">
                  <span className="text-xs text-gray-400 flex-shrink-0">{spec.label}</span>
                  <span className="text-xs font-semibold text-gray-700 text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function CashewKernelsPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #78350f 0%, #b45309 60%, #d97706 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/products">Products</Link><span>/</span>
            <span className="text-white">Cashew Kernels</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <img src="/images/cashew.png" alt="Cashew" className="w-14 h-14" />
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">Cashew Kernels</h1>
          </div>
          <p className="text-amber-100 text-lg max-w-2xl">
            Premium quality cashew kernels in all internationally traded grades — whole, halves, splits, and pieces. Sourced and processed in India.
          </p>
        </div>
      </div>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-amber-600 uppercase tracking-widest mb-3">Product Overview</p>
              <h2 className="section-heading mb-4">Premium Cashew Kernels from India</h2>
              <div className="accent-line" />
              <p className="text-gray-600 leading-relaxed mb-6">
                Our cashew kernels are sourced from the finest cashew-growing regions and processed in our modern facility in Gujarat. Each batch undergoes multiple quality checks — from raw nut grading through shelling, peeling, drying, and final packing — ensuring you receive consistently premium product.
              </p>
              <ul className="space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-3xl p-10 text-center">
              <div className="mb-6">
                <img src="/images/cashew.png" alt="Cashew Kernels" className="w-28 h-28 mx-auto" />
              </div>
              <div className="grid grid-cols-2 gap-4 text-left">
                {[
                  { label: 'Moisture', value: 'Max 5%' },
                  { label: 'Grades Available', value: '15+ Grades' },
                  { label: 'Pack Sizes', value: '10kg–25kg Bags' },
                  { label: 'Shelf Life', value: '12–18 Months' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                    <div className="font-bold text-amber-800">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #fefce8 0%, #fef3c7 40%, #fdf6ec 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <ScrollReveal animation="up">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-amber-600 uppercase tracking-widest mb-3">Our Product Range</p>
              <h2 className="section-heading mb-4">Cashew Kernel Categories</h2>
              <div className="accent-line" style={{ margin: '12px auto 20px' }} />
              <p className="section-subheading mx-auto text-center">
                All internationally recognised grades — from ultra-premium whole kernels to versatile pieces — available year-round.
              </p>
            </div>
          </ScrollReveal>

          {/* Whole Grades */}
          <div className="mb-16">
            <ScrollReveal animation="left">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-10 rounded-full" style={{ background: 'linear-gradient(180deg, #fbbf24, #92400e)' }} />
                <div>
                  <h3 className="text-xl font-bold text-amber-900 font-serif">Whole Cashew Grades</h3>
                  <p className="text-sm text-gray-500 mt-0.5">W180 · W210 · W240 · W320 · W450 · SW320</p>
                </div>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wholeGrades.map((grade, index) => (
                <GradeCard key={grade.grade} grade={grade} index={index} />
              ))}
            </div>
          </div>

          {/* Section Divider */}
          <ScrollReveal animation="fade">
            <div className="relative my-12">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-dashed border-amber-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-6 py-1.5 rounded-full text-amber-700 text-xs font-bold uppercase tracking-widest border border-amber-200 bg-amber-50 shadow-sm">
                  ✦ Pieces &amp; Splits ✦
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Pieces */}
          <div>
            <ScrollReveal animation="left">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-10 rounded-full" style={{ background: 'linear-gradient(180deg, #38bdf8, #7c3aed)' }} />
                <div>
                  <h3 className="text-xl font-bold text-amber-900 font-serif">Pieces &amp; Splits</h3>
                  <p className="text-sm text-gray-500 mt-0.5">LP · SP — Cost-effective grades for industrial &amp; bakery use</p>
                </div>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {pieceGrades.map((grade, index) => (
                <GradeCard key={grade.grade} grade={grade} index={index} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="up">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-amber-600 uppercase tracking-widest mb-2">Where It&apos;s Used</p>
              <h2 className="section-heading mb-3">Applications</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {applications.map((a, i) => (
              <ScrollReveal key={a.name} animation="pop" delay={i * 80}>
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100 rounded-2xl p-5 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 hover:border-amber-300">
                  <div className="text-3xl mb-3">{a.emoji}</div>
                  <p className="text-xs font-semibold text-amber-900 leading-snug">{a.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging */}
      <section className="py-16 bg-[#78350f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-white mb-4">Packaging &amp; Export</h2>
              <p className="text-amber-100 leading-relaxed mb-6">
                We offer flexible packaging options including vacuum-sealed foil bags, corrugated cartons, and bulk poly-bags inside PP woven bags. All packaging includes moisture-resistant inner lining and appropriate labelling for your destination market.
              </p>
              <ul className="space-y-2 text-amber-100 text-sm">
                {['10kg & 25kg vacuum-sealed bags', 'Retail-ready pouch options (private label)', 'Container loads (20ft & 40ft)', 'Custom labelling & barcode support', 'Export documentation included'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-300 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-800/50 border border-amber-600 rounded-2xl p-6 text-center text-white">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="font-semibold text-xl mb-2">Request a Sample</h3>
              <p className="text-amber-200 text-sm mb-5">We offer pre-shipment samples for quality verification before you confirm your order.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#d4a017] hover:bg-[#f0c040] text-[#78350f] font-bold px-5 py-2.5 rounded-xl text-sm transition-all">
                Request Sample <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
