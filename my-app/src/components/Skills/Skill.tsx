import Image from "next/image"

interface SkillProps {
    skill : string;
    src : string;
  }

const Skill: React.FC<SkillProps> = ({skill, src}) => {
    return (
        <div className = "grid grid-rows-2">
            <Image 
                src = {src}
                alt = "name"
                width = {70}
                height = {70}/>
            <span className = "w-full flex justify-center items-center text-gray-500 text-[20px]">{skill}</span>
        </div>
    )
}

export default Skill;