'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const productDropdown = [
  { name: 'Cashew Kernels', href: '/products/cashew-kernels' },
  { name: 'Dehydrated Onion', href: '/products/dehydrated-onion' },
  { name: 'Dehydrated Garlic', href: '/products/dehydrated-garlic' },
  { name: 'Dehydrated Ginger', href: '/products/dehydrated-ginger' },
  { name: 'All Products', href: '/products' },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products', hasDropdown: true },
  { name: 'Quality & Certifications', href: '/quality' },
  { name: 'Infrastructure', href: '/infrastructure' },
  { name: 'Export & Packaging', href: '/export' },
  { name: 'Private Label', href: '/private-label' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileProductsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg shadow-green-900/10' : 'bg-white/95 backdrop-blur-sm'}`}>
      {/* Top Bar */}
      <div className="bg-primary-dark text-white text-xs py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="text-green-200">Certified Manufacturer & Exporter from India</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone size={11} />
              <a href="tel:+912764357360" className="hover:text-accent">+91-2764-357360</a>
            </span>
            <span className="flex items-center gap-1">
              <Phone size={11} />
              <a href="tel:+919925246360" className="hover:text-accent">+91-9925246360</a>
            </span>
            <span className="text-green-400">|</span>
            <a href="mailto:info@shritikllp.com" className="hover:text-accent transition-colors">info@shritikllp.com</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-11 h-11 rounded-full border-2 border-gray-200 overflow-hidden flex-shrink-0 shadow-sm">
              <Image
                src="/images/logo.png"
                alt="Shritik Enterprises LLP"
                width={44}
                height={44}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <div className="font-serif font-bold text-primary-dark text-[15px] leading-tight">Shritik Enterprises</div>
              <div className="text-[10px] text-gray-500 font-medium tracking-wide leading-none">LLP &bull; MANUFACTURER &amp; EXPORTER</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.href) ? 'text-primary bg-surface' : 'text-gray-700 hover:text-primary hover:bg-surface'}`}
                  >
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl shadow-green-900/10 border border-gray-100 py-1.5 z-50">
                      {productDropdown.map((item) => (
                        <Link key={item.href} href={item.href} className={`block px-4 py-2.5 text-sm transition-colors ${item.href === '/products' ? 'font-semibold text-primary border-t border-gray-100 mt-1 pt-2.5' : 'text-gray-700'} hover:bg-surface hover:text-primary`}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.href} href={link.href} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.href) ? 'text-primary bg-surface font-semibold' : 'text-gray-700 hover:text-primary hover:bg-surface'}`}>
                  {link.name}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:block">
            <Link href="/contact" className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${pathname === '/contact' ? 'bg-primary-dark text-white' : 'bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-green-900/25 hover:-translate-y-0.5'}`}>
              Contact Us
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-primary hover:bg-surface transition-colors">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'} bg-white`}>
        <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.name}>
                <button onClick={() => setMobileProductsOpen(!mobileProductsOpen)} className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive(link.href) ? 'text-primary bg-surface' : 'text-gray-700 hover:text-primary hover:bg-surface'}`}>
                  {link.name}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileProductsOpen && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-green-100 pl-3">
                    {productDropdown.map((item) => (
                      <Link key={item.href} href={item.href} className="block px-3 py-2 text-sm text-gray-600 hover:text-primary rounded-lg hover:bg-surface transition-colors">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.href} href={link.href} className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive(link.href) ? 'text-primary bg-surface font-semibold' : 'text-gray-700 hover:text-primary hover:bg-surface'}`}>
                {link.name}
              </Link>
            )
          )}
          <div className="pt-2 pb-1">
            <Link href="/contact" className="block w-full text-center px-4 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
