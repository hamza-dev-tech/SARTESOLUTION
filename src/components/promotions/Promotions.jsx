// src/components/promotions/Promotions.js

"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './promotions.module.css';
import useSWR from 'swr';

// Fetcher function for SWR
const fetcher = (url) => fetch(url).then((res) => res.json());

const Promotions = () => {
  // Use SWR to fetch promotions data
  const { data, error } = useSWR('/api/promotions', fetcher);

  if (error) return <div>Error loading promotions.</div>;
  if (!data) return <div>Loading...</div>;

  const promotions = data.promotions;

  return (
    <aside className={styles.promotionsContainer}>
      <h1 className="title" style={{ marginBottom: '1rem' }}>
        Promotions
      </h1>
      <div className={styles.promotionsList}>
        {promotions.map((promo) => (
          <div key={promo.id} className={styles.promotionItem}>
            {promo.imageUrl && (
              <div className={styles.promotionImageContainer}>
                <Image
                  src={promo.imageUrl}
                  alt={promo.title}
                  layout="fill"
                  objectFit="cover"
                  className={styles.promotionImage}
                />
              </div>
            )}
            <div className={styles.promotionText}>
              <h1
                className="tag"
                style={{ fontSize: '1.2rem', lineHeight: '1.5rem' }}
              >
                {promo.title}
              </h1>
              <p
                className="text"
                style={{ lineHeight: '1.2rem', marginTop: '1rem' }}
              >
                {promo.description}
              </p>
              <a
                href={promo.link}
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p
                  style={{
                    color: 'white',
                    backgroundColor: 'crimson',
                    display: 'inline',
                    padding: '0.4rem 1.5rem',
                    borderRadius: '100px',
                    fontWeight: 'bold',
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
