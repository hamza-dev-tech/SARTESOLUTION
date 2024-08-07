"use client"
import React from "react";
import "./OurDiff.css";
import { ourDiffFeatures } from "@/src/utils/data";
import { motion } from "framer-motion";
import { containerVariants, desVaraints, tagVaraints, titleVaraints } from "@/src/utils/animation";
import Image from "next/image";
const OurDiff = () => {
  return (
    <div className="od-wrapper">
      <div className="container">
        <div className="od-container">
          <div className="od-head">
            <motion.h1
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVaraints}
              className="sec-title"

            >
              What Sets Sarte Solution Apart
            </motion.h1>
            <motion.h1
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVaraints}
              className="title"
            >
              Innovative Solutions, High Quality and Reliability
            </motion.h1>
            <motion.h3
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVaraints}
              // className="s-text"
              style={{   color: "var(--text-color)",
                fontSize: "1.1rem",
                lineHeight: "1.8rem",
                textAlign:'center',
                fontWeight:"300"
              }}
            >
              We are dedicated to delivering innovative digital solutions tailored to
              your needs. Our stringent QA process ensures top-notch quality and
              reliability. We prioritize your needs and deliver exceptional
              customer service.
            </motion.h3>
          </div>
          {/* Features */}

          <div className="od-features">
            {ourDiffFeatures.map((feature, i) => (
              <motion.div 
              initial="offscreen"
              whileInView={"onscreen"}
              variants={containerVariants((i+1)*0.5)}
              key={i} className="od-feature">
                <Image
                  src={feature.icon}
                  alt={`${feature.title}`}
                  width={128}
                  height={128}
                />
                <h1 className="sec-title">{feature.title}</h1>
                <h3 className="text" style={{fontWeight:'400'}}>{feature.des}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDiff;
