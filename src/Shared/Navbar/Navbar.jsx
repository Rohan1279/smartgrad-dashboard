import { useContext, useRef, useState } from "react";
import { LiaCoinsSolid } from "react-icons/lia";
import NavIcon from "/assets/images/navbar/smartgrad-logo.png";

import { Link, useLocation } from "react-router-dom";
import NotificationMenu from "./Menus/NotificationMenu";
import ProfileMenu from "./Menus/ProfileMenu";
// import DashboardIcon from "/assets/images/dashboard/dashboard.svg";

import { Badge } from "@/components/ui/badge";
import { Authcontext } from "@/contexts/AuthContextProvider";

export default function Navbar() {
  const [hovering, sethovering] = useState(null);
  const [popOverLeft, setPopOverLeft] = useState(0);
  const [popOverHeight, setPopOverHeight] = useState(0);
  const [popOverWidth, setPopOverWidth] = useState(0);
  const refs = useRef([]);
  const location = useLocation();
  const { user } = useContext(Authcontext);

  // const onMouseEnter = (index, element) => {
  //   sethovering(index);
  //   setPopOverLeft(element.offsetLeft);
  //   const menuElement = refs.current[index];
  //   if (menuElement) {
  //     setPopOverHeight(menuElement.offsetHeight);
  //     setPopOverWidth(menuElement.offsetWidth);
  //   }
  // };

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
      <div className="">
        <div className="max-w-7xl  mx-auto px-2 relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center sm:items-stretch justify-start  ">
            {/* Logo and Brand Name */}
            <Link
              to={"/dashboard/home"}
              className=" flex items-center bg-blue-400 "
            >
              <img
                className="block lg:hidden w-28 "
                src={NavIcon}
                alt="Your Logo"
              />
              <img
                className="hidden lg:block w-28 "
                src={NavIcon}
                alt="Your Logo"
              />
            </Link>
          </div>

          {/* <div
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
          </div> */}

          {/* Profile and Settings */}
          <div className="absolute  inset-y-0 right-0 flex space-x-7 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <div className=" border border-primary rounded-[5px] text-xs text-primary  px-3 py-2  ">
              EN
            </div> */}
            <NotificationMenu />
            {
              <Badge variant="outline" className={"text-primary py-2 px-3"}>
                <LiaCoinsSolid className="text-yellow-500 text-lg mr-1 animate-bounce" />
                <span className="text-primary">{user?.credit || 0 }</span>
              </Badge>
            }
            <ProfileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
