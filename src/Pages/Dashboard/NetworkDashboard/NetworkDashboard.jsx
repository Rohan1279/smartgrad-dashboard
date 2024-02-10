import React, { useContext } from "react";
import DashboardAvatar from "/assets/images/dashboard/dashboard-avatar.png";
import { Authcontext } from "@/contexts/AuthContextProvider";

const NetworkDashboard = () => {
  const { user } = useContext(Authcontext);

  return (
    <div className="text-[#4B4E6D] ">
      <div className="flex flex-col justify-center md:flex-row md:justify-start items-center space-x-2 sm:space-x-12">
        <img src={DashboardAvatar} alt="avatar" className="w-40" />

        <div className="text-center md:text-left">
          <h1 className="text-[40px] font-bold ">Hello {user?.name},</h1>
          <p className="pt-2">
            Network with the best in the industry. Book a session now to get
            expert guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NetworkDashboard;
