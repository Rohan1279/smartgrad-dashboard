import React, { Fragment } from "react";
import UniversitiesCard from "../ThemeCards/UniversitiesCard/UniversitiesCard";
import CoursesCard from "../ThemeCards/CoursesCard/CoursesCard";
import OpputunitiesCard from "../ThemeCards/OpputunitiesCard/OpputunitiesCard";
import NetworksCard from "../ThemeCards/NetworksCard/NetworksCard";

const DashCardContent = () => {
  return (
    <Fragment>
      <div className="col-span-3 lg:col-span-1 mmd:ml-[25px] bg-[#F5F5F5] rounded-lg lg:bg-white">
        <div className="grid grid-rows-2 gap-x-2 gap-y-4 grid-rows-4 gap-y-[20px] px-4 mmd:px-0 pt-4 pb-4">
          <UniversitiesCard />
          <CoursesCard />
          <OpputunitiesCard />
          <NetworksCard />
        </div>
      </div>
    </Fragment>
  );
};

export default DashCardContent;