import axios from "@/api/axios";
import CalenderButton from "@/components/Calendly/CalenderButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StarIcon } from "lucide-react";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import Overview from "../../ApplicationTab/TabContents/Overview";
import Status from "../../ApplicationTab/TabContents/Status";
import AdmissionRequirementsTab from "./AdmissionRequirementsTab";
import { useState } from "react";
import ScoreComponent from "@/components/ScoreComponent/ScoreComponent";

const RecommendationDetailPage = ({
  hasBooking,
  setHasBooking,
  currentRecommendationData,
  tabVisible,
  setTabVisible,
}) => {
  const [summary, setSummary] = useState(undefined);
  const bookASession = () => {
    axios.post(
      "/university/bookings",
      {
        recommendation_id: currentRecommendationData?.id,
      },
      {
        params: {
          token: localStorage.getItem("token"),
        },
      }
    );
    setHasBooking(1);
  };

  const navigate = useNavigate();
  console.log(currentRecommendationData);
  const getSummary = async () => {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant.",
          },
          {
            role: "user",
            content: `\n ${JSON.stringify(
              currentRecommendationData
            )} Craft a concise yet comprehensive response for prospective students exploring a specific university programme. Start with a captivating introduction to the programme, followed by a compelling statement on its importance. Provide a brief overview of the programme's details and opportunities. Clarify academic and language requirements succinctly. Highlight potential career paths and living costs briefly. Showcase notable alumni briefly. Include an intriguing programme-related fact to engage applicants. Conclude with a call to action or final remark encouraging further exploration or application.`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer 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`,
        },
      }
    );
    console.log(response);
    setSummary(response?.data?.choices[0]?.message?.content);
  };
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
              {/* <div className="flex items-center ">
                {[...Array(5)].map((_, i) => {
                  return i < currentRecommendationData?.score ? (
                    <StarIcon
                      key={i}
                      className="text-yellow-400 fill-yellow-400 h-4 w-4"
                    />
                  ) : (
                    <StarIcon
                      key={i}
                      className="text-gray-300 fill-gray-300h-4 w-4"
                    />
                  );
                })}
              </div> */}
              <ScoreComponent score={currentRecommendationData?.score} />

              {hasBooking === 0 && (
                <div className="flex gap-x-2">
                  <CalenderButton text="Apply Now!" cb={bookASession} />
                </div>
              )}
            </div>
          </div>
          <div className="z-40">
            {!tabVisible && (
              <button onClick={() => setTabVisible(true)}>
                <ImCancelCircle className="w-[22px] h-[22px] absolute top-[15px] right-[30px] rounded-full text-black bg-white" />
              </button>
            )}
            <button
              onClick={getSummary}
              className=" bg-primary rounded-2xl text-white px-5 py-2  hidden mmd:block mr-[58px]"
            >
              Summary
            </button>
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
            <TabsTrigger
              className="mr-[42px] relative group"
              value="ai-summary"
            >
              AI Summary
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
          <TabsContent value="ai-summary">
            {" "}
            <p>{summary}</p>{" "}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RecommendationDetailPage;
