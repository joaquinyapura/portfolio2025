import foto from "../assets/img/3.png";
import { logos } from "../assets/data/logos";
import github from "../assets/github.svg";

export const HeroSection = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col w-full justify-center items-end font-bayon text-right ">
        <h1 className="text-[80px] w-full text-right  ">JOAQUIN BATALLANES</h1>
        <h1 className="text-[73px]  w-full text-right text-azul">
          FRONT END DEVELOPER
        </h1>
        <p className="font-roboto w-[600px]">
          I'm a multimedia design graduate, improving my front-end skills. Join
          me and let's explore together!
        </p>
        <div className=" w-[580px] overflow-hidden flex mask-fade">
          {/* el infinite scroll fue modificado en tailwind */}
          <ul className="flex items-center gap-10 animate-infinite-scroll   ">
            {[...logos, ...logos].map((logo, index) => (
              <li key={index} className="w-[80px]">
                <img src={logo.url} alt="" srcset="" className="w-[50px]" />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-[590px] gap-7 justify-center font-roboto mt-4">
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
            download my cv
          </a>
        </div>
      </div>
      <div className="w-[1000px]">
        <img src={foto} alt=" foto del diseñador" />
      </div>
    </div>
  );
};
