import React from "react";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "JoyDrobe",
    description: "A Retail Software Startup started as a way to help users style potential outfits for specific settings by using LLMs and Generative AI. ",
    link: "#",
  },
  {
    title: "Lume Health",
    description: "As part of my freelancing, I created a website for an NDIS Physiotherapy and Occupational therapy service, helping them enhance their online presence and integrating a new booking system with Google suite and email.",
    link: "#",
  },
  {
    title: "EcoLens",
    description: "Hackathon Project which allows users to take pictures of objects they want to dispose of and gives tailored recycling advice about how to recycle the individual parts of the item. Integrated with google maps to find nearby recycling centers.",
    link: "#",
  },
  {
    title: "CNN",
    description: "Built an Autoencoder and CNN variant models to match images based on similarity on a dataset of around 3000 images. Wrote a research paper about different approaches, methods and results.",
    link: "#",
  },
  {
    title: "Interactive Whiteboard ",
    description: "Interactive Whiteboard application built with Java RMI that allows multiple users to draw on the same whiteboard simultaneously using a server-client architecture. Chat Functionality Supported",
    link: "#",
  },
];

const ProjectLayout = () => {
  return (
    <div className = "w-full">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        <div className = "w-full flex flex-col gap-4">
            {projects.map((project, index) => (
                <ProjectItem key={index} {...project} />
            ))}
        </div>
    </div>
  );
};

export default ProjectLayout;
