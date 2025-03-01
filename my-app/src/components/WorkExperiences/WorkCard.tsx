"use client"
import Image from 'next/image';
import '../../styles/flip.css';
import { useEffect, useState, useRef } from "react";

interface CardProps {
    background: string;
    src: string;
    description: string;
    extrafrom: string;
    extrato: string;
  }
const WorkCard: React.FC<CardProps> = ({background, src, description, extrafrom, extrato}) => {
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
        <div className ="w-[500px] h-[600px] border-2 grid grid-rows-2 grid-rows-[0.30fr_0.70fr] rounded-lg">
            <div ref = {parentRef} className = {`w-full h-full bg-${background} ${extrafrom} ${extrato} rounded-lg flex justify-center items-center`}>
                <div 
                    className = "w-[150px] h-[150px] rounded-full shadow-lg bg-white"
                    style={{ transform: `translateY(${translateY}px)` }}
                >
                    <Image
                        src = {src}
                        alt = "acer"
                        fill
                        className = "object-contain rounded-full"
                        />
                </div>
            </div>
            <div className = "w-full h-full grid grid-rows-[0.25fr_0.75fr]">
                <span className = "h-full w-full " />
                <div className = "px-8">
                    <h3>{description}</h3>
                </div>
            </div>
        </div>
    )
}

export default WorkCard;