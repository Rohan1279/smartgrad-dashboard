import { Link, NavLink } from "react-router-dom";
import UniversityIcon from "../../components/ThemeIcons/UniversityIcon";
import CareerIcon from "../../components/ThemeIcons/CareerIcon";
import AptitudeIcon from "../../components/ThemeIcons/AptitudeIcon";
import NetworkIcon from "../../components/ThemeIcons/NetworkIcon";
import DashboardIcon from "../../components/ThemeIcons/DashboardIcon";
import ProfileIcon from "/assets/images/dashboard/dashboard-drawer-avatar.png";
const DashboardDrawer = () => {
  return (
    <aside className=" flex flex-row gap-x-5 h-[50px] rounded-lg mmd:rounded-auto mmd:h-fit mmd:flex-col mmd:gap-y-1  w-[94%] mmd:w-[56px] mmd:hover:w-40 transition-all duration-300 mb-[10px] mmd:mb-0 border bg-white/70 backdrop-blur-sm px-2 py-2 rounded-r-xl overflow-hidden mt-16 mmd:mt-none justify-center mmd:justify-auto pointer-events-auto ">
      <NavLink
        to="home"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-bold flex justify-start items-center space-x-[13px]  mmd:mx-0 mmd:pl-2 mmd:pr-4 mmd:py-2 rounded-[10px] group bg-none mmd:bg-gradient-to-r from-[#f5f5f5]/70 to-white mmd:shadow-md"
            : "text-primary flex justify-start items-center space-x-[13px] rounded-[10px] mmd:mx-0 mmd:pl-2 mmd:pr-4 mmd:py-2 group"
        }
      >
        <DashboardIcon className={"min-w-5 max-w-5 fill-primary mr-1"} />
        <span className="hidden mmd:flex">Dashboard</span>
      </NavLink>
      <NavLink
        to="university"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-bold flex justify-start items-center space-x-[13px]   mmd:px-1  rounded-[10px] py-1 group bg-none mmd:bg-[#f5f5f5]/70 mmd:shadow-md active"
            : "text-primary flex justify-start items-center space-x-[13px]  mmd: mmd:px-1  rounded-[10px] py-1  group "
        }
      >
        <UniversityIcon
          className={
            "min-w-8 max-w-8 fill-primary group-[.active]:fill-[#FFC24D] "
          }
        />
        <span className="hidden mmd:flex">University</span>
      </NavLink>
      <NavLink
        to="career"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-bold flex justify-start items-center space-x-[13px]  mmd: mmd:px-1  rounded-[10px] py-1 group bg-none mmd:bg-[#f5f5f5]/70 mmd:shadow-md active"
            : "text-primary flex justify-start items-center space-x-[13px]  mmd: mmd:px-1  rounded-[10px] py-1 group"
        }
      >
        <CareerIcon
          className={
            "min-w-8 max-w-8  group-[.active]:stroke-[#F1662A] stroke-primary"
          }
        />

        <span className="hidden mmd:flex">Career</span>
      </NavLink>
      <NavLink
        to="aptitude"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-bold flex justify-start items-center space-x-[13px]  mmd: mmd:px-1  rounded-[10px] py-1 group bg-none mmd:bg-[#f5f5f5]/70 mmd:shadow-md active"
            : "text-primary flex justify-start items-center space-x-[13px]  mmd: mmd:px-1  rounded-[10px] py-1 group"
        }
      >
        <AptitudeIcon
          className={
            "min-w-8 max-w-8  group-[.active]:stroke-[#09D5D7] stroke-primary"
          }
        />

        <span className="hidden mmd:flex">Aptitude</span>
      </NavLink>
      <NavLink
        to="network"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-bold flex justify-start items-center space-x-[13px]  mmd: mmd:px-1  rounded-[10px] py-1 group bg-none mmd:bg-[#f5f5f5]/70 mmd:shadow-md active"
            : "text-primary flex justify-start items-center space-x-[13px]  mmd: mmd:px-1  rounded-[10px] py-1 group"
        }
      >
        <NetworkIcon
          className={
            "min-w-8 max-w-8 group-[.active]:stroke-[#FF90D9] stroke-primary"
          }
        />

        <span className="hidden mmd:flex">Network</span>
      </NavLink>

      <hr className="hidden mmd:block border mmd:mt-4" />

      <NavLink
        to="profile"
        className={({ isActive }) =>
          isActive
            ? "text-white font-bold flex justify-start items-center space-x-[13px]  rounded-[10px] group  mmd:bg-primary mmd:shadow-md active  mmd:pl-2 mmd:pr-4 py-2 "
            : "text-primary flex justify-start items-center space-x-[13px]    rounded-[10px]  group  mmd:pl-2 mmd:pr-4 py-2 "
        }
      >
        <img
          src={ProfileIcon}
          alt=""
          className="min-w-6 max-w-6 mmd:w-[30px] mb-1 mmd:mb-0"
        />
        <span className="hidden mmd:flex">Profile</span>
      </NavLink>
    </aside>
  );
};

export default DashboardDrawer;
