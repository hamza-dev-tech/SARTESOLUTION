"use client"

import React from "react";
import "./Projects.css";
import { tagVaraints, titleVaraints } from "@/src/utils/animation";
import { motion } from "framer-motion";
import ProjectsSlider from "./ProjectsSlider";

import Reviews from "./Reviews";
const Projects = () => {
  return (
    
      <div className="p-wrapper">
        <div className="container">
          <div className="p-container">
            <div className="head">
              <motion.h2
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVaraints}
                className="tag"
                style={{textAlign:'center', paddingBottom:"2rem"}}
              >
                Sarte Solution 
              </motion.h2>
              <motion.h1
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVaraints}
                className="title"
              >
                Development Projects
              </motion.h1>
            </div>
            
          </div>
          <div className="projects">
                <ProjectsSlider />
            </div>
            <div className="reviews">
              <motion.h1
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVaraints}
                className="tag"
                style={{textTransform:'uppercase', }}
              >
                Thoughts
              </motion.h1>
              <Reviews />
            </div>
        </div>
      </div>

  );
};

export default Projects;
