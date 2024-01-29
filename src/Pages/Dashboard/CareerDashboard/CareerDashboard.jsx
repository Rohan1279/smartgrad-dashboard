import RecommendationCard from "@/components/Dashboard/RecommendationCard/RecommendationCard";
import React from "react";

const CareerDashboard = () => {
  return (
    <div className="text-[#595959]">
      <h1 className="text-[40px] font-bold pt-10">Hello User,</h1>
      <p className="pt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{" "}
      </p>
      <RecommendationCard />
    </div>
  );
};

export default CareerDashboard;
