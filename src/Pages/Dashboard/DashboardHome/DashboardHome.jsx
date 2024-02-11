import FeedWrapper from "@/components/Dashboard/FeedWrapper/FeedWrapper";
import DashboardAvatar from "/assets/images/dashboard/dashboard-avatar.png";
import UniversitiesCard from "@/components/Dashboard/ThemeCards/UniversitiesCard/UniversitiesCard";
import CoursesCard from "@/components/Dashboard/ThemeCards/CoursesCard/CoursesCard";
import OpputunitiesCard from "@/components/Dashboard/ThemeCards/OpputunitiesCard/OpputunitiesCard";
import NetworksCard from "@/components/Dashboard/ThemeCards/NetworksCard/NetworksCard";
import DasboardCardPost from "@/components/Dashboard/DasboardCards/DasboardCardPost";
import FeedContent from "../../../components/Dashboard/TabContainer/FeedContent";
import DashCardContent from "../../../components/Dashboard/TabContainer/DashCardContent";
import { useContext, useEffect, useState } from "react";
import useWindowDimensions from "@/core/windowsDimention";
import { Authcontext } from "@/contexts/AuthContextProvider";

const DashboardHome = () => {
  const { width } = useWindowDimensions();
  const { user } = useContext(Authcontext);
  const [activeKey, setActiveKey] = useState("part1");
  const posts = [
    {
      author: "Fardeen Ahmed",
      author_image: "/assets/images/about-us/TeamImages/fardin.jpg",
      content:
        "📲 Contact our friendly team today and take the first step towards a brighter future.",
      images: ["/assets/images/dashboard/posts/post-9.jpg"],
      time: "2 days ago",
    },
    {
      author: "Smartgrad",
      author_image: "https://smartgrad.org/assets/favicon-32x32.png",
      content: "Innovation 2024 is here. Register now, Guys",
      images: [
        "https://smartgrad.org/assets/image/slider/slider-4.jpg",
        "https://smartgrad.org/assets/image/news-event/u.jpeg",
        "https://smartgrad.org/assets/image/news-event/y.jpeg",
      ],
      time: "2 days ago",
    },
    {
      author: "Sakib Ahmed",
      author_image: "/assets/images/about-us/TeamImages/member2.png",
      content:
        "Internships are the gateway to gain that valuable experience companies are looking for. Calling all talented individuals! Our company is offering exciting internship opportunities. If you’re passionate about working with us then we’d love to hear from you!",

      time: "2 days ago",
    },
    {
      author: "R. Mansur",
      author_image: "/assets/images/about-us/TeamImages/member3.png",
      content:
        "We appreciate your support and hope to see you at future events. Keep shining bright!✨🌎🎓",
      images: ["/assets/images/dashboard/posts/post-12.jpg"],
      time: "2 days ago",
    },
    {
      author: "Parrot Scott",
      author_image: "https://picsum.photos/200",
      content:
        "Celebrating success with a heart full of gratitude! 🌟 Big thanks to our partner, MDX, for making yet another succesfull campaign. And to our amazing students, for their exceptional collaboration—here’s to the magic we create together #studyindubai #studyabroad #smartgrad",
      images: [
        "/assets/images/dashboard/posts/post-7.jpg",
        "/assets/images/dashboard/posts/post-8.jpg",
        "/assets/images/dashboard/posts/post-10.jpg",
        "/assets/images/dashboard/posts/post-11.jpg",
      ],
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
    <div className="text-[#4B4E6D] ">
      <div className="hidden mmd:hidden flex-col justify-center md:flex-row md:justify-start items-center space-x-2 sm:space-x-12">
        <img src={DashboardAvatar} alt="avatar" className="w-40" />

        <div className="text-center md:text-left">
          <h1 className="text-[40px] font-bold ">Hello {user?.name},</h1>
          <p className="pt-2">
            Explore your personalized dashboard to track university
            applications, course progress, and opportunities. Stay updated with
            our feed featuring the latest in educational innovation and
            community highlights.
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
                    ? "text-[#4B4E6D] font-bold"
                    : " text-[#7A7C87]"
                } cursor-default pl-[10px] flex flex-col`}
                onClick={() => {
                  setActiveKey("part1");
                }}
              >
                Feed
                {/* {activeKey === "part1" && (
                  <hr className="  border mt-[10px] border-[#4B4E6D] w-1/2 -bottom-[11px] translate-x-1/2" />
                )} */}
              </a>

              <a
                className={`${
                  activeKey === "part2"
                    ? "text-[#4B4E6D] font-bold"
                    : " text-[#7A7C87]"
                } cursor-default pl-[10px]`}
                onClick={() => {
                  setActiveKey("part2");
                }}
              >
                Dashboard
                {/* {activeKey === "part2" && (
                  <hr className="  border mt-[10px] border-primary w-1/2 -bottom-[11px] translate-x-1/2" />
                )} */}
              </a>
            </div>
            <div className={` ${activeKey === "part2" && "px-4"}`}>
              <hr className="border mt-[10px] border-[#4B4E6D] px-3" />
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
