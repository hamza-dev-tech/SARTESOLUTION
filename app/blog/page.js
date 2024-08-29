import React from 'react';
import "./Blog.css";
import Footer from '@/src/components/Footer/Footer';
import Featured from '@/src/components/Blog/featured/Featured';
import CategoryList from '@/src/components/Blog/categoryList/CategoryList';
import CardList from '@/src/components/Blog/cardList/CardList';
import Menu from '@/src/components/Blog/Menu/Menu';
import Navbar from '../../src/components/Navbar/Navbar';
import Script from 'next/script';
import CompanyServices from '@/src/components/Blog/companyServices/CompanyServices';

export const metadata = {
  title: "Blog | Welcome to daily news Sarte Solution",
  description: "Sarte Solution's blog offers insights on digital solutions, web development, IT infrastructure, digital marketing, and emerging technologies for business success.",
  keywords: "Blog, top 10 blogs, top 10 technologies, apple, trending, sarte solution blog, digital solutions, web development, generative AI, IT solutions, digital marketing, emerging technologies, Sarte Solution, Generative AI, Top Tech Companies, Europe, Top Development Platform, Boost Your Business, crm, pos system, project management, creative cloud, pov, fyp, student projects, computer science projects",
  author: "Sarte Solution Team",
  alternates: {
    canonical: `${process.env.NEXTAUTH_URL}/blog`,
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: "Blog | Sarte Solution",
    description: "Sarte Solution's blog offers insights on digital solutions, web development, IT infrastructure, digital marketing, and emerging technologies for business success.",
    url: `${process.env.NEXTAUTH_URL}/blog`,
    images: [
      {
        url: `${process.env.NEXTAUTH_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'Blog | Sarte Solution',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Sarte Solution",
    description: "Sarte Solution's blog offers insights on digital solutions, web development, IT infrastructure, digital marketing, and emerging technologies for business success.",
    image: `${process.env.NEXTAUTH_URL}/opengraph-image.png`,
  },
  robots: 'index, follow',
  schema: {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Blog | Sarte Solution",
    description: "Sarte Solution's blog offers insights on digital solutions, web development, IT infrastructure, digital marketing, and emerging technologies for business success.",
    image: `${process.env.NEXTAUTH_URL}/opengraph-image.png`,
    author: {
      "@type": "Organization",
      name: "Sarte Solution",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXTAUTH_URL}/sarte-solution-logo.png`
      }
    },
  },
};

const Blogs = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className="app">
    
      <link rel="preload" href="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5822613719641434" as="script" crossorigin="anonymous" />
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5822613719641434" crossorigin="anonymous"></Script>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-170T4531W6"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-170T4531W6');
        `}
      </Script>
      <Navbar />
      <Featured />
      <CategoryList />
      <div className="content">
        <CardList page={page}/>
        <Menu />
      </div>
      <CompanyServices />
      <Footer />
    </div>
  );
}

export default Blogs;
