
"use client"

import { motion } from "framer-motion";
import React from "react";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "JoyDrobe",
    description: "A Retail Software Startup started as a way to help users style potential outfits for specific settings by using LLMs and Generative AI. ",
    link: "https://joydrobe-webfront.vercel.app",
    src: "/icons/logo-black.jpg"
  },
  {
    title: "Lume Health",
    description: "As part of my freelancing, I created a website for an NDIS Physiotherapy and Occupational therapy service, helping them enhance their online presence and integrating a new booking system with Google suite and email.",
    link: "https://www.lumehealth.com.au/",
    src: "/icons/lume.png"
  },
  {
    title: "EcoLens",
    description: "Hackathon Project which allows users to take pictures of objects they want to dispose of and gives tailored recycling advice about how to recycle the individual parts of the item. Integrated with google maps to find nearby recycling centers.",
    link: "https://devpost.com/software/ecosnap-85ibmo",
    src: "/icons/ecolens.jpg"
  },
  {
    title: "CNN",
    description: "Built an Autoencoder and CNN variant models to match images based on similarity on a dataset of around 3000 images. Wrote a research paper about different approaches, methods and results.",
    link: "https://github.com/zimop/CNN-Image-Matching",
    src: "/icons/cnn.png"
  },
  {
    title: "Interactive Whiteboard ",
    description: "Interactive Whiteboard application built with Java RMI that allows multiple users to draw on the same whiteboard simultaneously using a server-client architecture. Chat Functionality Supported",
    link: "https://github.com/zimop/InteractiveWhiteboard",
    src: "/icons/whiteboard.png"
  },
];

const ProjectLayout = () => {
  return (
    <motion.div
          initial={{ opacity: 0, y: 50 }} // Start invisible and slightly below
          whileInView={{ opacity: 1, y: 0 }} // Fade in & move up when in view
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
          transition={{ duration: 1.2, ease: "easeOut" }} // Smooth effect
          >
      <div className = "w-full">
          <h1 className="text-3xl font-bold mb-6">Projects</h1>
              <div className = "w-full flex flex-col gap-4">
                {projects.map((project, index) => (
                    <ProjectItem key={index} {...project} />
                ))}
              </div>
      </div>
    </motion.div>
  );
};

export default ProjectLayout;
