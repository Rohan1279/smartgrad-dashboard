import axios from "@/api/axios";
import CalenderButton from "@/components/Calendly/CalenderButton";
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
  const [currentRecommendationData, setCurrentRecommendationData] = useState({});
  const navigate = useNavigate();
  
  
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
      });
  }, [setHasBooking]);

  return (
    <ScrollArea className="flex flex-col gap-4 justify-center items-center">
      <div className="flex justify-center md:justify-end my-4">
        <Button className="mr-3">Ai Summary</Button>
        {!hasBooking && (
                <Button className="flex gap-x-2">
                  <CalenderButton text="Book A Session!" cb={bookASession} />
                </Button>
              )}
        {hasBooking && <Button className="bg-[#F1662A] text-primary block md:hidden">Session Booked</Button>}
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
            currentRecommendationData={currentRecommendationData}
          />
        </ScrollArea>
      )}
    </ScrollArea>
  );
};

export default RecommendationTab;
