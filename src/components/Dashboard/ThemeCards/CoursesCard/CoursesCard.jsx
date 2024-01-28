import React from "react";
import { DasboardCardTheme } from "../../DasboardCards/DasboardCardTheme";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";

const CoursesCard = () => {
  const courses = [
    {
      id: 1,
      name: "Introduction to HTML",
      status: "Awating Approval",
      progress: 20,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Introduction to CSS",
      status: "Awating Approval",
      progress: 90,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      name: "Introduction to JavaScript",
      status: "Awating Approval",
      progress: 50,
      image: "https://picsum.photos/200/300",
    },
  ];
  return (
    <DasboardCardTheme>
      <div className="flex flex-col mmd:flex-row h-full">
        <div>
          <h1>Courses Completed</h1>
          <ScrollArea className="hidden mmd:block h-[120px] pr-4">
            {courses?.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex items-center space-x-2 mb-1 cursor-pointer "
                >
                  <div className="w-12 h-12 rounded-md overflow-hidden mt-auto">
                    <img
                      src={item.image}
                      alt="university-logo"
                      className="w-full"
                    />
                  </div>
                  <div className="text-xs">
                    <p>{item.name}</p>
                    <p>{item.status}</p>
                    <Progress value={item.progress} className={"w-full mt-1"} />
                  </div>
                </div>
              );
            })}
          </ScrollArea>
        </div>
        <div className="h-full mmd:ml-auto flex flex-col justify-center mmd:justify-between">
          <p className="text-6xl font-bold text-center">{courses.length}</p>
          <button className="px-3 py-1 bg-zinc-300 rounded-lg ">
            View All
          </button>
        </div>
      </div>
    </DasboardCardTheme>
  );
};

export default CoursesCard;
