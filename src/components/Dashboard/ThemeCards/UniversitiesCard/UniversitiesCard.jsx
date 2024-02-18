import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import UniversityIcon from "../../../ThemeIcons/UniversityIcon";
import { DasboardCardTheme } from "../../DasboardCards/DasboardCardTheme";
import UniversityImage from "/assets/images/dashboard/university-logo.png";

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
      <div className="flex flex-row rounded-lg gap-x-4">
        <div className=" flex-1">
          <div className="flex items-center gap-x-2">
            <UniversityIcon className={"min-w-8 max-w-8 fill-primary "} />
            <h1 className="text-lg font-semibold">Universities Applied</h1>
          </div>
          <ScrollArea className="h-[120px] p-2 py-4 ">
            {universities?.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex items-center space-x-2 mb-2 p-1 cursor-pointer bg-white rounded-md hover:shadow-sm transition-all"
                >
                  <div className="w-16">
                    <img
                      src={UniversityImage}
                      alt="university-logo"
                      className="mt-auto"
                    />
                  </div>
                  <div className="">
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
            className="text-sm py-1 underline rounded-lg whitespace-nowrap"
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
