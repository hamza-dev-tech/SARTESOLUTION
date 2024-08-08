// src/components/promotions/Promotions.js
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from 'next/navigation'
import Image from "next/image";
import styles from "./promotions.module.css";

const Promotions = () => {
  const [promotions, setPromotions] = useState([]);
  const [lastFetched, setLastFetched] = useState(Date.now());
  const router = useRouter();

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const response = await fetch(`/api/promotions?_t=${new Date().getTime()}`);
        const data = await response.json();

        // Check if the promotions have changed
        if (JSON.stringify(promotions) !== JSON.stringify(data.promotions)) {
          setPromotions(data.promotions);
        }
      } catch (error) {
        console.error("Failed to fetch promotions:", error);
      }
    };

    // Initial fetch
    fetchPromotions();

    // Set up a timer to refetch promotions every minute
    const interval = setInterval(() => {
      fetchPromotions();
    }, 10000); // 60,000 milliseconds = 1 minute

    return () => clearInterval(interval);
  }, [promotions]); // Re-run effect when promotions change

  useEffect(() => {
    // Check if there's any update and refresh the page if necessary
    const refreshData = () => {
      const now = Date.now();
      if (now - lastFetched > 60000) {
        // Check if it's been more than 1 minute
        setLastFetched(now);
        router.refresh(); // Refresh the page using router
      }
    };

    refreshData();
  }, [promotions, lastFetched, router]);

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
