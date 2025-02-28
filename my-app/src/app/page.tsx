import Image from "next/image";

export default function Home() {
  const hexagons = Array.from({ length: 31});
  const rows = Array.from({ length: 13});
  return (
    <div className = "relative w-full h-screen">
      <div className="absolute inset-0 z-0">
        <div className="flex">
          {hexagons.map((_, index) => (
            <div key={index} className="hexagon flex justify-center items-center">
              <div className="hexagon-inner"></div>
            </div>
          ))}
        </div>
        {rows.map((_, i) => (
          <div key = {i}>
            <div className="flex -ml-[calc((100vw/30)/2)] -mt-[calc((100vw/30/0.866/2/2))]">
              {hexagons.map((_, index) => (
                <div key={index} className="hexagon flex justify-center items-center">
                  <div className="hexagon-inner"></div>
                </div>
              ))}
            </div>
            <div className="flex -mt-[calc((100vw/30/0.866/2/2))]">
              {hexagons.map((_, index) => (
                <div key={index} className="hexagon flex justify-center items-center">
                  <div className="hexagon-inner"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className = "flex justify-center items-center w-full h-screen">
        <div className = "relative z-1 w-full flex flex-col justify-center items-center">
          <h1 className = "name">Zimo Peng</h1>
          <h2 className = "subheading">
            Full Stack Developer who likes building stuff with
            <br/>
            <div>
              Javascript
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
}
