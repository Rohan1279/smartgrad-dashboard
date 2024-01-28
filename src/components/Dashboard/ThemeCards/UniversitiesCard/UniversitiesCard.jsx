import { DasboardCardTheme } from "../../DasboardCards/DasboardCardTheme";
import { Progress } from "@/components/ui/progress";
import UniversityImage from "/assets/images/dashboard/university-logo.png";
import { ScrollArea } from "@/components/ui/scroll-area";

const UniversitiesCard = () => {
  const universities = [
    {
      name: "Southwest Minnesota University",
      status: "Awating Approval",
      progress: 33,
    },
    {
      name: "Southwest Minnesota University",
      status: "Awating Approval",
      progress: 93,
    },
    {
      name: "Southwest Minnesota University",
      status: "Awating Approval",
      progress: 43,
    },
    {
      name: "Southwest Minnesota University",
      status: "Awating Approval",
      progress: 73,
    },
  ];
  return (
    <DasboardCardTheme>
      <div className="flex h-full">
        <div>
          <h1>Universities Applied</h1>
          <ScrollArea className="h-[120px] pr-4">
            {universities?.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex items-center space-x-2 mb-1 cursor-pointer "
                >
                  <div className="w-12">
                    <img
                      src={UniversityImage}
                      alt="university-logo"
                      className="mt-auto"
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
        <div className="h-full ml-auto flex flex-col justify-between">
          <p className="text-6xl font-bold text-center">
            {universities.length}
          </p>
          <button className="px-3 py-1 bg-zinc-300 rounded-lg ">
            View All
          </button>
        </div>
      </div>
    </DasboardCardTheme>
  );
};

export default UniversitiesCard;
