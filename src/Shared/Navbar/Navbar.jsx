import NavIcon from "/assets/images/navbar/smartgrad-logo.png";
import GlobeEnIcon from "/assets/images/navbar/globe-en.png";
import { useEffect, useRef, useState } from "react";
import UniversitiesMenu from "./Menus/UniversitiesMenu";
import CareersMenu from "./Menus/CareersMenu";
import AptitudesMenu from "./Menus/AptitudesMenu";
import NetworksMenu from "./Menus/NetworksMenu";
import clsx from "clsx";
import SlideWrapper from "./SlideWrapper";
import BellIcon from "/assets/images/navbar/bell.svg";
import UniversityIcon from "../../components/ThemeIcons/UniversityIcon";
import CareerIcon from "../../components/ThemeIcons/CareerIcon";
import AptitudeIcon from "../../components/ThemeIcons/AptitudeIcon";
import NetworkIcon from "../../components/ThemeIcons/NetworkIcon";
import DashboardIcon from "../../components/ThemeIcons/DashboardIcon";

import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./Menus/ProfileMenu";
import NotificationMenu from "./Menus/NotificationMenu";
// import DashboardIcon from "/assets/images/dashboard/dashboard.svg";

export default function Navbar() {
  const [hovering, sethovering] = useState(null);
  const [popOverLeft, setPopOverLeft] = useState(0);
  const [popOverHeight, setPopOverHeight] = useState(0);
  const [popOverWidth, setPopOverWidth] = useState(0);
  const refs = useRef([]);
  const location = useLocation();

  const onMouseEnter = (index, element) => {
    sethovering(index);
    setPopOverLeft(element.offsetLeft);
    const menuElement = refs.current[index];
    if (menuElement) {
      setPopOverHeight(menuElement.offsetHeight);
      setPopOverWidth(menuElement.offsetWidth);
    }
  };
  return (
    <nav
      onMouseLeave={() => {
        sethovering(null);
      }}
      className={`bg-white shadow-sm text-[#595959] sticky w-full top-0 z-50  ${
        location?.pathname.includes("login") ||
        location?.pathname.includes("register")
          ? "hidden"
          : "block"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex-1 flex items-center sm:items-stretch justify-start">
            {/* Logo and Brand Name */}
            <Link to={"/"} className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden w-28"
                src={NavIcon}
                alt="Your Logo"
              />
              <img
                className="hidden lg:block w-28"
                src={NavIcon}
                alt="Your Logo"
              />
            </Link>
            {/* Navigation Links */}
            {/* <div className="hidden mmd:hidden justify-center items-center space-x-4 mmd:space-x-11 sm:ml-8 ">
              <Link
                onMouseEnter={(e) => {
                  onMouseEnter(1, e.currentTarget);
                }}
                to="/"
                className="flex items-center justify-center space-x-2 "
              >
                <UniversityIcon className={"w-8 fill-primary "} />
                <span className="">Universities</span>
              </Link>
              <Link
                onMouseEnter={(e) => {
                  onMouseEnter(2, e.currentTarget);
                }}
                to="/"
                className="flex items-center justify-center space-x-2 "
              >
                <CareerIcon className={"w-8 stroke-primary  fill-none"} />

                <span className="">Careers</span>
              </Link>
              <Link
                onMouseEnter={(e) => {
                  onMouseEnter(3, e.currentTarget);
                }}
                to="/"
                className="flex items-center justify-center space-x-2 "
              >
                <AptitudeIcon className={"w-8 stroke-primary  fill-none"} />

                <span className="">Aptitudes</span>
              </Link>
              <Link
                onMouseEnter={(e) => {
                  onMouseEnter(4, e.currentTarget);
                }}
                to="/"
                className="flex items-center justify-center space-x-2 "
              >
                <NetworkIcon className={"w-8 stroke-primary  fill-none"} />

                <span className="">Networks</span>
              </Link>
              <Link
                to={"/dashboard"}
                className="flex items-center justify-center space-x-2 "
              >
                <DashboardIcon className={"w-5 fill-primary"} />

                <span className="">Dashboard</span>
              </Link>
            </div> */}
          </div>

          <div
            className={clsx(
              "absolute top-12  -ml-2  duration-500",
              hovering
                ? "transition-all opacity-100 "
                : "opacity-0 pointer-events-none"
            )}
            style={{ left: popOverLeft || 0 }}
          >
            <div
              style={{
                height: popOverHeight || 100,
                width: popOverWidth,
              }}
              className="bg-white overflow-hidden  transform-gpu rounded-xl shadow-lg transition-all duration-500 "
            >
              <SlideWrapper index={1} hovering={hovering}>
                <UniversitiesMenu
                  setPopOverWidth={setPopOverWidth}
                  ref={(element) => (refs.current[1] = element)}
                />
              </SlideWrapper>
              <SlideWrapper index={2} hovering={hovering}>
                <CareersMenu
                  setPopOverWidth={setPopOverWidth}
                  ref={(element) => (refs.current[2] = element)}
                />
              </SlideWrapper>
              <SlideWrapper index={3} hovering={hovering}>
                <AptitudesMenu
                  setPopOverWidth={setPopOverWidth}
                  ref={(element) => (refs.current[3] = element)}
                />
              </SlideWrapper>
              <SlideWrapper index={4} hovering={hovering}>
                <NetworksMenu
                  setPopOverWidth={setPopOverWidth}
                  ref={(element) => (refs.current[4] = element)}
                />
              </SlideWrapper>
            </div>
          </div>

          {/* Profile and Settings */}
          <div className="absolute inset-y-0 right-0 flex space-x-7 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <img
              src={GlobeEnIcon}
              alt="globe-icon"
              className="w-7 cursor-pointer transition-all"
            />
            <NotificationMenu />
            <ProfileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
