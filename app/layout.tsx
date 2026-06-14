import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = "https://www.shritikenterprises.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shritik Enterprises LLP | Cashew & Dehydrated Food Exporter India",
    template: "%s | Shritik Enterprises LLP",
  },
  description:
    "Shritik Enterprises LLP is an India-based manufacturer and exporter of premium cashew kernels, dehydrated onion, garlic, and ginger for global food businesses. Certified with FSSAI, APEDA, IEC, ISO, Halal & Kosher.",
  keywords: [
    "cashew kernels exporter India",
    "dehydrated onion supplier India",
    "dehydrated garlic exporter India",
    "dehydrated ginger supplier",
    "Indian food ingredients exporter",
    "FSSAI certified food exporter",
    "APEDA registered exporter",
    "bulk food ingredients India",
    "Halal Kosher certified food India",
    "cashew W320 W180 exporter",
    "private label food India",
  ],
  authors: [{ name: "Shritik Enterprises LLP" }],
  creator: "Shritik Enterprises LLP",
  publisher: "Shritik Enterprises LLP",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Shritik Enterprises LLP",
    title: "Shritik Enterprises LLP | Cashew & Dehydrated Food Exporter India",
    description:
      "India's trusted exporter of cashew kernels & dehydrated foods. FSSAI, APEDA, ISO, Halal & Kosher certified. Serving 30+ countries.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Shritik Enterprises LLP — Premium Indian Food Ingredients Exporter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shritik Enterprises LLP | Cashew & Dehydrated Food Exporter India",
    description:
      "India-based manufacturer and exporter of certified cashew kernels, dehydrated onion, garlic, and ginger. Serving 30+ countries.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/logo.ico", type: "image/x-icon" },
      { url: "/logo.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/logo.ico",
    apple: { url: "/logo.png", type: "image/png" },
  },
  category: "food",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
