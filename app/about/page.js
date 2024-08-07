// app/about/page.js

import Footer from "@/src/components/Footer/Footer";
import Navbar from "@/src/components/Navbar/Navbar";
import "./page.css";
import React from "react";
import Hero from "@/src/components/Hero/Hero";
import AboutUs from "@/src/components/AboutUs/AboutUs";

export const metadata = {
  title: "About | Know more about Sarte Solution",
  description: "Sarte Solution offers digital solutions, including web development, IT infrastructure, digital marketing, Generative Ai Development and emerging technologies to help your business thrive in the digital age.",
  keywords: "digital solutions, web development,generative AI, IT solutions, digital marketing, emerging technologies, Sarte Solution,about sarte solution, what sarte solution is, who are they, Generative AI, Top Tech Companies, Europe, Top Development Platform, Boost Your Business, crm, pos system, project management, creative cloud, student projects, student offers, diwali sales, upsc, gcse, igcse, resonable notes, heir, apple, greatest technologies",
  author: "Sarte Solution Team",
  metadataBase: new URL("https://www.sartesolution.com/about"),
  alternates: {
    canonical: "https://www.sartesolution.com/about",
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: "About | Know more about Sarte Solution",
    description: "Sarte Solution offers digital solutions, including web development, IT infrastructure, digital marketing, Generative Ai Development and emerging technologies to help your business thrive in the digital age.",
    url: "https://www.sartesolution.com/about",
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
    title: "About | Know more about Sarte Solution",
    description: "Sarte Solution offers digital solutions, including web development, IT infrastructure, digital marketing, Generative Ai Development and emerging technologies to help your business thrive in the digital age.",
    image: "https://www.sartesolution.com/opengraph-image.png",
  },
  robots: 'index, follow',
  schema: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sarte Solution About",
    url: "https://www.sartesolution.com/about",
    logo: "https://www.sartesolution.com/sarte-solution-logo.png",
    description: "Sarte Solution offers digital solutions, including web development, IT infrastructure, digital marketing, Generative Ai Development and emerging technologies to help your business thrive in the digital age.",
    image: "https://www.sartesolution.com/opengraph-image.png",
    author: {
      "@type": "Organization",
      name: "Sarte Solution",
    },
  },
};


const About = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero title1="About Us" des="At Sarte Solutions, we specialize in delivering cutting-edge digital solutions tailored to meet the unique needs of your business. Our services range from web development and IT solutions to digital marketing and emerging technologies. We are committed to helping your business thrive in the digital age." />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default About;
