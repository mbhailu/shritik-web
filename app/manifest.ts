import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shritik Enterprises LLP",
    short_name: "Shritik",
    description:
      "India-based manufacturer and exporter of premium cashew kernels, dehydrated onion, garlic, and ginger. Certified with FSSAI, APEDA, ISO, Halal & Kosher.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1a472a",
    icons: [
      { src: "/logo.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/logo.ico", sizes: "any", type: "image/x-icon" },
    ],
    categories: ["food", "business", "shopping"],
    lang: "en",
    dir: "ltr",
  };
}
