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
    points: string[];
    images: string[];
  }
const WorkCard: React.FC<CardProps> = ({background, src, description, role, timeEnd, timeStart, points, images}) => {
    const parentRef = useRef<HTMLDivElement | null>(null);
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [translateY, setTranslateY] = useState(0);
    //const workplaces = ["/images/kulaa.jpeg", "images/acer.jpeg", "images/wehi.png"]
    const handleOnClick = () => {
        setOverlayVisible(!isOverlayVisible); // Make the overlay visible
    };

    useEffect(() => {
        if (parentRef.current) {
          const parentHeight = parentRef.current.offsetHeight;
          setTranslateY(parentHeight / 2);
        }
      }, []);

    return (
        <div className ="w-[500px] h-[600px] shadow-lg grid grid-rows-2 grid-rows-[0.30fr_0.70fr] rounded-lg">
            <div ref = {parentRef} 
                className = {`w-full h-full rounded-lg flex flex-col justify-center items-center`}
                style={
                    background.startsWith("linear-gradient") 
                        ? { backgroundImage: background } // Apply as a gradient
                        : { backgroundColor: background } // Apply as a solid color
                }>
                    <div 
                        className={`grid grid-cols-3 h-full w-full pt-[15px] transition-opacity duration-500 ease-in-out ${
                        isOverlayVisible ? "opacity-100 " : "opacity-0"
                        }`}
                    >
                        {images.map((image, idx) => (
                        <div key={idx} className="w-full h-[30%] relative flex justify-center">
                            <div className="relative h-full aspect-[1/1]">
                            <Image
                                src={image}
                                alt="company"
                                layout="fill"
                                className="object-contain"
                            />
                            </div>
                        </div>
                        ))}
                    </div>
                <div 
                    className = "absolute w-[150px] h-[150px] rounded-full shadow-lg bg-white z-3"
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
            <div className = "w-full h-full grid grid-rows-[0.22fr_0.78fr] container relative">
                <span className = "h-full w-full" />
                <div className = "w-full h-full grid grid-rows-[0.38fr_0.47fr_0.15fr]">
                    <div className = "h-full w-full flex flex-col items-center">
                        <h2>{role}</h2>
                        <span className = "text-lg font-semibold text-black">{timeStart} - {timeEnd}</span>
                    </div>
                    <div className = "px-8 h-full w-full">
                        <h3 className = "text-gray-500">{description}</h3>
                    </div>
                    <div className = "w-full h-full rounded-lg flex justify-center items-center">
                        <button 
                            className = "w-[95%] h-[70%] border-gray-200 border-2 rounded-lg text-black hover:bg-gray-200 font-semibold z-3"
                            onClick = {handleOnClick}>
                            {isOverlayVisible ? "Close " : "More Details"} 
                        </button>
                    </div>
                </div>
                <div
                    className={`absolute bottom-0 left-0 w-full bg-white text-black rounded-lg z-2 transition-all duration-800 transform ${
                        isOverlayVisible
                        ? 'h-full opacity-100 scale-y-100'
                        : 'h-0 opacity-0 scale-y-0'
                    }`}
                    >
                    <div className = "w-full h-full grid grid-rows-[0.12fr_0.88fr] px-[30px]">
                        <span></span>
                        <div>
                           <div className = "h-full w-full flex flex-col justify-start gap-y-2">
                                <span className = "text-xl font-semibold pb-3">Duties</span>
                                {points.map((point, idx) => (
                                    <span key = {idx} className = "text-base font-semibold text-gray-500">
                                        - {point}
                                    </span>
                                ))}
                            </div> 
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkCard;