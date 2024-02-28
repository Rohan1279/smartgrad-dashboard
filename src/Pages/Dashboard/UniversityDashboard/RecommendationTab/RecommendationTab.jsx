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
  const [isRecommendationsLoading, setIsRecommendationsLoading] =
    useState(false);
  const [currentRecommendationData, setCurrentRecommendationData] = useState(
    allRecommendationData?.find((item) => item?.id === id)
  );
  const navigate = useNavigate();

  useEffect(() => {
    setIsRecommendationsLoading(true);
    axios
      .get("/university/recommendations", {
        params: {
          token: localStorage.getItem("token"),
        },
      })
      .then(({ data }) => {
        setIsRecommendationsLoading(false);
        setAllRecommendationData(data?.data);
        setHasBooking(data?.has_booking);
        setCurrentRecommendationData(
          data?.data?.find((item) => item?.id === id)
        );
      });
  }, [id, setHasBooking]);

  return (
    <ScrollArea className="flex flex-col gap-4 justify-center items-center">
      <div className="flex justify-center md:justify-end my-4">
        <Button className="mr-3">Ai Summary</Button>
        <Button>Book A session</Button>
      </div>
      {tabVisible ? (
        allRecommendationData?.map((university, idx) => (
          <div
            key={idx}
            onClick={() => {
              navigate(`/dashboard/university/recommendation/${university?.id}`);
              setTabVisible(false);
              setCurrentRecommendationData(university);
            }}
          >
            <RecommendationCard universityData={university} />
          </div>
        ))
      ) : (
        <ScrollArea className="flex flex-col gap-4 justify-center items-center mt-10">
          <RecommendationDetailPage
            tabVisible={tabVisible}
            setTabVisible={setTabVisible}
            hasBooking={hasBooking}
            setHasBooking={setHasBooking}
            currentRecommendationData={currentRecommendationData}
          />
        </ScrollArea>
      )}
    </ScrollArea>
  );
};

export default RecommendationTab;
