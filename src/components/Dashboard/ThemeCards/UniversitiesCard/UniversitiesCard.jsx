import { DasboardCardTheme } from "../../DasboardCards/DasboardCardTheme";
import { Progress } from "@/components/ui/progress";
import UniversityImage from "/assets/images/dashboard/university-logo.png";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";

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
      <div className="flex flex-row rounded-lg gap-x-4 ">
        <div className=" flex-1">
          <h1>Universities Applied</h1>
          <ScrollArea className="h-[120px] pr-4 ">
            {universities?.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex items-center space-x-2 mb-2 p-1 cursor-pointer bg-white rounded-md hover:shadow-sm transition-all"
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
        <div className="ml-auto flex flex-col justify-between items-center">
          <button
            onClick={() => {
              toast("Coming Soon");
            }}
            className=" py-1 underline text-[12px] rounded-lg whitespace-nowrap"
          >
            View All
          </button>
          <p className="text-6xl font-bold text-center">
            {universities.length}
          </p>
        </div>
      </div>
    </DasboardCardTheme>
  );
};

export default UniversitiesCard;
