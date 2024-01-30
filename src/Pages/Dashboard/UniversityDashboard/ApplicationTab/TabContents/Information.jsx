import React from "react";
import DashboardAvatar from "/assets/images/dashboard/dashboard-avatar.png";

const Information = () => {
  return (
    <div className="grid grid-cols-3 pl-5">
      <div className="leading-[33px]">
        <h2 className="font-bold">Name</h2>
        <h2 className="font-bold">Date of Birth</h2>
        <h2 className="font-bold">Nationality</h2>
        <h2 className="font-bold">Educational Background</h2>
      </div>
      <div className="leading-[33px]">
        <p>Atif Rahman</p>
        <p>31st December 1993</p>
        <p>Bangladesh</p>
        <p>Computer Science Engineering</p>
      </div>
      <div className="">
        <img src={DashboardAvatar} alt="avatar" className="w-40 mx-auto" />
      </div>
    </div>
  );
};

export default Information;
