import RecommendationCard from "@/components/Dashboard/RecommendationCard/RecommendationCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useEffect, useState } from "react";
import SearchLockIcon from "/assets/images/dashboard/search-lock.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UniversityImage from "/assets/images/dashboard/university-logo.png";
import UniversityBackgroundImage from "/assets/images/dashboard/university-background.png";
import { StarIcon } from "lucide-react";
import Overview from "../ApplicationTab/TabContents/Overview";
import Documents from "../ApplicationTab/TabContents/Documents";
import Status from "../ApplicationTab/TabContents/Status";
import { ImCancelCircle } from "react-icons/im";
import axios from "@/api/axios";

const RecommendationTab = () => {
  const [tabVisible, setTabVisible] = useState(true);
  const [recommendationData, setRecommendationData] = useState([]);

  useEffect(() => {
    axios
      .get("/university/recommendations", {
        params: {
          token: localStorage.getItem("token"),
        },
      })
      .then(({ data }) => {
        setRecommendationData(data?.data);
      });
  }, []);

  const recommendationDataDummy = [
    {
      id: "1",
      subject: "Master of Business Administration",
      name: "Southeast Minnesota State University",
      rating: 4,
      applicationDate: "June 23, 2023",
      applicationId: "30459",
      status: "Application In-review",
      universityImage: "path_to_image_1.jpg",
    },
    {
      id: "2",
      subject: "Master of Business Administration",
      name: "Southeast Minnesota State University",
      rating: 4,
      applicationDate: "June 23, 2023",
      applicationId: "30460",
      status: "Application In-review",
      universityImage: "path_to_image_2.jpg",
    },
    {
      id: "3",
      subject: "Master of Business Administration",
      name: "Southeast Minnesota State University",
      rating: 4,
      applicationDate: "June 23, 2023",
      applicationId: "30461",
      status: "Application In-review",
      universityImage: "path_to_image_3.jpg",
    },
  ];
  // add the useEffects here
  return (
    <ScrollArea className="flex flex-col gap-4 justify-center items-center mt-10 max-h-screen">
      <Tabs defaultValue="" className="">
        {recommendationData?.map((university, idx) => {
          return (
            <div key={idx}>
              <TabsList className={`${tabVisible ? "block" : "hidden"}`}>
                <TabsTrigger
                  key={idx}
                  className="w-full mb-5"
                  value={university.applicationId}
                  onMouseDown={() => setTabVisible((prev) => !prev)}
                >
                  <RecommendationCard universityData={university} />
                </TabsTrigger>
              </TabsList>
              <TabsContent value={university.applicationId} className={""}>
                <div className="">
                  <div className=" bg-white rounded-xl border">
                    <div
                      style={{
                        backgroundImage: `url(${UniversityBackgroundImage})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                      className="flex relative items-center space-x-4  h-[252px] rounded-t-[10px] overflow-hidden "
                    >
                      <div className="bg-gradient-to-r from-white to-white/10 absolute w-full h-full z-0"></div>
                      {!tabVisible && (
                        <button onClick={() => setTabVisible(true)}>
                          <ImCancelCircle className="w-[22px] h-[22px] absolute top-[15px] right-[30px] rounded-full text-black bg-white" />
                        </button>
                      )}
                      <div className="z-10">
                        <img
                          alt="University Logo"
                          className="h-16 w-16 rounded-full"
                          src={UniversityImage}
                          style={{
                            aspectRatio: "50/50",
                            objectFit: "cover",
                          }}
                        />
                        <div>
                          <h2 className="text-lg font-semibold">
                            {university?.subject}
                          </h2>
                          <p className="text-sm text-gray-600">
                            {university?.name}
                          </p>
                          <div className="flex items-center mt-1">
                            <StarIcon className="text-yellow-400 h-5 w-5" />
                            <StarIcon className="text-yellow-400 h-5 w-5" />
                            <StarIcon className="text-yellow-400 h-5 w-5" />
                            <StarIcon className="text-yellow-400 h-5 w-5" />
                            <StarIcon className="text-gray-300 h-5 w-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ADD STATUS COMPONENT HERE */}

                    <Tabs defaultValue="overview" className="mt-10 px-[40px]">
                      <TabsList>
                        <TabsTrigger
                          className="mr-[42px] relative group"
                          value="overview"
                        >
                          Overview
                          <hr className="border mt-[10px] border-primary w-1/2 absolute -bottom-[11px] translate-x-1/2 group-data-[state=active]:block hidden" />
                        </TabsTrigger>
                        <TabsTrigger
                          className="mr-[42px] relative group"
                          value="documents"
                        >
                          Documents
                          <hr className="border mt-[10px] border-primary w-1/2 absolute -bottom-[11px] translate-x-1/2  group-data-[state=active]:block hidden" />
                        </TabsTrigger>
                        <TabsTrigger
                          className="mr-[42px] relative group"
                          value="status"
                        >
                          Status
                          <hr className="border mt-[10px] border-primary w-1/2 absolute -bottom-[11px] translate-x-1/2  group-data-[state=active]:block hidden" />
                        </TabsTrigger>
                      </TabsList>
                      <hr className="w-full  border mt-[10px] border-[#D9D9D9]" />

                      <TabsContent value="overview" className={"pt-8"}>
                        <Overview />
                      </TabsContent>
                      <TabsContent value="documents">
                        <Documents />
                      </TabsContent>
                      <TabsContent value="status">
                        <Status />
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </TabsContent>
            </div>
          );
        })}
      </Tabs>
      {/* {recommendationDataDummy.length === 0 ? (
        <div className="col-span-full flex flex-col items-center my-[70px]">
          <img src={SearchLockIcon} alt="" className="w-[520px] " />
          <p className="mt-4  w-full md:w-1/2  text-center">
            Smartgrad is looking for best universities that matches your
            interest. Thank you for your patience and be in touch.
          </p>
        </div>
      ) : (
        recommendationDataDummy.map((item, idx) => {
          return <RecommendationCard key={idx} university={item} />;
        })
      )} */}
    </ScrollArea>
  );
};

export default RecommendationTab;
