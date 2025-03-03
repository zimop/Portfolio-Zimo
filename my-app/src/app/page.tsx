
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage/HomePage";
import WhatIDo from "@/components/Me/WhatIDo";
import Work from "@/components/WorkExperiences/Work";

export default function Home() {
  return (
    <div className = "relative w-full">
      <div className = "hidden md:block">
        <Background />
      </div>
      <main className = "md:mx-[100px] mx-[30px]">
        <Navbar/>
        <section id = "home">
          <HomePage/>
          <WhatIDo/>
        </section>
        <section id = "work" className = "relative z-1">
          <Work />
        </section>
      </main>
    </div>
  );
}
