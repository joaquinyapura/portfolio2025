import { Outlet } from "react-router";
import { NavBar } from "../Components/NavBar";

export const Laout = () => {
  return (
    <div className="w-full min-h-screen bg-black ">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
