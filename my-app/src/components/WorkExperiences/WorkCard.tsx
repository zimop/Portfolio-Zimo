"use client"
import Image from 'next/image';
import '../../styles/flip.css';
import { useEffect, useState, useRef } from "react";

interface CardProps {
    background: string;
    src: string;
    description: string;
    role: string;
    timeStart: string;
    timeEnd: string;
  }
const WorkCard: React.FC<CardProps> = ({background, src, description, role, timeEnd, timeStart}) => {
    const parentRef = useRef<HTMLDivElement | null>(null);
    const [translateY, setTranslateY] = useState(0);
    //const workplaces = ["/images/kulaa.jpeg", "images/acer.jpeg", "images/wehi.png"]

    useEffect(() => {
        if (parentRef.current) {
          const parentHeight = parentRef.current.offsetHeight;
          setTranslateY(parentHeight / 2);
        }
      }, []);

    return (
        <div className ="w-[500px] h-[600px] shadow-lg grid grid-rows-2 grid-rows-[0.30fr_0.70fr] rounded-lg">
            <div ref = {parentRef} 
                className = {`w-full h-full rounded-lg flex justify-center items-center`}
                style={
                    background.startsWith("linear-gradient") 
                        ? { backgroundImage: background } // Apply as a gradient
                        : { backgroundColor: background } // Apply as a solid color
                }>
                <div 
                    className = "w-[150px] h-[150px] rounded-full shadow-lg bg-white"
                    style={{ transform: `translateY(${translateY}px)` }}
                >
                    <Image
                        src = {src}
                        alt = "company"
                        fill
                        className = "object-contain rounded-full"
                        />
                </div>
            </div>
            <div className = "w-full h-full grid grid-rows-[0.22fr_0.30fr_0.42fr_0.1fr]">
                <span className = "h-full w-full" />
                <div className = "h-full w-full flex flex-col items-center">
                    <h2>{role}</h2>
                    <span className = "text-lg font-semibold">{timeStart} - {timeEnd}</span>
                </div>
                <div className = "px-8 h-full w-full">
                    <h3 className = "text-gray-500">{description}</h3>
                </div>
                <div className = "w-full h-full rounded-lg flex justify-center items-center">
                    <button className = "w-[80%] border-gray-200 border-2 rounded-lg">
                        More Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WorkCard;