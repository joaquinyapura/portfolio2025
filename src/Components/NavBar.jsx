import { Link } from "react-router";

export const NavBar = () => {
  return (
    <nav className="w-full p-4 flex justify-center text-white bg-gray-700/10 backdrop-blur-sm   font-bayon  md:text-3xl sticky top-0">
      <ul className="flex gap-6">
        <Link to={"/"}>HOME</Link>
        <Link to={"/contact"}>CONTACT</Link>
        <Link to={"/projects"}>PROJECTS</Link>
        <Link to={"/AboutMe"}>ABOUT ME</Link>
      </ul>
    </nav>
  );
};
