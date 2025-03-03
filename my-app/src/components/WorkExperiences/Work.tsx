
"use client"

import { motion } from "framer-motion";
import '../../styles/flip.css';
import WorkCard from './WorkCard';

const Work: React.FC = () => {
    const experiences = [
        {
            background: "#8039DD",
            src: "/images/kulaa.svg",
            description: "In a team of 6, I built an admin application for a food social media site, serving around 5000 users in Nextjs. ",
            role: "Full-Stack Developer",
            timeStart: "Sep 2024",
            timeEnd: "Dec 2024", 
            points: ["Designed responsive pages with Next.js and Tailwind, optimizing code to cut build time by 1.5s.",
                    "Implemented robust and secure authentication methods with NextAuth and Password Hashing.",
                    "Communicated with the client by translating concepts, defining features and scheduling meetings."],
            images: ["/images/js.png", "/images/Next.png", "/images/vercel.svg"]
        },
        {
            background: "#653366",
            src: "/images/acer.jpeg",
            description: "Contracted role at the ACER where I had the role of extending their automated testing suite for their Maple Site",
            role: "Test Engineer",
            timeStart: "Jul 2024",
            timeEnd: "Sep 2024",
            points: ["Constructed over 300 end-to-end automated tests in Python and Selenium to increase test coverage from 73% to 80%.",
                "Conducted regression testing to ensure new changes did not impact existing functionality.",
                "Partnered with business analysts to document detailed and comprehensive test cases."],
            images: ["/images/python.png", "/images/selenium.png"]
        },
        {
            background: "linear-gradient(to right, #4A9F36, #2972A4)",
            src: "/images/wehi.png",
            description: "Research Software Engineer in the Brain Cancer Division, patching up their R software packages after 2 years of inactivity.",
            role: "Research Software Engineer",
            timeStart: "Nov 2023",
            timeEnd: "Feb 2024",
            points: ["Enhanced a top 10% R package by writing functions, removing dependencies and writing tests to improve its research utility",
                "Documented maintenance process by detailing dependencies and new functionalities giving clear guidance to researchers",
                "Implemented a GitHub CI/CD pipeline to check package standards and errors before production deployment."],
            images: ["/images/R.png", "/images/Bioconductor.png", "/images/github.png"]
        }
    ]
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Start invisible and slightly below
            whileInView={{ opacity: 1, y: 0 }} // Fade in & move up when in view
            viewport={{ once: true, amount: 0.1 }} // Trigger when 20% is visible
            transition={{ duration: 1.2, ease: "easeOut" }} // Smooth effect
            >
            <div className = "w-full flex pb-8 ">
                <h1>Work Experiences</h1>
            </div>
            <div className = "grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 flex justify-center items-center gap-y-[100px] gap-x-[50px]">
                {experiences.map(({background, src, description, role, timeStart, timeEnd, points, images}, index) => (
                    <div key = {index} className = "w-full flex justify-center items-center">
                        <WorkCard background = {background} src = {src} description = {description} role = {role} timeStart = {timeStart} timeEnd = {timeEnd} points = {points} images = {images}/>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Work;