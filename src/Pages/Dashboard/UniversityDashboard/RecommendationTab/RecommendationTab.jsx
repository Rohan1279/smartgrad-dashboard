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
import { Link, useNavigate, useParams } from "react-router-dom";
import RecommendationDetailPage from "./RecommendationDetailPage/RecommendationDetailPage";

const RecommendationTab = () => {
  const { id } = useParams();
  const [tabVisible, setTabVisible] = useState(true);
  const [allRecommendationData, setAllRecommendationData] = useState([]);
  const [currentRecommendationData, setCurrentRecommendationData] = useState(
    allRecommendationData?.find((item) => item?.id === id)
  );
  const navigate = useNavigate();
  // console.log(allRecommendationData?.find((item) => item?.id === parseInt(id)));
  // console.log(id);

  useEffect(() => {
    axios
      .get("/university/recommendations", {
        params: {
          token: localStorage.getItem("token"),
        },
      })
      .then(({ data }) => {
        setAllRecommendationData(data?.data);
      });
  }, []);
  // useEffect(() => {
  //   setTabVisible()
  // }, [])

  // const recommendationDataDummy = [
  //   {
  //     id: "1",
  //     subject: "Master of Business Administration",
  //     name: "Southeast Minnesota State University",
  //     rating: 4,
  //     applicationDate: "June 23, 2023",
  //     applicationId: "30459",
  //     status: "Application In-review",
  //     universityImage: "path_to_image_1.jpg",
  //   },
  //   {
  //     id: "2",
  //     subject: "Master of Business Administration",
  //     name: "Southeast Minnesota State University",
  //     rating: 4,
  //     applicationDate: "June 23, 2023",
  //     applicationId: "30460",
  //     status: "Application In-review",
  //     universityImage: "path_to_image_2.jpg",
  //   },
  //   {
  //     id: "3",
  //     subject: "Master of Business Administration",
  //     name: "Southeast Minnesota State University",
  //     rating: 4,
  //     applicationDate: "June 23, 2023",
  //     applicationId: "30461",
  //     status: "Application In-review",
  //     universityImage: "path_to_image_3.jpg",
  //   },
  // ];
  // add the useEffects here
  
  return (
    <ScrollArea className="flex flex-col gap-4 justify-center items-center mt-10 max-h-screen">
      {tabVisible ? (
        allRecommendationData?.map((university, idx) => {
          return (
            <div
              to={`/dashboard/university/recommendation/${university?.id}`}
              key={idx}
              onClick={() => {
                navigate(
                  `/dashboard/university/recommendation/${university?.id}`
                );
                setTabVisible(false);
                setCurrentRecommendationData(university);
              }}
            >
              <RecommendationCard universityData={university} />
            </div>
          );
        })
      ) : (
        <RecommendationDetailPage
          tabVisible={tabVisible}
          setTabVisible={setTabVisible}
          currentRecommendationData={currentRecommendationData}
        />
      )}
    </ScrollArea>
  );
};

export default RecommendationTab;
