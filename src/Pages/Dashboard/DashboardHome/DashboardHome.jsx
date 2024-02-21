import { Authcontext } from "@/contexts/AuthContextProvider";
import useWindowDimensions from "@/core/windowsDimention";
import { useContext, useEffect, useState } from "react";
import DashCardContent from "../../../components/Dashboard/TabContainer/DashCardContent";
import FeedContent from "../../../components/Dashboard/TabContainer/FeedContent";
import useGlobalContext from "@/hooks/useGlobalContext";
import { LiaCoinsSolid } from "react-icons/lia";
import { Badge } from "@/components/ui/badge";

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
        "/assets/images/dashboard/posts/new-post-1.png",
        "/assets/images/dashboard/posts/new-post-2.png",
        "/assets/images/dashboard/posts/new-post-3.png",
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
  const { openModal } = useGlobalContext();
  let isFirstTime = 0;
  useEffect(() => {
    const showDailyReward = localStorage.getItem("show_daily_reward");
    if (user?.daily_rewards && !showDailyReward) {
      openModal({
        content: (
          <div className="flex flex-col items-center gap-y-3">
            <h1 className="text-primary text-xl mt-5 font-extrabold">
              Congratulations
            </h1>
            <LiaCoinsSolid className="text-yellow-500 text-9xl" />
            <p className="text-base text-green-600 font-bold">
              Daily login bonus!
            </p>
            <Badge
              variant="outline"
              className={"text-primary py-2 px-3 bg-yellow-100 border-none "}
            >
              <LiaCoinsSolid className="text-yellow-500 text-lg mr-1 " />
              <span className="text-primary">
                You have earned {user?.credit} coins
              </span>
            </Badge>
          </div>
        ),
      });
      localStorage.setItem("show_daily_reward", true);
    }
  }, [openModal, user?.has_booking, user?.credit]);

  return (
    <div className="text-primary  ">
      {/* <div className="hidden mmd:flex flex-col justify-center md:flex-row md:justify-start items-center space-x-[34px] shadow-md bg-white rounded-[20px] pl-[34px] py-[24px]">
        <img src={DashboardAvatar} alt="avatar" className="w-[88px]" />

        <div className="text-center md:text-left">
          <h1 className="text-[40px] font-bold ">Hello {user?.name},</h1>
          <p className="">Chittagong, Bangladesh</p>
          <p className="">Complete Your Profile</p>
        </div>
      </div> */}
      {/* GRID */}
      {/* DESKTOP */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-3 gap-2 h-full">
          <FeedContent posts={posts} />
          <DashCardContent />
        </div>
      </div>
      {/* MOBILE */}
      <div className="block lg:hidden">
        <div className="grid grid-cols-3 gap-y-4 h-full mt-5 ">
          <div
            className={`col-span-3 bg-white rounded-xl ${
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
