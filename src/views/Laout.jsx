import { Outlet } from "react-router-dom";
import { NavBar } from "../Components/NavBar";

export const Laout = () => {
  return (
    <div className="w-full h-screen bg-black ">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <div className="w-full p-2 bg-amber-300">foot</div>;
    </div>
  );
};
