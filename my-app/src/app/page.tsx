
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage/HomePage";
import WhatIDo from "@/components/Me/WhatIDo";
import Hobbies from "@/components/Hobbies/Hobbies";

export default function Home() {
  return (
    <div className = "relative w-full h-screen ">
      <main>
        <Background />
        <Navbar/>
        <section id = "home">
          <HomePage/>
          <WhatIDo/>
        </section>
        <section id = "work" className = "pt-10">
          <Hobbies/>
        </section>
      </main>
    </div>
  );
}
