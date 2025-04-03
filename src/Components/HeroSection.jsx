import foto from "../assets/img/3.png";
import { logos } from "../assets/data/logos";
import github from "../assets/github.svg";

export const HeroSection = () => {
  return (
    <div className="flex justify-between container">
      <div className="flex flex-col w-full justify-center items-center text-center md:items-end  font-bayon md:text-right ">
        <h1 className="md:text-[80px] text-3xl w-full   ">
          JOAQUIN BATALLANES
        </h1>
        <h1 className="md:text-[73px]  text-3xl w-full  text-azul">
          FRONT END DEVELOPER
        </h1>
        <p className="font-roboto md:w-[600px] md:text-base text-sm ">
          I'm a multimedia design graduate, improving my front-end skills. Join
          me and let's explore together!
        </p>
        <div className=" md:w-[580px] w-[300px] overflow-hidden flex mask-fade">
          {/* el infinite scroll fue modificado en tailwind */}
          <ul className="flex items-center gap-10 animate-infinite-scroll   ">
            {[...logos, ...logos].map((logo, index) => (
              <li key={index} className="w-[80px]">
                <img src={logo.url} alt="" srcset="" className="w-[50px]" />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex md:w-[590px] w-[350px] gap-7 justify-center font-roboto mt-4 md:text-base text-sm">
          <a
            href="#"
            className="bg-white text-black p-2 w-[45%] flex items-center justify-center gap-2 rounded-full"
          >
            <span>
              <img src={github} className="w-[20px]" alt="github logo" />
            </span>
            Github
          </a>
          <a href="#" className="bg-azul p-2 w-[45%] text-center rounded-full">
            Download my resume
          </a>
        </div>
      </div>
      <div className="w-[1000px] hidden md:block">
        <img src={foto} alt=" foto del diseñador" />
      </div>
    </div>
  );
};
