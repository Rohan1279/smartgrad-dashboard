import { Link, Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[100svh] pt-16">
        <Outlet />
      </div>
    </>
  );
};

export default Main;
