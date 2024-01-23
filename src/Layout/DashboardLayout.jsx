import { Outlet } from "react-router-dom";
import DashboardDrawer from "../Shared/DashboardDrawer/DashboardDrawer";
import Navbar from "../Shared/Navbar/Navbar";
import DashboardAvatar from "/assets/images/dashboard/dashboard-avatar.png";

const DashboardLayout = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="absolute left-0 top-1/2">
        <DashboardDrawer />
      </div>
      <div className="pt-20 min-h-[100svh]   px-12 grid grid-cols-6 justify-items-center ">
        <div className="col-span-1 w-full ">
          <img src={DashboardAvatar} alt="avatar" className="w-52 mt-6" />
        </div>
        <div className="col-span-4  ">
          <Outlet />
        </div>
        <div className="col-span-1 w-full"></div>
      </div>
    </div>
  );
};

export default DashboardLayout;
