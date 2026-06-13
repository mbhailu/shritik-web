'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail, Phone, MapPin, CheckCircle, Send, Loader2, AlertCircle } from 'lucide-react';
import PageHeroDecor from '../components/PageHeroDecor';

type FormData = {
  name: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const EMPTY_FORM: FormData = {
  name: '', company: '', country: '', email: '', phone: '', product: '', quantity: '', message: '',
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
    setForm((prev) => ({ ...prev, [name]: value }));
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
                      <input name="phone" value={form.phone} onChange={handleChange} className="form-input" placeholder="+1 234 567 8900" maxLength={50} />
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
                      <p className="text-sm font-medium text-gray-900">Address</p>
                      <p className="text-sm text-gray-600">73, Subhangen Bunglows, Kalol,<br />Dist - Gandhinagar 382721, Gujarat, India</p>
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
