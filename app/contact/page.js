import Navbar from '@/src/components/Navbar/Navbar'
import React from 'react'
import "./contact.css"
import Hero from '@/src/components/Hero/Hero'
import Footer from '@/src/components/Footer/Footer'
import Contact from '@/src/components/Contact/Contact'
import Script from 'next/script'


export const metadata = {
  title: "Contact | Sarte Solution",
  description: "Contact Us Today to book your future journey with Sarte Solution that offers cutting-edge digital solutions, including web development, IT infrastructure, digital marketing, and emerging technologies to help your business thrive in the digital age.",
  keywords: "digital solutions,contact us, contact sarte solution, book an appointment, web development,generative AI, IT solutions, digital marketing, emerging technologies, what sarte solution is, who are they, Generative AI, Top Tech Companies, Europe, Top Development Platform, Boost Your Business, crm, pos system, project management, creative cloud, student projects, student offers, diwali sales, upsc, gcse, igcse, resonable notes, heir, apple, greatest technologies",
  author: "Sarte Solution Team",
  metadataBase: new URL("https://www.sartesolution.com/contact"),
  alternates: {
    canonical: "https://www.sartesolution.com/contact",
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: "Contact | Sarte Solution",
  description: "Contact Us Today to book your future journey with Sarte Solution that offers cutting-edge digital solutions, including web development, IT infrastructure, digital marketing, and emerging technologies to help your business thrive in the digital age.",
    url: "https://www.sartesolution.com/contact",
    images: [
      {
        url: `/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'Contact | Sarte Solution',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Sarte Solution",
    description: "Contact Us Today to book your future journey with Sarte Solution that offers cutting-edge digital solutions, including web development, IT infrastructure, digital marketing, and emerging technologies to help your business thrive in the digital age.",
    image: "/opengraph-image.png",
  },
  robots: 'index, follow',
  schema: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sarte Solution Contact",
    url: "https://www.sartesolution.com/contact",
    logo: "https://www.sartesolution.com/sarte-solution-logo.png",
    description: "Contact Us Today to book your future journey with Sarte Solution that offers cutting-edge digital solutions, including web development, IT infrastructure, digital marketing, and emerging technologies to help your business thrive in the digital age.",
    image: "https://www.sartesolution.com/opengraph-image.png",
    author: {
      "@type": "Organization",
      name: "Sarte Solution",
    },
  },
};



const ContactPage = () => {
  return (
    <div className='app'>
  
      <Navbar />
      <Hero title1="Contact Us" title2="Today" des="At Sarte Solution, we are dedicated to providing exceptional service and support. Whether you have questions, need assistance, or want to discuss potential collaborations, our team is here to help. Reach out to us via email, phone, or the contact form below. Stay connected with us through our social media channels for the latest updates. We look forward to hearing from you!

" />
      <Contact />
      <Footer />
    </div>
  )
}

export default ContactPage
