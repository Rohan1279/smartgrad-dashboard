import { Link } from "react-router-dom";
import UniversitiesIcon from "/assets/images/navbar/convocation-cap.svg";
import CareerIcon from "/assets/images/navbar/bag.svg";
import AptitudeIcon from "/assets/images/navbar/aptitudes.svg";
import NetworkIcon from "/assets/images/navbar/network.svg";
import DashboardIcon from "/assets/images/dashboard/dashboard.svg";
import ProfileIcon from "/assets/images/dashboard/dashboard-drawer-avatar.png";
const DashboardDrawer = () => {
  return (
    <div className=" flex flex-col w-fit border bg-[#595959] py-9 rounded-r-xl">
      <Link
        to={"/dashboard"}
        className="flex justify-start items-center space-x-4 px-4 pb-2 "
      >
        <div className="w-4 h-4 border">
          <img src={DashboardIcon} alt="" className="w-full" />
        </div>
        <span className="text-white">Dashboard</span>
      </Link>
      <Link
        to={"university"}
        className="flex justify-start items-center space-x-4 px-4 py-2  "
      >
        {/* <img src={UniversitiesIcon} alt="" /> */}
        <div className="w-4 h-4 border"></div>
        <span className="text-white">University</span>
      </Link>
      <Link
        to={"career"}
        className="flex justify-start items-center space-x-4 px-4 py-2  "
      >
        {/* <img src={CareerIcon} alt="" /> */}
        <div className="w-4 h-4 border"></div>
        <span className="text-white">Career</span>
      </Link>
      <Link
        to={"aptitude"}
        className="flex justify-start items-center space-x-4 px-4 py-2  "
      >
        {/* <img src={AptitudeIcon} alt="" /> */}
        <div className="w-4 h-4 border"></div>
        <span className="text-white">Aptitude</span>
      </Link>
      <Link
        to={"network"}
        className="flex justify-start items-center space-x-4 px-4 py-2  "
      >
        {/* <img src={NetworkIcon} alt="" /> */}
        <div className="w-4 h-4 border"></div>
        <span className="text-white">Network</span>
      </Link>
      <hr className="border my-7" />
      <Link to={"profile"}>
        <img
          src={ProfileIcon}
          alt=""
          className="flex justify-center items-center w-10"
        />
        Profile
      </Link>
    </div>
  );
};

export default DashboardDrawer;
