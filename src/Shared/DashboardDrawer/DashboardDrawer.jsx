import { Link, NavLink } from "react-router-dom";
import UniversitiesIcon from "/assets/images/navbar/convocation-cap.svg";
import CareerIcon from "/assets/images/navbar/bag.svg";
import AptitudeIcon from "/assets/images/navbar/aptitudes.svg";
import NetworkIcon from "/assets/images/navbar/network.svg";
import DashboardIcon from "/assets/images/dashboard/dashboard.svg";
import ProfileIcon from "/assets/images/dashboard/dashboard-drawer-avatar.png";
const DashboardDrawer = () => {
  return (
    <aside className=" flex flex-col w-fit border bg-[#595959] py-5 rounded-r-xl overflow-hidden">
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "text-[#09D5D7]  flex justify-start items-center space-x-4 px-4 py-2"
            : "text-white flex justify-start items-center space-x-4 px-4 py-2 "
        }
      >
        <div className="w-4 h-4 ">
          <img src={DashboardIcon} alt="" className="w-full" />
        </div>

        <span className="">Dashboard</span>
      </NavLink>
      <NavLink
        to="university/1"
        className={({ isActive }) =>
          isActive
            ? "text-[#09D5D7]  flex justify-start items-center space-x-4 px-4 py-2"
            : "text-white flex justify-start items-center space-x-4 px-4 py-2 "
        }
      >
        <div className="w-4 h-4">
          <img src={UniversitiesIcon} alt="" className="w-full" />
        </div>
        <span className="">University</span>
      </NavLink>
      <NavLink
        to="career"
        className={({ isActive }) =>
          isActive
            ? "text-[#09D5D7]  flex justify-start items-center space-x-4 px-4 py-2"
            : "text-white flex justify-start items-center space-x-4 px-4 py-2 "
        }
      >
        <div className="w-4 h-4">
          <img src={CareerIcon} alt="" className="w-full" />
        </div>
        <span className="">Career</span>
      </NavLink>
      <NavLink
        to="aptitude"
        className={({ isActive }) =>
          isActive
            ? "text-[#09D5D7]  flex justify-start items-center space-x-4 px-4 py-2"
            : "text-white flex justify-start items-center space-x-4 px-4 py-2 "
        }
      >
        <div className="w-4 h-4">
          <img src={AptitudeIcon} alt="" className="w-full" />
        </div>
        <span className="">Aptitude</span>
      </NavLink>
      <NavLink
        to="network"
        className={({ isActive }) =>
          isActive
            ? "text-[#09D5D7]  flex justify-start items-center space-x-4 px-4 py-2"
            : "text-white flex justify-start items-center space-x-4 px-4 py-2 "
        }
      >
        <div className="w-4 h-4">
          <img src={NetworkIcon} alt="" className="w-full" />
        </div>
        <span className="">Network</span>
      </NavLink>

      <hr className="border my-7" />

      <NavLink
        to="profile"
        className={({ isActive }) =>
          isActive
            ? "text-[#09D5D7]  flex justify-start items-center space-x-4 px-4 py-2"
            : "text-white flex justify-start items-center space-x-4 px-4 py-2 "
        }
      >
        <img src={ProfileIcon} alt="" className="w-4" />
        <span className="">Profile</span>
      </NavLink>
    </aside>
  );
};

export default DashboardDrawer;
