import Footer from "@/src/components/Footer/Footer";
import Navbar from "@/src/components/Navbar/Navbar";
import Services from "@/src/services/Services";
import React from "react";
import "./services.css"
import Hero from "@/src/components/Hero/Hero";

export const metadata = {
  title: "Services | Choose Trending Services with Sarte Solution",
  description: "Sarte Solution offers digital solutions, including web development, IT infrastructure, digital marketing, Generative Ai Development and emerging technologies to help your business thrive in the digital age.",
  keywords: "digital solutions, web development,generative AI, IT solutions, digital marketing, emerging technologies, Sarte Solution, Generative AI, Top Tech Companies, Europe, Top Development Platform, Boost Your Business, crm, pos system, project management, creative cloud, student projects, student offers, diwali sales, upsc, gcse, igcse, resonable notes, heir, apple, greatest technologies",
  author: "Sarte Solution Team",
  metadataBase: new URL("https://www.sartesolution.com/services"),
  alternates: {
    canonical: "https://www.sartesolution.com/services",
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: "Services | Choose Trending Services with Sarte Solution",
    description: "Sarte Solution offers digital solutions, including web development, IT infrastructure, digital marketing, Generative Ai Development and emerging technologies to help your business thrive in the digital age.",
    url: "https://www.sartesolution.com/services",
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
    title: "Services | Choose Trending Services with Sarte Solution",
    description: "Sarte Solution offers digital solutions, including web development, IT infrastructure, digital marketing, Generative Ai Development and emerging technologies to help your business thrive in the digital age.",
    image: "https://www.sartesolution.com/opengraph-image.png",
  },
  robots: 'index, follow',
  schema: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sarte Solution Services",
    url: "https://www.sartesolution.com/services",
    logo: "https://www.sartesolution.com/sarte-solution-logo.png",
    description: "Sarte Solution offers digital solutions, including web development, IT infrastructure, digital marketing, Generative Ai Development and emerging technologies to help your business thrive in the digital age.",
    image: "https://www.sartesolution.com/opengraph-image.png",
    author: {
      "@type": "Organization",
      name: "Sarte Solution",
    },
  },
};


const Service = () => {
  return (
    <div >
      
      <Navbar  />
      <Hero title1="Our Services" des="At Sarte Solution Our team of experts works closely with you to understand your goals and deliver customized solutions that drive growth and efficiency. Whether you need a stunning website, robust IT infrastructure, or a comprehensive digital marketing strategy, we have you covered." />
      <Services />
      <Footer />
    </div>
  );
};

export default Service;
