"use client";

import "./Featured.css";
import Image from "next/image";
import { htmlToText } from "html-to-text";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const Featured = () => {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        const response = await axios.get("/api/featured");
        console.log('API Response:', response.data);
        setFeatured(response.data.posts);
      } catch (error) {
        console.error("Error fetching featured posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedPosts();
    const interval = setInterval(fetchFeaturedPosts, 10000); // Refresh every 10 seconds
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const post = featured.length > 0 ? featured[0] : null;

  const description = post?.desc
    ? htmlToText(post.desc, { wordwrap: 130 }).substring(0, 420)
    : "";

  return (
    <div className="featured-wrapper">
      <div className="container">
        <div className="featured-container">
          <div className="featured-head">
            <h1 className="title">Discover Stories and</h1>
            <h1 className="tag">Creative Ideas</h1>
          </div>

          {post ? (
            <div className="post">
              <div className="imgContainer">
                <Image
                  className="post-img"
                  src={post.img}
                  alt={post.title || "Featured Image"}
                  fill
                />
              </div>
              <div className="textContainer">
                <h1 className="postTitle" style={{paddingTop:'2rem'}}>{post.title}</h1>
                <p className="postDesc" style={{textAlign:'center', marginBottom:'0rem'}}>{description}</p>

                <Link className="read-button" href={`/blog/posts/${post.slug}`}>
                  Read More
                </Link>
              </div>
            </div>
          ) : (
            <div>No data available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Featured;
