/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import "./Hero.css";
import EmailBox from "../EmailBox/EmailBox";
import { HeroData } from "@/src/utils/data";
import {  motion } from "framer-motion";
const Hero = ({title1, title2, des}) => {
  const variants = (delay) => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        damping: 25,
        duration: 2.5,
        delay,
      },
    },
  });

  const imgVariants = () => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        duration: 2,
        stiffness: 30,
      },
    },
  });

  return (
    <div className="h-wrapper">
      <div className="container">

        <img src="hero/hero-arrow.png" alt="arrow" className="h-arrow" />

        <div className="h-container">
          {/* left side */}
          <div className="h-left">
            <div className="image-row">
              {HeroData.slice(0, 3).map((person, i) => (
                <div className="person-pill" key={i}>
                  <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{ backgroundColor: person.bg }}
                    className="person-pill-bg"
                  >
                    <motion.img
                      initial={"initial"}
                      animate={"animate"}
                      variants={imgVariants()}
                      src={person.src}
                      alt={person.alt}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
            <div className="image-row">
              {HeroData.slice(3, 6).map((person, i) => (
                <div className="person-pill" key={i}>
                  <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{ backgroundColor: person.bg }}
                    className="person-pill-bg"
                  >
                    <motion.img
                      initial={"initial"}
                      animate={"animate"}
                      variants={imgVariants()}
                      src={person.src}
                      alt={`Image of ${person.src}`}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          {/* right side */}
          <div className="h-right" style={{marginTop:"2rem"}}>
            <div className="h-title">
              <h1>{title1}</h1>
              {title2 && 
              <h1 style={{color:'var(--secondary-color)', margin:0, padding:0,paddingTop:'3rem', paddingBottom:'2rem'}}>{title2}</h1>
}
            </div>
            <div className="h-des">
              <h2 >

           {des}
              </h2>
            </div>
            <div className="h-des">
            <h3 style={{color:"wheat", textJustify:"auto", fontSize:'1rem', fontWeight:'400', lineHeight:'2rem'}}>Subscribe to our newsletter for the latest updates and insights.</h3>
            </div>
            <EmailBox />
          </div>
        </div>
      </div>
    </div>
  );
};




export default Hero;
