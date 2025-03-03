
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage/HomePage";
import WhatIDo from "@/components/Me/WhatIDo";
import Work from "@/components/WorkExperiences/Work";
import ProjectLayout from "@/components/Projects/ProjectLayout";

export default function Home() {
  return (
    <div className = "relative w-full">
      <div className = "hidden sm:block">
        <Background />
      </div>
      <main className=" w-full flex flex-col">
        <Navbar/>
        <section id = "home" >
          <HomePage/>
          <WhatIDo/>
        </section>
        <section id = "work" className = "relative z-1 mt-[300px]">
          <Work />
        </section>
        <section id = "projects" className = "relative z-1 mt-[250px]">
          <ProjectLayout />
        </section>
      </main>
    </div>
  );
}
