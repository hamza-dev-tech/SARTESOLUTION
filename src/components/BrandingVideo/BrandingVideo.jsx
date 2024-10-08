"use client"

import React, { useRef } from "react";
import "./BrandingVideo.css";
import { HeroData } from "@/src/utils/data";
import { motion, useScroll, useTransform } from "framer-motion";
const BrandingVideo = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 2], [0.6, 2]);

  return (
    <div className="bv-container">
      <div className="container">
        <motion.video className="bv-video" loop muted autoPlay controls="" style={{scale}}>
          <source src="/sarte-solution-welcome-video.mp4" type="video/mp4" />
        </motion.video>
      </div>
    </div>
  );
};

export default BrandingVideo;
