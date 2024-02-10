import React, { useContext } from "react";
import DashboardAvatar from "/assets/images/dashboard/dashboard-avatar.png";
import { Authcontext } from "@/contexts/AuthContextProvider";

const AptitudeDashboard = () => {
  const { user } = useContext(Authcontext);

  return (
    <div className="text-[#4B4E6D] ">
      <div className="flex flex-col justify-center md:flex-row md:justify-start items-center space-x-2 sm:space-x-12">
        <img src={DashboardAvatar} alt="avatar" className="w-40" />

        <div className="text-center md:text-left">
          <h1 className="text-[40px] font-bold ">Hello {user?.name},</h1>
          <p className="pt-2">
            Let our AI leverage your chances out there. Hone your skills with
            our courses that best fit your profile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AptitudeDashboard;
