
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage/HomePage";
import WhatIDo from "@/components/Me/WhatIDo";
import Work from "@/components/WorkExperiences/Work";
import SkillPage from "@/components/Skills/SkillPage";

export default function Home() {
  return (
    <div className = "relative w-full">
      <div className = "hidden sm:block">
        <Background />
      </div>
      <main className = "md:mx-[100px] sm:mx-[30px] mx-[10px] ">
        <Navbar/>
        <section id = "home">
          <HomePage/>
          <WhatIDo/>
        </section>
        <section id = "work" className = "relative z-1">
          <Work />
        </section>
        <section id = "skills" className = "relative z-1 mt-[300px]">
          <SkillPage/>
        </section>
      </main>
    </div>
  );
}
