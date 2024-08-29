import "./Featured.css";
import Image from "next/image";
import { htmlToText } from "html-to-text";
import Link from "next/link";



const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/featured`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
};

const Featured = async () => {
  let data;

  try {
    data = await getData();
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  const post = data?.posts;

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
