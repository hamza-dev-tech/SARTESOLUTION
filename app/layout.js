// app/layout.js

import Script from "next/script";
import AuthProvider from "../src/providers/AuthProvider";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const keywords = [
  "Digital Marketing Agency", "AI-Powered Marketing", "Voice Search Optimization",
  "Video Marketing", "Influencer Marketing", "Content Personalization",
  "Blockchain Development", "Cybersecurity Solutions", "SaaS Solutions",
  "Internet of Things (IoT)", "Edge Computing", "Sustainable Practices",
  "E-commerce Growth", "Remote Work Solutions", "Generative AI", "5G Technology",
  "Top Digital Marketing Agency USA", "Leading Digital Marketing Agency India",
  "Best Digital Marketing Company Saudi Arabia", "Top Digital Marketing Agency Dubai",
  "Leading Digital Marketing Agency Europe", "Top Digital Marketing Agency Pakistan",
  "Top Software Development Company", "Ai Experts", "Marketing Experts", "Digital World",
  "Hamza Shabbir", "Top Universities World Wide", "Info about"
];

const joinedKeywords = keywords.join(", ");

export const metadata = {
  title: "Sarte Solution: Your Digital Transformation Partner",
  description: "Sarte Solution offers digital solutions, including web development, IT infrastructure, digital marketing, Generative AI Development, and emerging technologies to help your business thrive in the digital age.",
  keywords: `${joinedKeywords}, digital solutions, web development, generative AI, IT solutions, digital marketing, emerging technologies, Sarte Solution, Generative AI, Top Tech Companies, Europe, Top Development Platform, Boost Your Business, CRM, POS system, project management, creative cloud`,
  author: "Sarte Solution Team",
  metadataBase: new URL("https://www.sartesolution.com"),
  alternates: {
    canonical: "https://www.sartesolution.com",
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: "Sarte Solution",
    description: "Sarte Solution offers digital solutions, including web development, IT infrastructure, digital marketing, Generative AI Development, and emerging technologies to help your business thrive in the digital age.",
    url: "https://www.sartesolution.com",
    images: [
      {
        url: "https://www.sartesolution.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: 'Sarte Solution',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarte Solution",
    description: "Sarte Solution offers digital solutions, including web development, IT infrastructure, digital marketing, Generative AI Development, and emerging technologies to help your business thrive in the digital age.",
    image: "https://www.sartesolution.com/opengraph-image.png",
  },
  robots: 'index, follow',
  schema: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sarte Solution",
    url: "https://www.sartesolution.com",
    logo: "https://www.sartesolution.com/sarte-solution-logo.png",
    description: "Sarte Solution offers digital solutions, including web development, IT infrastructure, digital marketing, Generative AI Development, and emerging technologies to help your business thrive in the digital age.",
    image: "https://www.sartesolution.com/opengraph-image.png",
    author: {
      "@type": "Organization",
      name: "Sarte Solution",
    },
  },
};

const Josef = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Sarte Solution offers cutting-edge digital solutions, including web development, IT infrastructure, digital marketing, and emerging technologies to help your business thrive in the digital age." />
        <meta name="keywords" content={joinedKeywords} />
        <meta name="author" content="Sarte Solution Team" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <Script type="application/ld+json" id="structured-data">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sarte Solution",
              "url": "https://www.sartesolution.com",
              "logo": "https://www.sartesolution.com/sarte-solution-logo.png",
              "description": "Sarte Solution offers digital solutions, including web development, IT infrastructure, digital marketing, Generative AI Development, and emerging technologies to help your business thrive in the digital age.",
              "image": "https://www.sartesolution.com/opengraph-image.png",
              "author": {
                "@type": "Organization",
                "name": "Sarte Solution"
              }
            }
          `}
        </Script>
      </head>
      <body className={Josef.className}>
        <GoogleTagManager gtmId="GTM-MBM3D6DV" />
        <GoogleAnalytics gaId="G-170T4531W6" />
        {/* Google Ads (AdSense) */}
        <Script
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5822613719641434"
          crossOrigin="anonymous"
        />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
