"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface ProjectItemProps {
  title: string;
  description: string;
  link: string;
  src: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, link, src }) => {
  return (
    <motion.div
            initial={{ opacity: 0, y: 50 }} // Start invisible and slightly below
            whileInView={{ opacity: 1, y: 0 }} // Fade in & move up when in view
            viewport={{ once: true, amount: 0.4 }} // Trigger when 20% is visible
            transition={{ duration: 1.2, ease: "easeOut" }} // Smooth effect
            >
    <div className = "flex md:flex-row flex-col py-[50px] w-full justify-center md:items-start items-center relative">
        <div className = " md:pl-[0px] ">
            <div className="w-[250px] h-[250px] bg-white shadow-xl relative p-4 rounded-lg">
                <Image 
                    src = {src}
                    alt = "logo"
                    fill
                    className = "object-contain"/>
            </div>
        </div>
        
        <div className="max-w-[700px] flex flex-col pt-[30px] h-full md:pt-[0px] md:pl-[30px] md:justify-start justify-center md:items-start items-center">
            <span className="project-name">{title}</span>
            <div className = "w-full md:text-start text-center text-gray-400 project-description">{description}</div>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="mt-4 px-6 py-2 button-color text-white font-medium rounded-lg hover:bg-green-600 hover:text-white transition">
                View Project
                </button>
            </a>
        </div>
        
    </div>
    </motion.div>

  );
};

export default ProjectItem;
