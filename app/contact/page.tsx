'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail, Phone, MapPin, CheckCircle, Send, Loader2, AlertCircle, ChevronDown } from 'lucide-react';
import PageHeroDecor from '../components/PageHeroDecor';

type CountryOption = {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
  format: string; // X = digit, rest are separators
};

const COUNTRIES: CountryOption[] = [
  { code: 'IN', name: 'India',            flag: '🇮🇳', dialCode: '+91',  format: 'XXXXX XXXXX' },
  { code: 'US', name: 'USA',              flag: '🇺🇸', dialCode: '+1',   format: '(XXX) XXX-XXXX' },
  { code: 'GB', name: 'UK',               flag: '🇬🇧', dialCode: '+44',  format: 'XXXX XXXXXX' },
  { code: 'AE', name: 'UAE',              flag: '🇦🇪', dialCode: '+971', format: 'XX XXX XXXX' },
  { code: 'AU', name: 'Australia',        flag: '🇦🇺', dialCode: '+61',  format: 'XXX XXX XXX' },
  { code: 'CA', name: 'Canada',           flag: '🇨🇦', dialCode: '+1',   format: '(XXX) XXX-XXXX' },
  { code: 'CN', name: 'China',            flag: '🇨🇳', dialCode: '+86',  format: 'XXX XXXX XXXX' },
  { code: 'DE', name: 'Germany',          flag: '🇩🇪', dialCode: '+49',  format: 'XXXX XXXXXXX' },
  { code: 'SG', name: 'Singapore',        flag: '🇸🇬', dialCode: '+65',  format: 'XXXX XXXX' },
  { code: 'SA', name: 'Saudi Arabia',     flag: '🇸🇦', dialCode: '+966', format: 'XX XXX XXXX' },
  { code: 'JP', name: 'Japan',            flag: '🇯🇵', dialCode: '+81',  format: 'XX XXXX XXXX' },
  { code: 'KR', name: 'South Korea',      flag: '🇰🇷', dialCode: '+82',  format: 'XX XXXX XXXX' },
  { code: 'MY', name: 'Malaysia',         flag: '🇲🇾', dialCode: '+60',  format: 'XX XXXX XXXX' },
  { code: 'ID', name: 'Indonesia',        flag: '🇮🇩', dialCode: '+62',  format: 'XXX XXXX XXXX' },
  { code: 'TH', name: 'Thailand',         flag: '🇹🇭', dialCode: '+66',  format: 'XX XXX XXXX' },
  { code: 'VN', name: 'Vietnam',          flag: '🇻🇳', dialCode: '+84',  format: 'XXX XXX XXXX' },
  { code: 'PH', name: 'Philippines',      flag: '🇵🇭', dialCode: '+63',  format: 'XXX XXX XXXX' },
  { code: 'BD', name: 'Bangladesh',       flag: '🇧🇩', dialCode: '+880', format: 'XXXX XXXXXX' },
  { code: 'PK', name: 'Pakistan',         flag: '🇵🇰', dialCode: '+92',  format: 'XXX XXX XXXX' },
  { code: 'LK', name: 'Sri Lanka',        flag: '🇱🇰', dialCode: '+94',  format: 'XX XXX XXXX' },
  { code: 'NP', name: 'Nepal',            flag: '🇳🇵', dialCode: '+977', format: 'XX XXXX XXXX' },
  { code: 'KW', name: 'Kuwait',           flag: '🇰🇼', dialCode: '+965', format: 'XXXX XXXX' },
  { code: 'QA', name: 'Qatar',            flag: '🇶🇦', dialCode: '+974', format: 'XXXX XXXX' },
  { code: 'BH', name: 'Bahrain',          flag: '🇧🇭', dialCode: '+973', format: 'XXXX XXXX' },
  { code: 'OM', name: 'Oman',             flag: '🇴🇲', dialCode: '+968', format: 'XXXX XXXX' },
  { code: 'JO', name: 'Jordan',           flag: '🇯🇴', dialCode: '+962', format: 'X XXXX XXXX' },
  { code: 'IL', name: 'Israel',           flag: '🇮🇱', dialCode: '+972', format: 'XX XXX XXXX' },
  { code: 'TR', name: 'Turkey',           flag: '🇹🇷', dialCode: '+90',  format: 'XXX XXX XX XX' },
  { code: 'EG', name: 'Egypt',            flag: '🇪🇬', dialCode: '+20',  format: 'XXX XXX XXXX' },
  { code: 'NG', name: 'Nigeria',          flag: '🇳🇬', dialCode: '+234', format: 'XXX XXX XXXX' },
  { code: 'KE', name: 'Kenya',            flag: '🇰🇪', dialCode: '+254', format: 'XXX XXXXXX' },
  { code: 'ZA', name: 'South Africa',     flag: '🇿🇦', dialCode: '+27',  format: 'XX XXX XXXX' },
  { code: 'GH', name: 'Ghana',            flag: '🇬🇭', dialCode: '+233', format: 'XX XXX XXXX' },
  { code: 'MA', name: 'Morocco',          flag: '🇲🇦', dialCode: '+212', format: 'XX XXX XXXX' },
  { code: 'TZ', name: 'Tanzania',         flag: '🇹🇿', dialCode: '+255', format: 'XXX XXX XXX' },
  { code: 'ET', name: 'Ethiopia',         flag: '🇪🇹', dialCode: '+251', format: 'XX XXX XXXX' },
  { code: 'FR', name: 'France',           flag: '🇫🇷', dialCode: '+33',  format: 'X XX XX XX XX' },
  { code: 'NL', name: 'Netherlands',      flag: '🇳🇱', dialCode: '+31',  format: 'X XX XX XX XX' },
  { code: 'IT', name: 'Italy',            flag: '🇮🇹', dialCode: '+39',  format: 'XXX XXX XXXX' },
  { code: 'ES', name: 'Spain',            flag: '🇪🇸', dialCode: '+34',  format: 'XXX XXX XXX' },
  { code: 'BE', name: 'Belgium',          flag: '🇧🇪', dialCode: '+32',  format: 'XXX XX XX XX' },
  { code: 'CH', name: 'Switzerland',      flag: '🇨🇭', dialCode: '+41',  format: 'XX XXX XXXX' },
  { code: 'SE', name: 'Sweden',           flag: '🇸🇪', dialCode: '+46',  format: 'XX XXX XXXX' },
  { code: 'NO', name: 'Norway',           flag: '🇳🇴', dialCode: '+47',  format: 'XXX XX XXX' },
  { code: 'DK', name: 'Denmark',          flag: '🇩🇰', dialCode: '+45',  format: 'XX XX XX XX' },
  { code: 'FI', name: 'Finland',          flag: '🇫🇮', dialCode: '+358', format: 'XX XXX XXXX' },
  { code: 'PL', name: 'Poland',           flag: '🇵🇱', dialCode: '+48',  format: 'XXX XXX XXX' },
  { code: 'PT', name: 'Portugal',         flag: '🇵🇹', dialCode: '+351', format: 'XXX XXX XXX' },
  { code: 'GR', name: 'Greece',           flag: '🇬🇷', dialCode: '+30',  format: 'XXX XXX XXXX' },
  { code: 'RU', name: 'Russia',           flag: '🇷🇺', dialCode: '+7',   format: 'XXX XXX-XX-XX' },
  { code: 'UA', name: 'Ukraine',          flag: '🇺🇦', dialCode: '+380', format: 'XX XXX XXXX' },
  { code: 'HK', name: 'Hong Kong',        flag: '🇭🇰', dialCode: '+852', format: 'XXXX XXXX' },
  { code: 'TW', name: 'Taiwan',           flag: '🇹🇼', dialCode: '+886', format: 'XXX XXX XXX' },
  { code: 'NZ', name: 'New Zealand',      flag: '🇳🇿', dialCode: '+64',  format: 'XX XXX XXXX' },
  { code: 'BR', name: 'Brazil',           flag: '🇧🇷', dialCode: '+55',  format: '(XX) XXXXX-XXXX' },
  { code: 'MX', name: 'Mexico',           flag: '🇲🇽', dialCode: '+52',  format: 'XX XXXX XXXX' },
  { code: 'AR', name: 'Argentina',        flag: '🇦🇷', dialCode: '+54',  format: 'XX XXXX XXXX' },
  { code: 'CL', name: 'Chile',            flag: '🇨🇱', dialCode: '+56',  format: 'X XXXX XXXX' },
  { code: 'CO', name: 'Colombia',         flag: '🇨🇴', dialCode: '+57',  format: 'XXX XXX XXXX' },
  { code: 'MM', name: 'Myanmar',          flag: '🇲🇲', dialCode: '+95',  format: 'XX XXX XXXX' },
  { code: 'KH', name: 'Cambodia',         flag: '🇰🇭', dialCode: '+855', format: 'XX XXX XXX' },
  { code: 'IQ', name: 'Iraq',             flag: '🇮🇶', dialCode: '+964', format: 'XXX XXX XXXX' },
  { code: 'LB', name: 'Lebanon',          flag: '🇱🇧', dialCode: '+961', format: 'XX XXX XXX' },
  { code: 'IR', name: 'Iran',             flag: '🇮🇷', dialCode: '+98',  format: 'XXX XXX XXXX' },
  { code: 'DZ', name: 'Algeria',          flag: '🇩🇿', dialCode: '+213', format: 'XX XX XX XX' },
  { code: 'TN', name: 'Tunisia',          flag: '🇹🇳', dialCode: '+216', format: 'XX XXX XXX' },
];

