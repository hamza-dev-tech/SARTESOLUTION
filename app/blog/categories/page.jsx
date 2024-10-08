// app/blog/[cat]/page.js

import CardList from "@/src/components/Blog/cardList/CardList";
import "./singleCateg.css";
import Menu from "@/src/components/Blog/Menu/Menu";
import "./Page.css";
import Navbar from "@/src/components/Navbar/Navbar";
import Footer from "@/src/components/Footer/Footer";
import Featured from "@/src/components/Blog/featured/Featured";
import InfolinksAds from "@/app/InfoLinksAds";

export async function generateMetadata({ searchParams }) {
  const { cat } = searchParams;

  const description = `Explore insightful articles about ${cat} on Sarte Solution's blog. Stay updated with the latest trends, tips, and insights in ${cat}. Discover expert advice and comprehensive guides on ${cat} to stay ahead in the digital world.`;
  const title = `${cat} - Sarte Solution Blog`;

  // Ensure the title length is between 30-60 characters
  const optimizedTitle =
    title.length > 60 ? title.substring(0, 57) + "..." : title;

  const keywords = [
    `${cat}`, `Blog`, `Sarte Solution`, `Digital Solution`, `Sarte Solution Blog`, `Tech News`, `Trending Technology`,
    `Coding`, `Tech Culture`, `Cyber Security`, `Latest Trends in ${cat}`, `Insights on ${cat}`, `Expert Advice on ${cat}`
  ].join(", ");

  return {
    title: optimizedTitle,
    description,
    keywords,
    alternates: {
      canonical: `${process.env.NEXTAUTH_URL}/blog/category/${cat}`,
      languages: {
        "en-US": `${process.env.NEXTAUTH_URL}/blog/category/${cat}`,
      },
    },
    openGraph: {
      type: "article",
      title: optimizedTitle,
      description,
      url: `${process.env.NEXTAUTH_URL}/blog/category/${cat}`,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${cat} articles`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: optimizedTitle,
      description,
      image: "/og-image.png",
    },
    robots: "index, follow",
    schema: {
      "@context": "https://schema.org",
      "@type": "Blog",
      headline: optimizedTitle,
      description,
      image: "/og-image.png",
      author: {
        "@type": "Organization",
        name: "Sarte Solution",
      },
    },
  };
}

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Featured />

        <h1 style={{ marginTop: "8rem", lineHeight: "2rem" }} className="title">
          {cat} Blog
        </h1>

        <div className="content">
          <CardList page={page} cat={cat} />
          <Menu />
        </div>
      </div>
      <Footer />
      <InfolinksAds />
    </div>
  );
};

export default BlogPage;
