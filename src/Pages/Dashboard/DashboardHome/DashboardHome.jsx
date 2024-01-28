import FeedWrapper from "@/components/Dashboard/FeedWrapper/FeedWrapper";
import DashboardAvatar from "/assets/images/dashboard/dashboard-avatar.png";
import UniversitiesCard from "@/components/Dashboard/ThemeCards/UniversitiesCard/UniversitiesCard";
import CoursesCard from "@/components/Dashboard/ThemeCards/CoursesCard/CoursesCard";
import OpputunitiesCard from "@/components/Dashboard/ThemeCards/OpputunitiesCard/OpputunitiesCard";
import NetworksCard from "@/components/Dashboard/ThemeCards/NetworksCard/NetworksCard";
import DasboardCardPost from "@/components/Dashboard/DasboardCards/DasboardCardPost";

const DashboardHome = () => {
  const posts = [
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
  return (
    <div className="text-[#595959]">
      <div className="flex flex-col justify-center md:flex-row md:justify-start items-center space-x-12">
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
      <div className="grid grid-cols-3 h-full mt-5 ">
        <FeedWrapper className="col-span-2 bg-[#F5F5F5] rounded-xl px-5 py-3">
          <div>
            <h2 className=" pl-[10px] font-semibold">Feed</h2>
            <hr className="border mt-[10px] border-[#D9D9D9]" />
            {posts?.map((item, idx) => {
              return (
                <DasboardCardPost
                  key={idx}
                  content={item.content}
                  images={item.images}
                  time={item.time}
                  author={item.author}
                  author_image={item.author_image}
                />
              );
            })}
          </div>
        </FeedWrapper>
        <div className="col-span-1  ml-[25px]">
          <div className="grid grid-rows-4 gap-y-[20px]">
            <UniversitiesCard />
            <CoursesCard />
            <OpputunitiesCard />
            <NetworksCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
