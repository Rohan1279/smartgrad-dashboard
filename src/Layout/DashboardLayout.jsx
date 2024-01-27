import { Outlet } from "react-router-dom";
import DashboardDrawer from "../Shared/DashboardDrawer/DashboardDrawer";
import Navbar from "../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="absolute flex items-center justify-center h-screen">
        <DashboardDrawer />
      </div>
      <div className="pt-24 min-h-[100svh]  px-12 grid grid-cols-6 justify-items-center ">
        <div className="col-span-1 w-full "></div>
        <div className="col-span-4  ">
          <Outlet />
        </div>
        <div className="col-span-1 w-full"></div>
      </div>
    </div>
  );
};

export default DashboardLayout;
