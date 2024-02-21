import React from "react";
import ComingSoonImage from "/assets/images/dashboard/coming-soon.png";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center shadow-md bg-white rounded-[20px] pl-[34px] py-[24px] h-[640px] mt-5 w-full">
      <img src={ComingSoonImage} alt="coming-soon" className="w-1/3" />
      <p className="w-1/3 text-center">
        This feature is under construction. Thank you for your patience. Will be
        available in a few weeks.
      </p>
      <button className="bg-primary text-white px-5 py-3 rounded-[10px] mt-4">
        <Link to="/dashboard/home">Back To Dashboard</Link>
      </button>
    </div>
  );
};

export default ComingSoon;
