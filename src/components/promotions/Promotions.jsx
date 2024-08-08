// src/components/promotions/Promotions.js
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./promotions.module.css";

const Promotions = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        // Fetch promotions from the API with a cache-busting timestamp
        const response = await fetch(`/api/promotions?_t=${new Date().getTime()}`);
        const data = await response.json();
        setPromotions(data.promotions);
      } catch (error) {
        console.error("Failed to fetch promotions:", error);
      }
    };

    // Initial fetch
    fetchPromotions();

    // Set up an interval to refresh the data every 10 seconds
    const interval = setInterval(() => {
      fetchPromotions();
    }, 10000); // 10,000 milliseconds = 10 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <aside className={styles.promotionsContainer}>
      <h1 className="title" style={{ marginBottom: "1rem" }}>
        Promotions
      </h1>
      <div className={styles.promotionsList}>
        {promotions.map((promo) => (
          <div key={promo.id} className={styles.promotionItem}>
            {promo.imageUrl && (
              <main className={styles.promotionImageContainer}>
                <Image
                  src={promo.imageUrl}
                  alt={promo.title}
                  layout="fill"
                  objectFit="cover"
                  className={styles.promotionImage}
                />
              </main>
            )}
            <div className={styles.promotionText}>
              <h1
                className="tag"
                style={{ fontSize: "1.2rem", lineHeight: "1.5rem" }}
              >
                {promo.title}
              </h1>
              <p className="text" style={{ lineHeight: "1.2rem", marginTop: "1rem" }}>
                {promo.description}
              </p>
              <a
                href={promo.link}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p
                  style={{
                    color: "white",
                    backgroundColor: "crimson",
                    display: "inline",
                    padding: "0.4rem 1.5rem",
                    borderRadius: "100px",
                    fontWeight: "bold",
                  }}
                  className="text"
                >
                  Visit
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Promotions;
