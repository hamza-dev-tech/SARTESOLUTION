"use client"
import React from "react";
import "./Services.css";
import { motion } from "framer-motion";
import { desVaraints, tagVaraints, titleVaraints } from "@/src/utils/animation";

const columnVariants = {
  hiddenTop: { opacity: 0, y: -100 },
  hiddenBottom: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};
const imageVariants1and3 = {
  hidden: { opacity: 0, scale: 0.8, rotate: -45 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
};

const imageVariants2 = {
  hidden: { opacity: 0, scale: 0.8, rotate: 45 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
};


const Services = () => {
  return (
    <div className="os-wrapper">
      <div className="container">
        <div className="os-container">
          <div className="os-head">
            <motion.h1 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVaraints}
            className="tag">Our services</motion.h1>
            <motion.h1 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVaraints}
            className="title">
              Design digital products
            </motion.h1>
            <motion.h2 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVaraints}
            className="description">
              Here is what we do
            </motion.h2>
          </div>
          <div className="os-table">
          <motion.div
              className="table-col"
              initial="hiddenTop"
              whileInView="visible"
              variants={columnVariants}
              transition={{ duration: 0.5, }}
            >
              <h1 className="sec-title">Discover</h1>
              <h1 className="title">Strategy</h1>
              <h2 className="text">Product auditing</h2>
              <h2 className="text">Business and data analysis</h2>
              <h2 className="text">Segmentation and personas</h2>
              <h2 className="text">User research</h2>
              <h1 className="sec-title">Operations</h1>
              <h2 className="text">Product management</h2>
              <h2 className="text">Project management</h2>
              <h1 className="sec-title">Marketing</h1>
              <h2 className="text">Content Marketing</h2>
              <h2 className="text">Social Media Marketing</h2>
              <h2 className="text">Email Marketing</h2>
              <h2 className="text">SEO/SEM</h2>
              <h2 className="text">Digital Marketing</h2>
            </motion.div>
            <motion.div
              className="table-col"
              initial="hiddenBottom"
              whileInView="visible"
              variants={columnVariants}
              transition={{ duration: 0.5, delay:0.5 }}
            >
              <h1 className="title">Design</h1>
              <h1 className="sec-title">Interface</h1>
              <h2 className="text">User experience strategy</h2>
              <h2 className="text">User experience design</h2>
              <h2 className="text">User interface design</h2>
              <h2 className="text">Design systems</h2>
              <h2 className="text">User testing</h2>
              <h1 className="sec-title">Brand</h1>
              <h2 className="text">Brand strategy</h2>
              <h2 className="text">Brand identity</h2>
              <h2 className="text">Logo design</h2>
              <h2 className="text">Brand guidelines</h2>
              <h1 className="sec-title">Multimedia</h1>
              <h2 className="text">Illustration</h2>
              <h2 className="text">Video and motion design</h2>
            </motion.div>
            <motion.div
              className="table-col"
              initial="hiddenTop"
              whileInView="visible"
              variants={columnVariants}
              transition={{ duration: 0.5, delay:1 }}
            >
              <h1 className="title">Development</h1>
              <h1 className="sec-title">Front-end</h1>
              <h2 className="text">React</h2>
              <h2 className="text">NextJS</h2>
              <h2 className="text">React Native</h2>
              <h2 className="text">Kotlin</h2>
              <h2 className="text">Vue</h2>
              <h2 className="text">CMS</h2>
              <h1 className="sec-title">Back-end</h1>
              <h2 className="text">Node</h2>
              <h2 className="text">Python</h2>
              <h2 className="text">PHP</h2>
              <h1 className="sec-title">DevOps</h1>
              <h2 className="text">Hosting and maintenance</h2>
              <h2 className="text">Infrastructure setup</h2>
            </motion.div>
          </div>
          <motion.div  initial="hiddenTop"
              whileInView="visible"
              variants={columnVariants}
              transition={{ duration: 1 }} className="os-images">
            <motion.img
              src="https://cdn-icons-png.flaticon.com/512/8164/8164154.png"
              alt="Strategy"
              className="os-image"
              initial="hidden"
              whileInView="visible"
              variants={imageVariants1and3}
              transition={{ duration: 1,delay:1 }}
            />
            <motion.img
              src="https://cdn-icons-png.freepik.com/512/6214/6214112.png"
              alt="Design"
              className="os-image"
              initial="hidden"
              whileInView="visible"
              variants={imageVariants2}
              transition={{  duration: 1,delay:1 }}
            />
            <motion.img
              src="https://cdn-icons-png.flaticon.com/512/2620/2620686.png"
              alt="Development"
              className="os-image"
              initial="hidden"
              whileInView="visible"
              variants={imageVariants1and3}
              transition={{  duration: 1,delay:1 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
