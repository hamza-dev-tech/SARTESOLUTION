import Menu from "@/src/components/Blog/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/src/components/Blog/comments/Comments";
import Navbar from "@/src/components/Navbar/Navbar";
import Footer from "@/src/components/Footer/Footer";
import Keyword from "@/src/components/Blog/keyword/Keyword";
import "./page.css";
import {
  FaEye,
  FaFacebook,
  FaReddit,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import CompanyServices from "@/src/components/Blog/companyServices/CompanyServices";
import { htmlToText } from "html-to-text";
import PromotionsSinglePage from "@/src/components/promotionssinglepage/PromotionsSinglePage";
import InfolinksAds from "@/app/InfoLinksAds";

// Function to generate URLs for social media
const generateShareUrls = (postUrl, encodedTitle, descriptions, hashtags) => {
  const encodedHashtags = encodeURIComponent(hashtags);

  return {
    twitter: `https://twitter.com/intent/tweet?url=${postUrl}&text=${descriptions.twitter} ${encodedHashtags}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${postUrl}&quote=${descriptions.facebook} ${encodedHashtags}`,
    linkedin: `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${encodedTitle}&summary=${descriptions.linkedin} ${encodedHashtags}`,
    pinterest: `https://www.pinterest.com/pin/create/button/?url=${postUrl}&media=${descriptions.image}&description=${descriptions.pinterest} ${encodedHashtags}`,
    reddit: `https://www.reddit.com/submit?url=${postUrl}&title=${encodedTitle}&text=${descriptions.reddit} ${encodedHashtags}`,
  };
};


export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = await getData(slug);

  if (!data) {
    return notFound();
  }

  // Fetch keywords
  const keywordsData = await fetch(
    `${process.env.NEXTAUTH_URL}/api/keywords?postSlug=${slug}`
  ).then((res) => res.json());
  const keywords = [
    ...keywordsData.keywords.map((item) => item.keyword),
    "Digital Marketing Agency", "AI-Powered Marketing", "Voice Search Optimization",
    "Video Marketing", "Influencer Marketing", "Content Personalization",
    "Blockchain Development", "Cybersecurity Solutions", "SaaS Solutions",
    "Internet of Things (IoT)", "Edge Computing", "Sustainable Practices",
    "E-commerce Growth", "Remote Work Solutions", "Generative AI", "5G Technology",
    "Top Digital Marketing Agency USA", "Leading Digital Marketing Agency India",
    "Best Digital Marketing Company Saudi Arabia", "Top Digital Marketing Agency Dubai",
    "Leading Digital Marketing Agency Europe", "Top Digital Marketing Agency Pakistan", "Top Software Development Company", "Ai Experts", "Marketing Experts", "Digital World", "Hamza Shabbir", "Top Universities World Wide", "Info about"
  ];

  const rawDescription = data.desc?.substring(0, 160) || "";
  const description = htmlToText(rawDescription);

  // Ensure the description length is within 55 to 200 characters
  const trimmedDescription =
    description.length > 250
      ? description.substring(0, 247) + "..."
      : description;
  const finalDescription =
    trimmedDescription.length < 55
      ? trimmedDescription
      : trimmedDescription;

  const title = `${data.title} - Sarte Solution Blog`;

  return {
    title: title,
    description: finalDescription,
    keywords: keywords.join(", "),
    alternates: {
      canonical: `${process.env.NEXTAUTH_URL}/blog/posts/${data.slug}`,
      languages: {
        "en-US": `${process.env.NEXTAUTH_URL}/blog/posts/${data.slug}`,
      },
    },
    openGraph: {
      type: "article",
      title: title,
      description: finalDescription,
      url: `${process.env.NEXTAUTH_URL}/blog/posts/${data.slug}`,
      images: [
        {
          url: data.img || "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: finalDescription,
      image: data.img || "/opengraph-image.png",
    },
    robots: "index, follow",
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: data.title,
      description: finalDescription,
      image: data.img || "/opengraph-image.png",
      author: {
        "@type": "Person",
        name: data.user?.name,
      },
      datePublished: data.createdAt,
      publisher: {
        "@type": "Organization",
        name: "Sarte Solution",
        logo: {
          "@type": "ImageObject",
          url: `${process.env.NEXTAUTH_URL}/sarte-solution-logo.png`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${process.env.NEXTAUTH_URL}/blog/posts/${data.slug}`,
      },
    },
  };
}



const dummyPromotions = [
  {
    id: "1",
    title: "SEO Optimization sdjnfj jskdnfckjse",
    description:
      "Boost your dsvnjkcejr vejrkv en jc ne jf wen vcwejf cnw ej website ranking with our expert SEO services.",
    imageUrl: "/images/seo-promotion.jpg",
    link: "/services/seo-optimization",
  },
];

const getData = async (slug) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

// Function to create hashtags from keywords
const createHashtags = (keywords) => {
  return keywords.map((keyword) => `#${keyword.replace(/\s+/g, "")}`).join(" ");
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);

  const postUrl = `${process.env.NEXTAUTH_URL}/blog/posts/${slug}`;
  const encodedTitle = encodeURIComponent(data?.title);
  const fullDescription = htmlToText(data?.desc || "");

  // Fetch keywords for hashtags
  const keywordsData = await fetch(
    `${process.env.NEXTAUTH_URL}/api/keywords?postSlug=${slug}`
  ).then((res) => res.json());
  const keywords = keywordsData.keywords.map((item) => item.keyword);
  const hashtags = createHashtags(keywords);

  // Trim descriptions for each platform
  const descriptions = {
    twitter: `${fullDescription.substring(
      0,
      280 - postUrl.length - hashtags.length - 8
    )}...`,
    facebook: `${fullDescription.substring(0, 80)}...`,
    linkedin: `${fullDescription.substring(0, 200)}...`,
    pinterest: `${fullDescription.substring(0, 500)}...`,
    reddit: `${fullDescription.substring(0, 300)}...`,
    image: data.img || "/opengraph-image.png",
  };

  // Generate share URLs
  const shareUrls = generateShareUrls(postUrl, encodedTitle, descriptions, hashtags);

  return (
    <>
      
      <Navbar />

      <div className={styles.hitwrapper}>
        <div className={styles.container}>
          <article className={styles.hitcontainer}>
            <div className={styles.infoContainer}>
              <header className={styles.textContainer}>
                <h1
                  style={{ margin: "2rem 0", marginTop: 0 }}
                  className={styles.title}
                >
                  {data?.title}
                </h1>
                <div className={styles.user}>
                  {data?.user?.image && (
                    <div className={styles.userImageContainer}>
                      <Image
                        src={data?.user?.image}
                        alt={data?.user?.name}
                        fill
                        className={styles.avatar}
                      />
                    </div>
                  )}
                  <div className={styles.userTextContainer}>
                    <span className={styles.username}>{data?.user?.name}</span>
                    <span className={styles.date}>
                      {data?.createdAt?.substring(0, 10)}
                    </span>
                  </div>
                  <span className={styles.views}>
                    <FaEye className={styles.eyeIcon} /> {data.views}
                  </span>
                </div>
                <div className={styles.socialShare}>
                  <a
                    href={shareUrls.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter size={30} />
                  </a>
                  <a
                    href={shareUrls.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook size={30} />
                  </a>
                  <a
                    href={shareUrls.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={30} />
                  </a>
                  <a
                    href={shareUrls.pinterest}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaPinterest size={30} />
                  </a>
                  <a
                    href={shareUrls.reddit}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaReddit size={30} />
                  </a>
                </div>
              </header>

              {data?.img && (
                <div className={styles.imageContainer}>
                  <Image src={data.img} alt={data.title} fill className={styles.image} />
                </div>
              )}
            </div>
            <div className={styles.content}>
              <div className={styles.post}>
                <div className={styles.content2}>
                  <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: data?.desc }}
                  />
                  <div className={styles.childContent}>
                    <PromotionsSinglePage promotions={dummyPromotions} />
                    <Menu />
                  </div>
                </div>
                <hr style={{ color: "black", fontWeight: "800" }}></hr>
                <div className={styles.comment}>
                  <Comments postSlug={slug} />
                  <Keyword postSlug={slug} />
                </div>
              </div>
              <CompanyServices />
            </div>
          </article>
        </div>
      </div>
      <Footer />
      <InfolinksAds />
    </>
  );
};

export default SinglePage;
