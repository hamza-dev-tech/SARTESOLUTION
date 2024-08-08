// src/components/promotions/Promotions.js
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./promotions.module.css";
import axios from "axios";

const Promotions = () => {
  const [promotions, setPromotions] = useState([]);
  const [newPromotion, setNewPromotion] = useState({ title: "", description: "", link: "", imageUrl: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Function to fetch promotions from the API
    const fetchPromotions = async () => {
      try {
        const response = await axios.get("/api/promotions");
        setPromotions(response.data.promotions);
      } catch (error) {
        console.error("Error fetching promotions:", error);
      }
    };

    // Initial fetch and set interval to refresh promotions every 10 seconds
    fetchPromotions();
    const interval = setInterval(fetchPromotions, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Check if the user is authenticated
    // This is a mock check; replace with your actual authentication logic
    const userEmail = "sartesolution@gmail.com"; // You might get this from an auth provider or session
    setIsAuthenticated(userEmail === "sartesolution@gmail.com");
  }, []);

  // Handle input changes for new promotion
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPromotion((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle adding a new promotion
  const handleAddPromotion = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert("You are not authorized to add promotions.");
      return;
    }

    try {
      const response = await axios.post("/api/promotions", newPromotion);
      if (response.status === 201) {
        alert("Promotion added successfully!");
        setPromotions((prevState) => [response.data.promotion, ...prevState]);
        setNewPromotion({ title: "", description: "", link: "", imageUrl: "" });
      }
    } catch (error) {
      console.error("Error adding promotion:", error);
    }
  };

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
              <h1 className="tag" style={{ fontSize: "1.2rem", lineHeight: "1.5rem" }}>
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

      {/* {isAuthenticated && (
        <form onSubmit={handleAddPromotion} className={styles.promotionForm}>
          <h2>Add a New Promotion</h2>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newPromotion.title}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newPromotion.description}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="link"
            placeholder="Link"
            value={newPromotion.link}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={newPromotion.imageUrl}
            onChange={handleInputChange}
          />
          <button type="submit">Add Promotion</button>
        </form>
      )} */}
    </aside>
  );
};

export default Promotions;