const DEFAULT_COUNTRY = COUNTRIES[0]; // India

function applyPhoneMask(digits: string, format: string): string {
  let di = 0;
  let result = '';
  for (let i = 0; i < format.length; i++) {
    if (di >= digits.length) break;
    if (format[i] === 'X') {
      result += digits[di++];
    } else {
      // only add separator if more digits follow
      result += format[i];
    }
  }
  return result;
}

type FormData = {
  name: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  phoneCountryCode: string;
  product: string;
  quantity: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const EMPTY_FORM: FormData = {
  name: '', company: '', country: '', email: '', phone: '',
  phoneCountryCode: DEFAULT_COUNTRY.dialCode,
  product: '', quantity: '', message: '',
};

const products = [
  'Cashew Kernels (W-Grades)',
  'Cashew Kernels (Splits/Pieces)',
  'Dehydrated Onion',
  'Dehydrated Garlic',
  'Dehydrated Ginger',
  'Multiple Products',
  'Private Label Inquiry',
  'Other',
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.company.trim()) errors.company = 'Company is required';
  if (!data.country.trim()) errors.country = 'Country is required';
  if (!data.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Invalid email address';
  if (!data.phone.trim()) errors.phone = 'Phone number is required';
  if (!data.product) errors.product = 'Please select a product';
  if (!data.message.trim()) errors.message = 'Message is required';
  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(DEFAULT_COUNTRY);
  const [dialDropdownOpen, setDialDropdownOpen] = useState(false);
  const [dialSearch, setDialSearch] = useState('');
  const dialDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dialDropdownRef.current && !dialDropdownRef.current.contains(e.target as Node)) {
        setDialDropdownOpen(false);
        setDialSearch('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const fetchToken = useCallback(async () => {
    try {
      const res = await fetch('/api/contact/token');
      if (res.ok) {
        const data = await res.json();
        setToken(data.token as string);
      }
    } catch {
      // Will surface as an error on submit attempt
    }
  }, []);

  useEffect(() => {
    fetchToken();
  }, [fetchToken]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const digits = value.replace(/\D/g, '');
      const masked = applyPhoneMask(digits, selectedCountry.format);
      setForm((prev) => ({ ...prev, phone: masked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name as keyof FormData]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    if (!token) {
      setSubmitError('Security token not loaded. Please refresh the page and try again.');
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, token }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        setToken(null); // token consumed — prevent reuse
      } else if (res.status === 422 && data.errors) {
        setErrors(data.errors as FormErrors);
      } else if (res.status === 403) {
        setSubmitError('Form token expired. Please try again.');
        await fetchToken(); // get a fresh token
      } else if (res.status === 429) {
        setSubmitError('Too many submissions. Please try again in an hour.');
      } else {
        setSubmitError((data.error as string) || 'Failed to send. Please try again.');
      }
    } catch {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = async () => {
    setSubmitted(false);
    setForm(EMPTY_FORM);
    setErrors({});
    setSubmitError(null);
    await fetchToken(); // fresh token for next submission
  };

  return (
    <>
      {/* Animated Page Hero */}
      <div className="page-hero-animated">
        <PageHeroDecor />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="breadcrumb ph-breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <span className="text-white">Contact Us</span>
          </div>
          <h1 className="ph-title font-serif text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="ph-desc text-green-100 text-lg max-w-2xl">
            Send us your export inquiry, product requirement, or request for samples. We respond within 24 hours.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-24 h-24 rounded-full bg-[#f0fdf4] flex items-center justify-center mb-6 success-pop success-ring">
                    <CheckCircle className="w-12 h-12 text-[#2d6a4f]" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-[#1a472a] mb-3 success-text">
                    Inquiry Received!
                  </h2>
                  <p className="text-gray-600 max-w-md mb-8 success-text" style={{ animationDelay: '0.55s' }}>
                    Thank you for reaching out. Our export team will review your inquiry and respond within 24 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="btn-primary success-text"
                    style={{ animationDelay: '0.7s' }}
                  >
                    Send Another Inquiry <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h2 className="font-serif text-2xl font-bold text-[#1a472a] mb-6">Send Export Inquiry</h2>

                  {submitError && (
                    <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      {submitError}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} className="form-input" placeholder="Your full name" maxLength={100} />
                      {errors.name && <p className="form-error">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="form-label">Company Name *</label>
                      <input name="company" value={form.company} onChange={handleChange} className="form-input" placeholder="Your company name" maxLength={200} />
                      {errors.company && <p className="form-error">{errors.company}</p>}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Country *</label>
                      <input name="country" value={form.country} onChange={handleChange} className="form-input" placeholder="Your country" maxLength={100} />
                      {errors.country && <p className="form-error">{errors.country}</p>}
                    </div>
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} className="form-input" placeholder="your@email.com" maxLength={254} />
                      {errors.email && <p className="form-error">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Phone / WhatsApp *</label>
                      <div className="flex gap-0">
                        {/* Custom country dial-code picker */}
                        <div ref={dialDropdownRef} className="relative flex-shrink-0">
                          <button
                            type="button"
                            onClick={() => { setDialDropdownOpen((o) => !o); setDialSearch(''); }}
                            className="form-input rounded-r-none border-r-0 flex items-center gap-1 px-2 text-sm h-full whitespace-nowrap"
                            style={{ minWidth: '100px' }}
                            aria-haspopup="listbox"
                            aria-expanded={dialDropdownOpen}
                          >
                            <img src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`} alt={selectedCountry.code} width={20} height={14} className="rounded-sm object-cover flex-shrink-0" />
                            <span className="font-medium">{selectedCountry.code}</span>
                            <span className="text-gray-500">{selectedCountry.dialCode}</span>
                            <ChevronDown className="w-3 h-3 text-gray-400 ml-auto" />
                          </button>
                          {dialDropdownOpen && (
                            <div className="absolute z-50 top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                              <div className="p-2 border-b border-gray-100">
                                <input
                                  type="text"
                                  value={dialSearch}
                                  onChange={(e) => setDialSearch(e.target.value)}
                                  placeholder="Search country..."
                                  className="w-full text-sm px-2 py-1.5 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                                  autoFocus
                                />
                              </div>
                              <ul role="listbox" className="max-h-52 overflow-y-auto">
                                {COUNTRIES.filter((c) =>
                                  !dialSearch ||
                                  c.name.toLowerCase().includes(dialSearch.toLowerCase()) ||
                                  c.code.toLowerCase().includes(dialSearch.toLowerCase()) ||
                                  c.dialCode.includes(dialSearch)
                                ).map((c) => (
                                  <li
                                    key={c.code}
                                    role="option"
                                    aria-selected={c.code === selectedCountry.code}
                                    onClick={() => {
                                      setSelectedCountry(c);
                                      setForm((prev) => ({ ...prev, phoneCountryCode: c.dialCode, phone: '' }));
                                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                                      setDialDropdownOpen(false);
                                      setDialSearch('');
                                    }}
                                    className={`flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-green-50 ${c.code === selectedCountry.code ? 'bg-green-50 font-medium' : ''}`}
                                  >
                                    <img src={`https://flagcdn.com/w20/${c.code.toLowerCase()}.png`} alt={c.code} width={20} height={14} className="rounded-sm object-cover flex-shrink-0" />
                                    <span className="font-medium w-8">{c.code}</span>
                                    <span className="text-gray-500">{c.dialCode}</span>
                                    <span className="text-gray-400 truncate">{c.name}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="form-input rounded-l-none flex-1 min-w-0"
                          placeholder={selectedCountry.format.replace(/X/g, '0')}
                          maxLength={50}
                          inputMode="tel"
                        />
                      </div>
                      {errors.phone && <p className="form-error">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="form-label">Product of Interest *</label>
                      <select name="product" value={form.product} onChange={handleChange} className="form-input">
                        <option value="">Select a product...</option>
                        {products.map((p) => <option key={p} value={p}>{p}</option>)}
                      </select>
                      {errors.product && <p className="form-error">{errors.product}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Quantity Required (optional)</label>
                    <input name="quantity" value={form.quantity} onChange={handleChange} className="form-input" placeholder="e.g., 5 MT per month" maxLength={200} />
                  </div>
                  <div>
                    <label className="form-label">Your Message / Requirements *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className="form-input resize-none"
                      placeholder="Tell us about your product requirements, grade preferences, packaging needs, certifications required..."
                      maxLength={5000}
                    />
                    {errors.message && <p className="form-error">{errors.message}</p>}
                  </div>
                  <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-auto justify-center">
                    {submitting ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Inquiry</>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Animated Brand Logo Card */}
              <div className="bg-gradient-to-br from-[#1a472a] to-[#2d6a4f] rounded-2xl p-6 text-white card-shimmer flex flex-col items-center text-center">
                <div className="relative flex items-center justify-center mb-4" style={{ width: 160, height: 160 }}>
                  {/* Outer spinning gradient ring */}
                  <div
                    className="logo-ring-spin absolute rounded-full"
                    style={{
                      inset: '-8px',
                      background: 'conic-gradient(from 0deg, transparent 20%, rgba(82,183,136,0.9) 45%, rgba(212,160,23,0.8) 65%, transparent 85%)',
                    }}
                  />
                  {/* Counter-spinning dashed ring */}
                  <div
                    className="logo-ring-rev absolute rounded-full"
                    style={{ inset: '4px', border: '2px dashed rgba(255,255,255,0.3)' }}
                  />
                  {/* Ping ring 1 */}
                  <div
                    className="logo-ping absolute rounded-full"
                    style={{ inset: '0', border: '2px solid rgba(82,183,136,0.6)' }}
                  />
                  {/* Ping ring 2 */}
                  <div
                    className="logo-ping-2 absolute rounded-full"
                    style={{ inset: '0', border: '2px solid rgba(212,160,23,0.4)' }}
                  />
                  {/* Logo */}
                  <div className="relative rounded-full bg-white shadow-xl overflow-hidden logo-float logo-glow flex items-center justify-center" style={{ width: 140, height: 140 }}>
                    <Image
                      src="/images/logo.png"
                      alt="Shritik Enterprises LLP"
                      width={132}
                      height={137}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <p className="font-serif font-bold text-lg text-white leading-tight">Shritik Enterprises LLP</p>
                <p className="text-sm text-green-200 mt-1 uppercase tracking-wider font-medium">Manufacturer &amp; Exporter</p>
              </div>

              <div className="bg-[#f8fdf9] border border-green-100 rounded-2xl p-6 card-shimmer">
                <h3 className="font-semibold text-[#1a472a] mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#2d6a4f] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Communication Address</p>
                      <p className="text-sm text-gray-600">73, Subhangen Bunglows, Kalol,<br />Dist - Gandhinagar 382721, Gujarat, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#2d6a4f] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Factory / Plant Address</p>
                      <p className="text-sm text-gray-600">E-123, RIICO Industrial Area,<br />Swaroopganj, Aburoad,<br />Rajasthan - 307023, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#2d6a4f] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email</p>
                      <a href="mailto:info@shritikllp.com" className="text-sm text-[#2d6a4f] hover:text-[#1a472a]">
                        info@shritikllp.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#2d6a4f] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Phone / WhatsApp</p>
                      <a href="tel:+912764357360" className="text-sm text-[#2d6a4f] hover:text-[#1a472a] block">+91-2764-357360</a>
                      <a href="tel:+919925246360" className="text-sm text-[#2d6a4f] hover:text-[#1a472a] block">+91-9925246360</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a472a] rounded-2xl p-6 text-white card-shimmer">
                <h3 className="font-semibold text-white mb-3">What to Include</h3>
                <ul className="space-y-2 text-sm text-green-200">
                  {[
                    'Product name and grade (if known)',
                    'Required quantity (MT per month/year)',
                    'Destination country and port',
                    'Packaging preference',
                    'Certifications required (Halal, Kosher, etc.)',
                    'Any custom specifications',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#52b788] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 card-shimmer">
                <h3 className="font-semibold text-amber-900 mb-2">Response Time</h3>
                <p className="text-sm text-amber-800">
                  We respond to all export inquiries within <strong>24 business hours</strong>. For urgent inquiries, include your WhatsApp number.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
