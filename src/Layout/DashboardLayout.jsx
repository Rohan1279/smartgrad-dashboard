import { Authcontext } from "@/contexts/AuthContextProvider";
import { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashboardDrawer from "../Shared/DashboardDrawer/DashboardDrawer";
import Navbar from "../Shared/Navbar/Navbar";
const DashboardLayout = () => {
  const location = useLocation();
  const { user } = useContext(Authcontext);
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://mediafiles.botpress.cloud/f7ddd465-a5d3-4bea-85b4-dd1d1d48882e/webchat/config.js";
    if (user) {
      document.body.appendChild(script);
    }
  }, [user]);

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
      <div className="mmd:py-6 sm:px-12 grid grid-col-5 mmd:grid-cols-9 justify-items-center">
        <div className="col-span-1 w-full"></div>
        <div className="col-span-6 mmd:col-span-7 w-full max-w-7xl">
          <Outlet />
        </div>
        <div className="col-span-1 w-full"></div>
      </div>
    </div>
  );
};

export default DashboardLayout;
