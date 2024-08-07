"use client"
import React from "react";
import SlickSlider from "./SlickSlider";
import "./Testimonials.css";
import { motion } from "framer-motion";
import { desVaraints, tagVaraints, titleVaraints } from "@/src/utils/animation";

const Testemonials = () => {
  return (
    <div className="t-wrapper">
      <div className="container">
        <div className="t-container">
          <div className="t-head">
            <motion.h1
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVaraints}
              className="tag"
            >
              Testimonials
            </motion.h1>
            <motion.h2
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVaraints}
              className="title"
            >
              Client Success, Our Commitment
            </motion.h2>
            <motion.h2
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVaraints}
              className="des"
            >
              What people say about Sarte Solution
            </motion.h2>
          </div>
        </div>
        <SlickSlider />
      </div>
    </div>
  );
};

export default Testemonials;
