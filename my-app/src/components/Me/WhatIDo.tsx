"use client"

import Image from "next/image"
import { motion } from "framer-motion";

const WhatIDo: React.FC = () => {
    const languages = [
        {
            src:"/images/js.png", 
            name:"Javascript"
        },
        {
            src:"/images/java.png", 
            name:"Java"
        },
        {
            src:"/images/aws.png", 
            name:"AWS"
        }, 
        {
            src:"/images/atom.png", 
            name:"React.js"
        },
        {
            src:"/images/node.png", 
            name:"Node.js"
        }, 
        {
            src:"/images/python.png", 
            name:"Python"
        },]
    const summary = ["Develop modern Front end's for your web applications", "Engineer scalable and resilient backend API services", "Leverage cloud native solutions with expertise in AWS services", "Build robust automation pipelines for CI/CD"]
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Start invisible and slightly below
            whileInView={{ opacity: 1, y: 0 }} // Fade in & move up when in view
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
            transition={{ duration: 1.2, ease: "easeOut" }} // Smooth effect
            >
        <div className = "grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2 relative z-1">
            <div className = "">
                <h1 className = "">What I do</h1> 
                <div className = "text-gray-400 md:text-[25px] sm:text-[22px] text-[18px]">
                    A passionate Full Stack Engineer with an eye for finding high-impact work within projects and teams. 
                </div>
                <div className = "grid grid-cols-6 grid-rows-2 pt-7">
                    {languages.map((language, idx) => (
                        <div key = {idx}>
                            <div className = "w-full h-full flex justify-center items-center ">
                                <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex justify-center items-center">
                                    <Image
                                        src = {language.src}
                                        alt = {"picture"}
                                        width = {45}
                                        height = {45}>
                                    </Image>
                                </div>
                            </div>
                            <span className = "w-full flex justify-center items-center text-gray-400">{language.name}</span>
                        </div>
                    ))}
                </div>
                <div className = "grid grid-rows-4">
                    {summary.map((sentence, idx) => (
                        <div key = {idx} className = "grid grid-cols-[0.1fr_1.3fr] flex flex-col justify-center items-center">
                            <Image
                                src = "/icons/blue-thunder.png" 
                                alt = {"bullets"}
                                width = {40}
                                height = {40}/>
                            <span className = "md:text-[23px] sm:text-[20px] text-[15px] text-gray-500">{sentence}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className = "w-full flex justify-center items-center">
               <Image
                src = "/assets/computer.gif"
                alt = {"computer"}
                width={400}
                height={400}
               />
            </div>
        </div>
        </motion.div>
    )
}

export default WhatIDo
