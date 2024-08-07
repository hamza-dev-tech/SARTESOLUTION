"use client"
import React from "react";
import "./HowItWorks.css";
import { motion } from "framer-motion";
import { features, hitFeatures } from "@/src/utils/data";
import { tagVaraints, titleVaraints } from "@/src/utils/animation";
import Image from "next/image";

const HowItWorks = () => {
    const featureVaraints= {
        offscreen:{
            scale:0.5,
        },
        onscreen: {
            scale: 1,
            transition: {
                type:"spring",
                duration: 1.5,
            },
        },
    }
  return (
    <div className="hit-wrapper">
      <div className="container">
        <div className="hit-container">
          {/* Head */}
          <div className="hit-head">
            <motion.h1
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVaraints}
              className="tag"
            >
              How Sarte Solution works
            </motion.h1>
            <motion.h2
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVaraints}
              className="title"
            >
              Unlocking potential along the growth journey
            </motion.h2>
          </div>
          <div className="hit-features">
            {hitFeatures.map((feature, i) => (
              <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={featureVaraints}
              key={i} className="hit-feature">
                <motion.div
                initial={{opacity:0, x:-100}}
                whileInView={{
                    opacity:1,
                    x:0,
                    transition: {
                        type:"easeIn",
                        duration:1,
                        delay:.7,
                    }
                }}
                className="detail">
                  <span className="des">0{i + 1}</span>
                  <h1 className="sec-title">{feature.title}</h1>
                  <h3 className="text" style={{padding:0, margin:0, fontWeight:400}}>{feature.des}</h3>
                </motion.div>
                <div className="icon">
                  <Image
                    alt="icon"
                    src={feature.icon}
                    width={128}
                    height={128}
                    style={{ translate: "50% 0rem" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
