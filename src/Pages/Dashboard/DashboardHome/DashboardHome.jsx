import FeedWrapper from "@/components/Dashboard/FeedWrapper/FeedWrapper";
import DashboardAvatar from "/assets/images/dashboard/dashboard-avatar.png";
import UniversitiesCard from "@/components/Dashboard/ThemeCards/UniversitiesCard/UniversitiesCard";
import CoursesCard from "@/components/Dashboard/ThemeCards/CoursesCard/CoursesCard";
import OpputunitiesCard from "@/components/Dashboard/ThemeCards/OpputunitiesCard/OpputunitiesCard";
import NetworksCard from "@/components/Dashboard/ThemeCards/NetworksCard/NetworksCard";

const DashboardHome = () => {
  return (
    <div className="text-[#595959]">
      <div className="flex flex-col justify-center md:flex-row md:justify-start items-center space-x-12">
        <img src={DashboardAvatar} alt="avatar" className="w-40" />

        <div className="text-center md:text-left">
          <h1 className="text-[40px] font-bold ">Hello User,</h1>
          <p className="pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
      </div>
      {/* GRID */}
      <h2 className=" mt-5 pl-[10px]">Feed</h2>
      <hr className="w-2/3 border mt-[10px] border-[#D9D9D9]" />
      <div className="grid grid-cols-3 h-full gap-x-[25px]">
        <div className="col-span-2  ">
          <FeedWrapper />
        </div>
        <div className="col-span-1  ">
          <div className="grid grid-rows-4 gap-y-[20px]">
            <UniversitiesCard />
            <CoursesCard />
            <OpputunitiesCard />
            <NetworksCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
