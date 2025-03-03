import React from "react";

interface ProjectItemProps {
  title: string;
  description: string;
  link: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, link }) => {
  return (
    <div className = "flex md:flex-row flex-col py-[50px] w-full md:justify-start justify-center md:items-start items-center">
        <div className = " md:pl-[0px]">
            <div className="w-[300px] h-[300px] bg-gray-200"></div>
        </div>
        
        <div className="w-full flex flex-col pt-[30px] md:pt-[0px] md:pl-[30px] md:justify-start justify-center md:items-start items-center">
            <span className="project-name">{title}</span>
            <div className = "w-full md:block hidden text-gray-400 project-description">{description}</div>
        </div>
    </div>

  );
};

export default ProjectItem;
