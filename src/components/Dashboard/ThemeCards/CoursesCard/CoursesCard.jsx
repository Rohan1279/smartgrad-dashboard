import React from "react";
import { DasboardCardTheme } from "../../DasboardCards/DasboardCardTheme";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

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
      <div className="flex flex-row rounded-lg gap-x-4">
        <div className="flex-1">
          <h1>Courses Completed</h1>
          <ScrollArea className="h-[120px] pr-4 ">
            {courses?.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex items-center space-x-2 mb-2 p-1 cursor-pointer bg-white rounded-md hover:shadow-sm transition-all"
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
        <div className="ml-auto flex flex-col justify-between">
          <button
            onClick={() => {
              toast("Coming Soon");
            }}
            className=" py-1 underline text-[12px] rounded-lg whitespace-nowrap"
          >
            View All
          </button>
          <p className="text-6xl font-bold text-center">{courses.length}</p>
        </div>
      </div>
    </DasboardCardTheme>
  );
};

export default CoursesCard;
