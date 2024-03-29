import ScoreComponent from "@/components/ScoreComponent/ScoreComponent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImCancelCircle } from "react-icons/im";
import Overview from "../../ApplicationTab/TabContents/Overview";
import Status from "../../ApplicationTab/TabContents/Status";
import AdmissionRequirementsTab from "./AdmissionRequirementsTab";

const RecommendationDetailPage = ({
  currentRecommendationData,
  tabVisible,
  setTabVisible,
}) => {
  console.log(currentRecommendationData);

  return (
    <div className="text-primary">
      <div className=" bg-white rounded-xl border">
        <div
          style={{
            backgroundImage: `url(${currentRecommendationData?.university_image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="flex relative justify-between items-center space-x-4  h-[252px] rounded-t-[10px] overflow-hidden "
        >
          <div className="bg-gradient-to-r from-white from-20% to-white/10 absolute w-full h-full z-0"></div>
          <div className="z-10 pl-[58px] flex items-center  gap-x-[13px]">
            <img
              alt="University Logo"
              className="w-[85px] rounded-full"
              src={currentRecommendationData?.university_logo}
              style={{
                aspectRatio: "50/50",
                objectFit: "cover",
              }}
            />
            <div>
              <h2 className="text-[16px] font-semibold">
                {currentRecommendationData?.programme}
              </h2>
              <p className="text-[12px] ">
                {currentRecommendationData?.university}
              </p>
              <ScoreComponent score={currentRecommendationData?.score} />

              {/* {!hasBooking && (
                <div className="flex gap-x-2">
                  <CalenderButton text="Apply Now!" cb={bookASession} />
                </div>
              )} */}
            </div>
          </div>
          <div className="z-40">
            {!tabVisible && (
              <button onClick={() => setTabVisible(true)}>
                <ImCancelCircle className="w-[22px] h-[22px] absolute top-[15px] right-[30px] rounded-full text-black bg-white" />
              </button>
            )}
          </div>
        </div>

        <Tabs defaultValue="overview" className="mt-10 px-[40px]">
          <TabsList>
            <TabsTrigger className="mr-[42px] relative group" value="overview">
              Overview
              <hr className="border mt-[10px] border-primary w-1/2 absolute -bottom-[11px] translate-x-1/2 group-data-[state=active]:block hidden" />
            </TabsTrigger>
            <TabsTrigger
              className="mr-[42px] relative group"
              value="admission-requirements"
            >
              Admission Requirements
              <hr className="border mt-[10px] border-primary w-1/2 absolute -bottom-[11px] translate-x-1/2  group-data-[state=active]:block hidden" />
            </TabsTrigger>
          </TabsList>
          <hr className="w-full  border mt-[10px] border-[#D9D9D9]" />

          <TabsContent value="overview" className={"pt-8"}>
            <Overview universityData={currentRecommendationData} />
          </TabsContent>
          <TabsContent value="admission-requirements">
            <AdmissionRequirementsTab
              reuirementsData={currentRecommendationData?.requirements}
            />
          </TabsContent>
          <TabsContent value="program-experts">
            <Status />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RecommendationDetailPage;
