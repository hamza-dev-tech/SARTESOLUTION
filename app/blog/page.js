import React from 'react';
import "./Blog.css";
import Footer from '@/src/components/Footer/Footer';
import Featured from '@/src/components/Blog/featured/Featured';
import CategoryList from '@/src/components/Blog/categoryList/CategoryList';
import CardList from '@/src/components/Blog/cardList/CardList';
import Menu from '@/src/components/Blog/Menu/Menu';
import Navbar from '../../src/components/Navbar/Navbar';

import CompanyServices from '@/src/components/Blog/companyServices/CompanyServices';
import Promotions from '@/src/components/promotions/Promotions';
import InfolinksAds from '../InfoLinksAds';

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
  title: "Blog | Sarte Solution",
  description: "Sarte Solution's blog offers insights on digital solutions, web development, IT infrastructure, digital marketing, and emerging technologies for business success.",
  keywords: `${joinedKeywords}, Blog, top 10 blogs, top 10 technologies, apple, trending, sarte solution blog, digital solutions, web development, generative AI, IT solutions, digital marketing, emerging technologies, Sarte Solution, Generative AI, Top Tech Companies, Europe, Top Development Platform, Boost Your Business, crm, pos system, project management, creative cloud, pov, fyp, student projects, computer science projects`,
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
      
      <Navbar />
      <div className='content2'>
      <Featured />
      <Promotions  />
      </div>
      <CategoryList />
      <div className="content">
        <CardList page={page}/>
        <Menu />
      </div>
      <CompanyServices />
      <Footer />
      <InfolinksAds />
    </div>
  );
}

export default Blogs;
