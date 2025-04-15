import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

export const Contact = () => {
  return (
    <div className="container flex flex-col  items-center mx-auto mt-10">
      <div className="w-[350px] mt-2">
        <h1 className="text-6xl text-sky-500 font-bold">Conectemos!</h1>
        <p className="text-sm text-gray-500">
          podrías escribirme un mensaje mediante este form, o si deseas podemos
          conectar por cualquiera de mis redes
        </p>
      </div>
      <form action="" className=" flex flex-col w-[300px] mt-6 ">
        <input
          type="text"
          placeholder="nombre/empresa"
          className="border-b-1 outline-0 border-sky-200 mb-2"
        />
        <input
          type="text"
          placeholder="correo"
          className="border-b-1 outline-0 border-sky-200 mb-2"
        />
        <textarea
          name="mensaje"
          id=""
          rows="5"
          placeholder="Escriba su mensaje aquí."
          className="border-b-1 outline-0 border-sky-200 mb-2 text-sm"
        ></textarea>
        <button className="bg-sky-500  p-2 rounded-md mt-2">
          Enviar mensaje
        </button>
      </form>
      <ul className="w-[200px]  mt-6 flex flex-col">
        <li className=" gap-2 flex items-center text-center  hover:text-sky-300 transition-all ease-in-out duration-300 mb-4">
          <span>
            <CiLinkedin size={30} />
          </span>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/joaquinbatallanes/"
          >
            joaquinbatallanes
          </a>
        </li>
        <li className=" gap-2 flex items-center text-center  hover:text-sky-300 transition-all ease-in-out duration-300 mb-4">
          <span>
            <FaGithub size={30} />
          </span>
          <a target="_blank" href="https://github.com/joaquinyapura">
            joaquinbatallanes
          </a>
        </li>
        <li className=" gap-2 flex items-center text-center  hover:text-sky-300 transition-all ease-in-out duration-300 mb-4">
          <span>
            <CiMail size={30} />
          </span>
          <p>joaquinyapura@gmai.com</p>
        </li>
      </ul>
    </div>
  );
};
