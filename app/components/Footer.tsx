'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, Globe, ArrowRight } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Quality & Certifications', href: '/quality' },
  { name: 'Infrastructure', href: '/infrastructure' },
  { name: 'Export & Packaging', href: '/export' },
  { name: 'Private Label', href: '/private-label' },
  { name: 'Contact Us', href: '/contact' },
];

const productLinks = [
  { name: 'Cashew Kernels', href: '/products/cashew-kernels' },
  { name: 'Dehydrated Onion', href: '/products/dehydrated-onion' },
  { name: 'Dehydrated Garlic', href: '/products/dehydrated-garlic' },
  { name: 'Dehydrated Ginger', href: '/products/dehydrated-ginger' },
];

const certifications = ['FSSAI', 'APEDA', 'IEC', 'ISO', 'Halal', 'Kosher'];

export default function Footer() {
  return (
    <footer className="bg-[#0d2b14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.png"
                alt="Shritik Enterprises LLP"
                width={64}
                height={64}
                className="rounded-full bg-white/10 p-0.5"
              />
              <div>
                <div className="font-bold text-white text-[15px]" style={{ fontFamily: "'Playfair Display', serif" }}>Shritik Enterprises</div>
                <div className="text-[10px] text-[#d4a017] font-semibold tracking-widest">LLP &bull; MANUFACTURER &amp; EXPORTER</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              India-based manufacturer and exporter of premium cashew kernels, dehydrated onion, garlic, and ginger. Serving worldwide export markets with certified, quality-focused food ingredients.
            </p>
            <div>
              <p className="text-xs font-semibold text-gray-300 uppercase tracking-widest mb-3">Certifications</p>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span key={cert} className="px-2.5 py-1 bg-[#1a472a] border border-[#2d6a4f] rounded-lg text-xs font-semibold text-[#d4a017]">{cert}</span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#d4a017] inline-block"></span>Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#d4a017] text-sm transition-colors duration-200 flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-1 group-hover:ml-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#d4a017] inline-block"></span>Our Products
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#d4a017] text-sm transition-colors duration-200 flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-1 group-hover:ml-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h4 className="font-semibold text-white text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-[#d4a017] inline-block"></span>Export Markets
              </h4>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <Globe className="w-4 h-4 mt-0.5 text-[#52b788] flex-shrink-0" />
                <span>Middle East · Europe · North America · Southeast Asia · Africa · Australia & Worldwide</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#d4a017] inline-block"></span>Get in Touch
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#52b788] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-[#52b788] font-semibold uppercase tracking-wide mb-0.5">Communication Address</p>
                  <span className="text-gray-400 text-sm">73, Subhangen Bunglows, Kalol,<br />Dist - Gandhinagar 382721, India</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#52b788] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-[#52b788] font-semibold uppercase tracking-wide mb-0.5">Factory / Plant Address</p>
                  <span className="text-gray-400 text-sm">E-123, RIICO Industrial Area,<br />Swaroopganj, Aburoad,<br />Rajasthan - 307023, India</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#52b788] mt-0.5 flex-shrink-0" />
                <a href="mailto:info@shritikllp.com" className="text-gray-400 text-sm hover:text-[#d4a017] transition-colors">info@shritikllp.com</a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#52b788] mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+912764357360" className="text-gray-400 text-sm hover:text-[#d4a017] transition-colors block">+91-2764-357360</a>
                  <a href="tel:+919925246360" className="text-gray-400 text-sm hover:text-[#d4a017] transition-colors block">+91-9925246360</a>
                </div>
              </div>
            </div>
            <div className="bg-[#1a472a] border border-[#2d6a4f] rounded-xl p-4">
              <p className="text-sm text-gray-300 mb-3 leading-relaxed">For export inquiries, bulk supply, and customized packaging.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d4a017] to-[#f0c040] text-[#1a472a] px-4 py-2 rounded-lg text-sm font-bold transition-all hover:opacity-90 hover:-translate-y-0.5">
                Send Export Inquiry <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#1a472a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Shritik Enterprises LLP. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Manufacturer & Exporter of Cashews and Dehydrated Ingredients from India</p>
        </div>
      </div>
    </footer>
  );
}
