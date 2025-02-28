import Image from "next/image"
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
        },
        {
            src:"/images/vercel.svg", 
            name:"Vercel"
        },]
    const summary = ["Develop modern Front end's for your web applications", "Engineer scalable and resilient backend API services", "Leverage cloud native solutions with expertise in AWS services", "Build robust automation pipelines for CI/CD"]
    return (
        <div className = "grid grid-cols-2 relative z-1 pb-[150px]">
            <div className = "">
                <h1 className = "">What I do</h1> 
                <div className = "text-gray-400 text-[25px]">
                    A passionate Full Stack Engineer with an eye for finding high-impact work within projects and teams. 
                </div>
                <div className = "grid grid-cols-7 grid-rows-2 pt-7">
                    {languages.map((language, idx) => (
                        <div key = {idx}>
                            <div className = "w-full h-full flex justify-center items-center">
                                <div>
                                    <Image
                                        src = {language.src}
                                        alt = {"picture"}
                                        width = {50}
                                        height = {50}>
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
                            <span className = "text-[23px] text-gray-500">{sentence}</span>
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
            <div className = "w-full flex justify-center items-center">
               
            </div>
        </div>
    )
}

export default WhatIDo