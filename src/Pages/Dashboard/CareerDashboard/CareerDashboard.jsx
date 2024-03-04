import Loader from "@/components/Loader/Loader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CareerDashboardHeader from "./CareerDashboardHeader";
import Jobs from "./Jobs/Jobs";

const CareerDashboard = () => {
  const [defaultTab, setDefaultTab] = useState("");
  const navigate = useNavigate();



  useEffect(() => {
    if (location && location.pathname) {
      const path = location.pathname;
      if (path.includes("applications")) {
        setDefaultTab("applications");
        return;
      }
      if (path.includes("recommendation")) {
        setDefaultTab("recommendation");
        return;
      } else {
        setDefaultTab("jobs");
      }
    }
  }, [location]);

  return (
    <div className="text-[#4B4E6D]">
      <CareerDashboardHeader />
      
      <div className="h-[74vh] bg-white mt-5 px-4 sm:px-9 py-5 rounded-xl">
        <Tabs defaultValue="jobs"  value={defaultTab} className="">
          <TabsList>
            <TabsTrigger
              className="mr-[42px] relative group"
              value="jobs"
              onClick={() => navigate(`/dashboard/career`)}
            >
              Jobs
              <hr className="border mt-[10px] border-primary w-1/2 absolute -bottom-[11px] translate-x-1/2 group-data-[state=active]:block hidden" />
            </TabsTrigger>
            <TabsTrigger
              className={`mr-[42px]  group ${
                [].length === 0
                  ? "text-[#595959]"
                  : "text-primary"
              }`}
              value="savedJobs"
              // onClick={() => navigate(`/dashboard/university/recommendation`)}
              // disabled={recommendationData?.length === 0}
            >
              <div className="flex gap-x-1">
                <span className="relative">
                Saved Jobs
                  {/* {recommendationData?.length > 0 &&
                  recommendationData?.length !== undefined ? (
                    <span className="w-3 h-3 absolute rounded-full bg-[#F1662A] text-[9px] text-center text-white">
                      {recommendationData.length}
                    </span>
                  ) : (
                    <CiLock
                      className={`text-base mt-[2px] absolute -top-2 -right-4 `}
                    />
                  )} */}
                  <hr className="border mt-[10px] border-primary w-1/2 absolute -bottom-[11px] translate-x-1/2  group-data-[state=active]:block hidden" />
                </span>
              </div>
            </TabsTrigger>
            <TabsTrigger
              className="mr-[42px] relative group"
              value="myNetwork"
              // onClick={() => navigate(`/dashboard/university/applications`)}
            >
              My Network
              <hr className="border mt-[10px] border-primary w-1/2 absolute -bottom-[11px] translate-x-1/2  group-data-[state=active]:block hidden" />
            </TabsTrigger>
          </TabsList>
          <hr className="w-full  border mt-[10px] border-[#D9D9D9]" />

          {false ? (
            <div className="w-full">
              <Loader className={"mx-auto w-28"} />
            </div>
          ) : (
            <TabsContent value="jobs">
              <Jobs/>
            </TabsContent>
          )}
          <TabsContent value="savedJobs">
            Saved Jobs
          </TabsContent>
          <TabsContent value="myNetwork">
            My Network
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CareerDashboard;
