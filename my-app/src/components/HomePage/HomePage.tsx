import TypistComponent from "@/components/TypistComponent";

const HomePage: React.FC = () => {
    return (
        <div className = "flex justify-center items-center w-full h-screen">
          <div className = "relative z-1 flex flex-col justify-center items-center">
            <h1 className = "name">Zimo Peng</h1>
            <h2 className = "subheading pt-3">
              Full Stack Developer who likes building stuff with
              <br/>
              <div className = "pt-3">
                <TypistComponent/>
              </div>
            </h2>
            <div className="pt-8 grid grid-cols-2 gap-5 pb-8">
              <a href="https://www.linkedin.com/in/zimo-peng-software" target="_blank" rel="noopener noreferrer">
                <img
                  src="/icons/linkedin.png"
                  width="50px"
                  height="50px"
                  alt="LinkedIn"
                />
              </a>
              <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                <img
                  src="/icons/github.png"
                  width="50px"
                  height="50px"
                  alt="GitHub"
                />
              </a>
            </div>
          </div>
        </div>
    )
}

export default HomePage;