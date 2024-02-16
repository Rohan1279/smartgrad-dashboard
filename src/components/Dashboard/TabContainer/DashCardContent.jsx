import React, { Fragment } from "react";
import UniversitiesCard from "../ThemeCards/UniversitiesCard/UniversitiesCard";
import CoursesCard from "../ThemeCards/CoursesCard/CoursesCard";
import OpputunitiesCard from "../ThemeCards/OpputunitiesCard/OpputunitiesCard";
import NetworksCard from "../ThemeCards/NetworksCard/NetworksCard";

const DashCardContent = () => {
  return (
    <Fragment>
      <div className="col-span-3 lg:col-span-1 mmd:ml-[25px] bg- rounded-lg lg:bg-inherit h-fit">
        <div className="grid grid-rows-2  gap-x-2 gap-y-4 grid-rows-1 gap-y-[20px] px-4 mmd:px-0 pt-4 md:pt-0 pb-4 ">
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
