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
                    "Implemented secure authentication with NextAuth to ensure data safety and authorization.",
                    "Product Owner responsibilities, translating technical concepts, user story generation and leading client meetings."],
            images: ["/images/js.png", "/images/Next.png", "/images/vercel.svg"]
        },
        {
            background: "#653366",
            src: "/images/acer.jpeg",
            description: "During my contracted role at the ACER, I had the primary role of extending the automated test suite for the Maple Data entry functionality",
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
            description: "I worked as Research Software Engineer in the Brain Cancer Department, helping researchers patch up their R software package after 2 years of inactivity.",
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
        <div>
            <div className = "w-full flex pb-8 ">
                <h1>Work Experiences</h1>
            </div>
            <div className = "grid grid-cols-3 flex justify-center items-center gap-y-[100px] gap-x-[50px]">
                {experiences.map(({background, src, description, role, timeStart, timeEnd, points, images}, index) => (
                    <div key = {index} className = "w-full flex justify-center items-center">
                        <WorkCard background = {background} src = {src} description = {description} role = {role} timeStart = {timeStart} timeEnd = {timeEnd} points = {points} images = {images}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work;