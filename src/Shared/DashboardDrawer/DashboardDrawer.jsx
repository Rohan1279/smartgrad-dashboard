import { Link, NavLink } from "react-router-dom";
import UniversitiesIcon from "/assets/images/navbar/convocation-cap.svg";
import CareerIcon from "/assets/images/navbar/career.png";
import AptitudeIcon from "/assets/images/navbar/aptitudes.png";
import NetworkIcon from "/assets/images/navbar/network.png";
import DashboardIcon from "/assets/images/dashboard/dashboard.svg";
import ProfileIcon from "/assets/images/dashboard/dashboard-drawer-avatar.png";
const DashboardDrawer = () => {
  return (
    <aside className=" flex flex-row h-[50px] rounded-lg mmd:rounded-auto mmd:h-auto mmd:flex-col w-[94%] mmd:w-fit mb-[10px] mmd:mb-auto border bg-[#595959] py-5 rounded-r-xl overflow-hidden mt-16 mmd:mt-none justify-center mmd:justify-auto pointer-events-auto">
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

        <span className="hidden mmd:flex">Dashboard</span>
      </NavLink>
      <NavLink
        to="university"
        className={({ isActive }) =>
          isActive
            ? "text-[#09D5D7]  flex justify-start items-center space-x-4 px-4 py-2"
            : "text-white flex justify-start items-center space-x-4 px-4 py-2 "
        }
      >
        <div className="w-4 h-4">
          <img src={UniversitiesIcon} alt="" className="w-full" />
        </div>
        <span className="hidden mmd:flex">University</span>
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
        <span className="hidden mmd:flex">Career</span>
      </NavLink>
      <NavLink
        to="aptitude"
        className={({ isActive }) =>
          isActive
            ? "text-[#09D5D7] flex justify-start items-center space-x-4 px-4 py-2"
            : "text-white flex justify-start items-center space-x-4 px-4 py-2 "
        }
      >
        <div className="w-4 h-4">
          <img src={AptitudeIcon} alt="" className="w-full" />
        </div>
        <span className="hidden mmd:flex">Aptitude</span>
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
        <span className="hidden mmd:flex">Network</span>
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
        <span className="hidden mmd:flex">Profile</span>
      </NavLink>
    </aside>
  );
};

export default DashboardDrawer;
