import { Authcontext } from "@/contexts/AuthContextProvider";
import React, { useContext } from "react";
import DashboardAvatar from "/assets/images/dashboard/dashboard-avatar.png";
import { Link } from "react-router-dom";
import ComingSoon from "@/components/ComingSoon/ComingSoon";
const CareerDashboard = () => {
  const { user } = useContext(Authcontext);

  return (
    <div className="text-[#4B4E6D] ">
      <div className="hidden mmd:flex flex-col justify-center md:flex-row md:justify-start items-center space-x-[34px] shadow-md bg-white rounded-[20px] pl-[34px] py-[24px]">
        <img src={DashboardAvatar} alt="avatar" className="w-[88px]" />

        <div className="text-center md:text-left">
          <h1 className="text-[40px] font-bold ">Hello {user?.name},</h1>
          <p className="">
            Level up your career with our AI tailored career path.
          </p>
        </div>
      </div>
      <ComingSoon />
    </div>
  );
};

export default CareerDashboard;
