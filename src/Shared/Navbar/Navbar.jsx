import NavIcon from "/assets/images/navbar/smart-grad.png";
import GlobeEnIcon from "/assets/images/navbar/globe-en.png";
import { useRef, useState } from "react";
import UniversitiesMenu from "./Menus/UniversitiesMenu";
import CareersMenu from "./Menus/CareersMenu";
import AptitudesMenu from "./Menus/AptitudesMenu";
import NetworksMenu from "./Menus/NetworksMenu";
import clsx from "clsx";
import SlideWrapper from "./SlideWrapper";
import UniversitiesIcon from "/assets/images/navbar/convocation-cap.svg";
import CareerIcon from "/assets/images/navbar/bag.svg";
import AptitudeIcon from "/assets/images/navbar/aptitudes.svg";
import NetworkIcon from "/assets/images/navbar/network.svg";
import BellIcon from "/assets/images/navbar/bell.svg";
import AvatarIcon from "/assets/images/navbar/avatar-icon.svg";

export default function Navbar() {
  const [hovering, sethovering] = useState(null);
  const [popOverLeft, setPopOverLeft] = useState(0);
  const [popOverHeight, setPopOverHeight] = useState(0);
  const [popOverWidth, setPopOverWidth] = useState(0);
  const refs = useRef([]);
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
      className="bg-white shadow-md text-[#595959] fixed w-full top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            {/* Logo and Brand Name */}
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden w-24"
                src={NavIcon}
                alt="Your Logo"
              />
              <img
                className="hidden lg:block w-24"
                src={NavIcon}
                alt="Your Logo"
              />
            </div>
            {/* Navigation Links */}
            <div className="hidden sm:flex justify-center items-center space-x-11 sm:ml-8 ">
              <a
                onMouseEnter={(e) => {
                  onMouseEnter(1, e.currentTarget);
                }}
                href=""
                className="flex items-center justify-center space-x-2"
              >
                <img src={UniversitiesIcon} alt="" className="w-4" />
                <span className="">Universities</span>
              </a>
              <a
                onMouseEnter={(e) => {
                  onMouseEnter(2, e.currentTarget);
                }}
                href=""
                className="flex items-center justify-center space-x-2 "
              >
                <img src={CareerIcon} alt="" className="w-4" />
                <span className="">Careers</span>
              </a>
              <a
                onMouseEnter={(e) => {
                  onMouseEnter(3, e.currentTarget);
                }}
                href=""
                className="flex items-center justify-center space-x-2 "
              >
                <img src={AptitudeIcon} alt="" className="w-4" />
                <span className="">Aptitudes</span>
              </a>
              <a
                onMouseEnter={(e) => {
                  onMouseEnter(4, e.currentTarget);
                }}
                href=""
                className="flex items-center justify-center space-x-2 "
              >
                <img src={NetworkIcon} alt="" className="w-4" />
                <span className="">Networks</span>
              </a>
            </div>
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
            <img
              src={BellIcon}
              alt="bell-icon"
              className="w-5 cursor-pointer transition-all"
            />
            <img
              src={AvatarIcon}
              alt="avatar-icon"
              className="w-5 cursor-pointer transition-all"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
