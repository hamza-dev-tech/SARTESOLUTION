// src/components/promotions/Promotions.js
"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './promotions.module.css';

const Promotions = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    // Fetch promotions from the API
    const fetchPromotions = async () => {
      try {
        const response = await fetch('/api/promotions');
        const data = await response.json();
        setPromotions(data.promotions);
        console.log(data)
      } catch (error) {
        console.error('Error fetching promotions:', error);
      }
    };

    fetchPromotions();
  }, []);
  return (
    <aside className={styles.promotionsContainer}>
      <h1 className='title' style={{marginBottom:'1rem'}}>Promotions</h1>
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
              <h1 className='tag' style={{fontSize:'1.2rem', lineHeight:'1.5rem'}}>{promo.title}</h1>
              <p className='text' style={{lineHeight:'1.2rem' ,marginTop:'1rem'}}>{promo.description}</p>
          
                <a href={promo.link} style={{color:'white'}} target="_blank" rel="noopener noreferrer">
                  <p style={{color:'white',backgroundColor:' crimson', display:"inline", padding:'0.4rem 1.5rem', borderRadius:'100px', fontWeight:'bold'}}  className='text'>Visit</p>
                </a>
              
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Promotions;
