import { Outlet } from "react-router-dom";
import { NavBar } from "../Components/Header/NavBar/NavBar";

export const MainLayout = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};
