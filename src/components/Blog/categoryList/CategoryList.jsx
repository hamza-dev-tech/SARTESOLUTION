import React from "react";
import "./CategoryList.css";

import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();

  return (
    <div className="cat-wrapper">
      <div className="container">
        <div className="cat-container">
          <div className="cat-head">
            <h1 className="title">Popular Categories</h1>
          </div>

          <div className="categories">
            {data?.map((item) => (
              <Link
                href={`/blog/categories?cat=${item.slug}`}
                className={`category ${item.slug}`}
                key={item.slug}
              >
                {item.img && (
                  <Image
                    src={item.img}
                    alt=""
                    width={38}
                    height={38}
                    className="image"
                  />
                )}
                <h1 className="des" style={{ fontSize: "1rem" }}>
                  {item.title}
                </h1>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
