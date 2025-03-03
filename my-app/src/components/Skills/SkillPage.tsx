
import Marquee from "react-fast-marquee";
import Skill from "./Skill";
const SkillPage: React.FC = () => {
    const skills = [
        {name: "React", src: "/images/atom.png"},
        {name: "Next", src: "/images/next.png"},
        {name: "Github", src: "/images/github.png"},
        {name: "AWS", src: "/images/aws.png"},
        {name: "Javascript", src: "/images/js.png"},
        {name: "Typescript", src: "/images/Typescript.png"},
        {name: "Java", src: "/images/java.png"},
        {name: "C", src: "/images/c.png"},
        {name: "C#", src: "/images/csharp.svg"},
        {name: "Python", src: "/images/python.png"},
        {name: "Tailwind", src: "/images/tailwind.png"},
        {name: "Selenium", src: "/images/selenium.png"},
    ]
    return (
        <div className = "w-full">
            <h1 className = "pb-[50px]">Skills</h1>
            <Marquee>
                <div className = "flex flex-row grid-rows-12 gap-x-[35px]">
                    {skills.map(({name, src}, idx) => (
                        <Skill key={idx} skill = {name} src = {src}/>
                    ))}
                </div>
            </Marquee>
        </div>
    )
}

export default SkillPage;