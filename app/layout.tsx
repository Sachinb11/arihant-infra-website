import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  metadataBase: new URL("https://arihantinfra.in"),
  title: {
    default: "Arihant Infra | Premium Real Estate in Palghar, Maharashtra",
    template: "%s | Arihant Infra",
  },
  description:
    "Arihant Infra builds premium residential and commercial properties in Palghar, Maharashtra. Explore 1BHK & 2BHK homes in RadhaKrishna Apt. and our other landmark projects.",
  keywords: [
    "real estate Palghar",
    "1BHK 2BHK Palghar",
    "RadhaKrishna Apartments",
    "Arihant Infra",
    "MahaRERA P99000051839",
    "new flats Palghar",
    "residential projects Palghar Maharashtra",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://arihantinfra.in",
    siteName: "Arihant Infra",
    title: "Arihant Infra | Premium Real Estate in Palghar, Maharashtra",
    description:
      "Premium 1BHK & 2BHK homes by Arihant Infra. RERA registered, PMC approved, bank loan eligible. Visit RadhaKrishna Apt. in Palghar East.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Arihant Infra Premium Residences Palghar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arihant Infra | Premium Real Estate in Palghar",
    description: "Premium 1BHK & 2BHK homes in Palghar. RERA registered.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className="font-body bg-cream text-royal-900 overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
