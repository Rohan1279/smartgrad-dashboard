import axios from "@/api/axios";
import RecommendationCard from "@/components/Dashboard/RecommendationCard/RecommendationCard";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RecommendationDetailPage from "./RecommendationDetailPage/RecommendationDetailPage";

const RecommendationTab = ({ hasBooking, setHasBooking }) => {
  const { id } = useParams();
  const [tabVisible, setTabVisible] = useState(true);
  const [allRecommendationData, setAllRecommendationData] = useState([]);

  const [currentRecommendationData, setCurrentRecommendationData] = useState(
    allRecommendationData?.find((item) => item?.id === id)
  );
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/university/recommendations", {
        params: {
          token: localStorage.getItem("token"),
        },
      })
      .then(({ data }) => {
        setAllRecommendationData(data?.data);
        setHasBooking(data?.has_booking);
      });
  }, []);

  return (
    <ScrollArea className="flex flex-col gap-4 justify-center items-center max-h-screen">
      <div className="flex justify-center md:justify-end my-4">
        <Button className="mr-3">Ai Summary</Button>
        <Button>Book A session</Button>
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      </div>
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
          hasBooking={hasBooking}
          setHasBooking={setHasBooking}
          currentRecommendationData={currentRecommendationData}
        />
      )}
    </ScrollArea>
  );
};

export default RecommendationTab;
