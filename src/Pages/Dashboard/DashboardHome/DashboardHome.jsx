import FeedWrapper from "@/components/Dashboard/FeedWrapper/FeedWrapper";
import DashboardAvatar from "/assets/images/dashboard/dashboard-avatar.png";
import UniversitiesCard from "@/components/Dashboard/ThemeCards/UniversitiesCard/UniversitiesCard";
import CoursesCard from "@/components/Dashboard/ThemeCards/CoursesCard/CoursesCard";
import OpputunitiesCard from "@/components/Dashboard/ThemeCards/OpputunitiesCard/OpputunitiesCard";
import NetworksCard from "@/components/Dashboard/ThemeCards/NetworksCard/NetworksCard";
import DasboardCardPost from "@/components/Dashboard/DasboardCards/DasboardCardPost";
import FeedContent from "../../../components/Dashboard/TabContainer/FeedContent";
import DashCardContent from "../../../components/Dashboard/TabContainer/DashCardContent";
import { useEffect, useState } from "react";
import useWindowDimensions from "@/core/windowsDimention";

const DashboardHome = () => {
  const { width } = useWindowDimensions();
  const [activeKey, setActiveKey] = useState("part1");
  const posts = [
    {
      author: "Parrot Scott",
      author_image: "https://picsum.photos/200",
      content: "Innovation 2024 is here. Register now, Guys",
      images: [
        "https://picsum.photos/400",
        "https://picsum.photos/200",
        "https://picsum.photos/300",
        "https://picsum.photos/500",
      ],
      time: "2 days ago",
    },
    {
      author: "Parrot Scott",
      author_image: "https://picsum.photos/200",
      content: "Innovation 2023 is here. Register now, Guys",
      images: ["https://picsum.photos/200"],
      time: "2 days ago",
    },
    {
      author: "Parrot Scott",
      author_image: "https://picsum.photos/200",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget etiam sit amet nisl purus in mollis nunc sed. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Eget velit aliquet sagittis id consectetur purus ut faucibus. ",

      time: "2 days ago",
    },
    {
      author: "Parrot Scott",
      author_image: "https://picsum.photos/200",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget etiam sit amet nisl purus in mollis nunc sed. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Eget velit aliquet sagittis id consectetur purus ut faucibus. ",
      images: ["https://picsum.photos/200"],
      time: "2 days ago",
    },
  ];
  useEffect(() => {
    if (width > 992) {
      setActiveKey("part1");
    }
    return () => {};
  }, [width]);

  return (
    <div className="text-[#595959]">
      <div className="flex flex-col justify-center md:flex-row md:justify-start items-center space-x-2 sm:space-x-12">
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
      <div className="hidden lg:block">
        <div className="grid grid-cols-3 gap-y-4 h-full mt-5 ">
          <FeedContent posts={posts} />
          <DashCardContent />
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="grid grid-cols-3 gap-y-4 h-full mt-5 ">
          <div
            className={`col-span-3 bg-[#F5F5F5] rounded-xl ${
              activeKey === "part2" ? "px-1" : "px-5"
            } py-3`}
          >
            <div className={`flex ${activeKey === "part2" && "px-4"}`}>
              <a
                className={`${
                  activeKey === "part1"
                    ? "text-[#09D5D7] font-bold"
                    : " text-[#7A7C87]"
                } cursor-default pl-[10px] flex flex-col`}
                onClick={() => {
                  setActiveKey("part1");
                }}
              >
                Feed
                {/* {activeKey === "part1" && (
                  <hr className="  border mt-[10px] border-[#09D5D7] w-1/2 -bottom-[11px] translate-x-1/2" />
                )} */}
              </a>

              <a
                className={`${
                  activeKey === "part2"
                    ? "text-[#09D5D7] font-bold"
                    : " text-[#7A7C87]"
                } cursor-default pl-[10px]`}
                onClick={() => {
                  setActiveKey("part2");
                }}
              >
                Dashboard
                {/* {activeKey === "part2" && (
                  <hr className="  border mt-[10px] border-[#09D5D7] w-1/2 -bottom-[11px] translate-x-1/2" />
                )} */}
              </a>
            </div>
            <div className={` ${activeKey === "part2" && "px-4"}`}>
              <hr className="border mt-[10px] border-[#D9D9D9] px-3" />
            </div>

            {activeKey === "part1" ? (
              <FeedContent posts={posts} />
            ) : (
              activeKey === "part2" && <DashCardContent />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
