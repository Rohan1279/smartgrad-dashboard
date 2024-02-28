import { Fragment } from "react";
import NetworksCard from "../ThemeCards/NetworksCard/NetworksCard";
import NewEventsCard from "../ThemeCards/NewEvents/NewEvents";
import UniversitiesCard from "../ThemeCards/UniversitiesCard/UniversitiesCard";

const DashCardContent = () => {
  return (
    <Fragment>
      <div className="col-span-3 lg:col-span-2 xl:col-span-1 mmd:ml-[25px] bg- rounded-lg lg:bg-inherit h-fit">
        <div className="flex flex-col gap-2 xl:gap-3 px-4 mmd:px-0 pt-4 md:pt-0 "> 
          <NewEventsCard />
          <UniversitiesCard />
          {/* <CoursesCard /> */}
          {/* <OpputunitiesCard /> */}
          <NetworksCard />
        </div>
      </div>
    </Fragment>
  );
};

export default DashCardContent;
