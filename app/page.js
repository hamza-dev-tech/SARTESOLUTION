import "./page.css";

import Navbar from "../src/components/Navbar/Navbar";
import Hero from "../src/components/Hero/Hero";
import BrandingVideo from "../src/components/BrandingVideo/BrandingVideo";
import Services from "../src/components/ServicesPanel/Services";
import OurDiff from "../src/components/OurDiff/OurDiff";
import Projects from "../src/components/Projects/Projects";
import HowItWorks from "../src/components/HowItWorks/HowItWorks";
import Footer from "../src/components/Footer/Footer";
import Testemonials from "../src/components/Testimonials/Testemonials";



export const metadata = {
  title: "Sarte Solution: Your Digital Transformation Partner",
  description: "Sarte Solution offers digital solutions, including web development, IT infrastructure, digital marketing, Generative Ai Development and emerging technologies to help your business thrive in the digital age.",
  keywords: "digital solutions, web development,generative AI, IT solutions, digital marketing, emerging technologies, Sarte Solution, Generative AI, Top Tech Companies, Europe, Top Development Platform, Boost Your Business, crm, pos system, project management, creative cloud",
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
    title: "Sarte Solution: Your Digital Transformation Partner",
    description: "Sarte Solution offers digital solutions, including web development, IT infrastructure, digital marketing, Generative Ai Development and emerging technologies to help your business thrive in the digital age.",
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
    title: "Sarte Solution: Your Digital Transformation Partner",
    description: "Sarte Solution offers digital solutions, including web development, IT infrastructure, digital marketing, Generative Ai Development and emerging technologies to help your business thrive in the digital age.",
    image: "https://www.sartesolution.com/opengraph-image.png",
  },
  robots: 'index, follow',
  schema: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sarte Solution",
    url: "https://www.sartesolution.com",
    logo: "https://www.sartesolution.com/sarte-solution-logo.png",
    description: "Sarte Solution offers digital solutions, including web development, IT infrastructure, digital marketing, Generative Ai Development and emerging technologies to help your business thrive in the digital age.",
    image: "https://www.sartesolution.com/opengraph-image.png",
    author: {
      "@type": "Organization",
      name: "Sarte Solution",
    },
  },
};




export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero
        title1="Redifine How"
        title2="You Grow"
        des="At Solution Solution, we specialize in delivering innovative and customized software solutions to drive your business forward. Our team of experts is dedicated to turning your vision into reality. Partner with us to unlock your full potential and achieve unparalleled success."
      />
      <BrandingVideo />
      <Services />
      <div>
        <OurDiff />
      </div>

      <HowItWorks />

      <div>
        <Projects />
      </div>
      <div></div>
      <Testemonials />
      <Footer />
    </div>
  );
}
