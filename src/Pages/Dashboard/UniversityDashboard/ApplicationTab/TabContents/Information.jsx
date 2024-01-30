import React from "react";
import DashboardAvatar from "/assets/images/dashboard/dashboard-avatar.png";

const Information = () => {
  return (
    <div className="grid grid-cols-1 mmd:grid-cols-2 pl-5  gap-y-8">
      <div className="order-2 mmd:order-1 grid grid-cols-1  sm:grid-cols-2 leading-[33px]">
        <h2 className="font-bold">Name</h2>
        <p>Atif Rahman</p>
        <h2 className="font-bold">Date of Birth</h2>
        <p>31st December 1993</p>
        <h2 className="font-bold">Nationality</h2>
        <p>Bangladesh</p>
        <h2 className="font-bold">Educational Background</h2>
        <p>Computer Science Engineering</p>
      </div>
      <div className="order-1 mmd:order-2">
        <img src={DashboardAvatar} alt="avatar" className="w-40 mx-auto" />
      </div>
    </div>
  );
};

export default Information;
