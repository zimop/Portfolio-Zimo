import '../../styles/flip.css';
import WorkCard from './WorkCard';
const Work: React.FC = () => {
    const experiences = [
        {
            background: "#8039DD",
            src: "/images/kulaa.svg",
            description: "Kulaa",
        },
        {
            background: "#653366",
            src: "/images/acer.jpeg",
            description: "ACER",
        },
        {
            background: "linear-gradient(to right, #4A9F36, #2972A4)",
            src: "/images/wehi.png",
            description: "I worked as Research Software Engineer in the Brain Cancer Department, helping researchers patch up their R software package after 2 years of inactivity.",
        }
    ]
    return (
        <div>
            <div className = "w-full flex pb-8 ">
                <h1>Work Experiences</h1>
            </div>
            <div className = "grid grid-cols-3 flex justify-center items-center gap-y-[100px]">
                {experiences.map(({background, src, description}, index) => (
                    <div key = {index} className = "w-full flex justify-center items-center">
                        <WorkCard background = {background} src = {src} description = {description}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work;