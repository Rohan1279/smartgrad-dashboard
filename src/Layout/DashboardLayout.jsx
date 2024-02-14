import { Outlet } from "react-router-dom";
import DashboardDrawer from "../Shared/DashboardDrawer/DashboardDrawer";
import Navbar from "../Shared/Navbar/Navbar";
import DashboardBackground from "/assets/images/dashboard/dashboard-background.png";
const DashboardLayout = () => {
  return (
    <div
      // style={{
      //   backgroundImage: `url(${DashboardBackground})`,
      //   backgroundSize: "contain",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center",
      // }}
      className="relative bg-[#e4efff] min-h-screen"
    >
      <Navbar />
      <div className="absolute bottom-0 mmd:bottom-auto z-50 pointer-events-none mmd:pointer-events-auto mmd:fixed flex items-end mmd:items-center justify-center w-full mmd:w-auto  h-screen">
        <DashboardDrawer />
      </div>
      <div className="pt-4 sm:pt-8 h-fit px-4 sm:px-12 grid grid-col-5 mmd:grid-cols-7 justify-items-center  mmd:pb-10 ">
        <div className="col-span-1 w-full "></div>
        <div className="col-span-6 xl:col-span-5 w-full">
          <Outlet />
        </div>
        <div className="col-span-1 w-full"></div>
      </div>
    </div>
  );
};

export default DashboardLayout;
