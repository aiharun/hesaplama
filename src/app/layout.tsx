import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: "Hesap Merkezi - Ücretsiz Online Hesaplama Araçları",
    template: "%s | Hesap Merkezi"
  },
  description: "20+ ücretsiz online hesaplama aracı: döviz çevirici, kalori hesaplama, BMI, faiz hesaplama, birim dönüştürücüler ve daha fazlası. Hızlı, güvenilir ve kullanımı kolay.",
  keywords: ["hesaplama araçları", "online hesaplama", "döviz çevirici", "kalori hesaplama", "bmi hesaplama", "faiz hesaplama", "birim dönüştürücü"],
  authors: [{ name: "Hesap Merkezi" }],
  creator: "Hesap Merkezi",
  publisher: "Hesap Merkezi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Hesap Merkezi',
    title: 'Hesap Merkezi - Ücretsiz Online Hesaplama Araçları',
    description: '20+ ücretsiz online hesaplama aracı. Hızlı ve güvenilir.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hesap Merkezi - Ücretsiz Online Hesaplama Araçları',
    description: '20+ ücretsiz online hesaplama aracı. Hızlı ve güvenilir.',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  verification: {
    // google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Google Ads Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3627905544274845"
          crossOrigin="anonymous"
        />
        {/* Google Analytics (optional) */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" /> */}
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
