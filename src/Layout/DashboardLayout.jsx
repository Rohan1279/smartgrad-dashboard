import { Outlet } from "react-router-dom";
import DashboardDrawer from "../Shared/DashboardDrawer/DashboardDrawer";
import Navbar from "../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div className="relative bg-[#DDEBFF]">
      <Navbar />
      <div className="fixed bottom-0 mmd:bottom-auto z-50 pointer-events-none mmd:pointer-events-auto mmd:absolute flex items-end mmd:items-center justify-center w-full mmd:w-auto  h-screen">
        <DashboardDrawer />
      </div>
      <div className="pt-4 sm:pt-8 min-h-[100svh] px-4 sm:px-12 grid grid-col-5 mmd:grid-cols-7 justify-items-center pb-16 mmd:pb-10">
        <div className="col-span-1 w-full "></div>
        <div className="col-span-6 xl:col-span-5">
          <Outlet />
        </div>
        <div className="col-span-1 w-full"></div>
      </div>
    </div>
  );
};

export default DashboardLayout;
