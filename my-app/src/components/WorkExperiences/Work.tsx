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
            timeEnd: "Dec 2024"
        },
        {
            background: "#653366",
            src: "/images/acer.jpeg",
            description: "During my contracted role at the ACER, I had the primary role of extending the automated test suite for the Maple Data entry functionality",
            role: "Test Engineer",
            timeStart: "Jul 2024",
            timeEnd: "Sep 2024"
        },
        {
            background: "linear-gradient(to right, #4A9F36, #2972A4)",
            src: "/images/wehi.png",
            description: "I worked as Research Software Engineer in the Brain Cancer Department, helping researchers patch up their R software package after 2 years of inactivity.",
            role: "Research Software Engineer",
            timeStart: "Nov 2023",
            timeEnd: "Feb 2024"
        }
    ]
    return (
        <div>
            <div className = "w-full flex pb-8 ">
                <h1>Work Experiences</h1>
            </div>
            <div className = "grid grid-cols-3 flex justify-center items-center gap-y-[100px] gap-x-[50px]">
                {experiences.map(({background, src, description, role, timeStart, timeEnd}, index) => (
                    <div key = {index} className = "w-full flex justify-center items-center">
                        <WorkCard background = {background} src = {src} description = {description} role = {role} timeStart = {timeStart} timeEnd = {timeEnd}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work;