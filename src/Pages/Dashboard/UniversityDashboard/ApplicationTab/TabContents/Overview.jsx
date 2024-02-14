import React from "react";
import DashboardAvatar from "/assets/images/dashboard/dashboard-avatar.png";
import { CiClock1 } from "react-icons/ci";
const InfoSection = ({ Icon, title, subtitle }) => {
  return (
    <div className="flex items-start text-primary gap-x-2">
      <CiClock1 className="text-2xl" />
      <div>
        <p className="font-extrabold">{title}</p>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

const Overview = () => {
  return (
    <div className="text-primary">
      <div className="grid grid-cols-2  mmd:grid-cols-4 sm:pl-5 py-8 justify-items-stretch">
        <InfoSection title={"1 year"} subtitle={"Duration"} />
        <InfoSection
          title={"2,213,213,324 BDT/year"}
          subtitle={"Scholarships available"}
        />
        <InfoSection title={"Mar 2024"} subtitle={"Apply date"} />
        <InfoSection title={"Jun 2024"} subtitle={"Start date"} />
      </div>
      <hr className="border border-t-[#f5f5f5]  w-11/12 mx-auto my-12"></hr>
      <div>
        <h3 className="font-extrabold">About</h3>
        <p className="w-1/2">
          The Animal Science MSc program from Mississippi State University
          curriculum is based on a total of 30 credit hours.
        </p>
        <p className="text-sm my-5">
          Visit the{" "}
          <span className="text-blue-500  hover:underline cursor-pointer ">
            visit programme website
          </span>{" "}
          for more information
        </p>
      </div>
      <hr className="border border-t-[#f5f5f5]  w-11/12 mx-auto my-12"></hr>
      <div className="bg-[#]"></div>
    </div>
  );
};

export default Overview;
