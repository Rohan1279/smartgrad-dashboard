import axios from "@/api/axios";
import RecommendationCard from "@/components/Dashboard/RecommendationCard/RecommendationCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RecommendationDetailPage from "./RecommendationDetailPage/RecommendationDetailPage";
import Loader from "@/components/Loader/Loader";

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
      });
  }, []);

  return (
    <div className="">
      {isRecommendationsLoading ? (
        <div className="w-full h-[400px] flex justify-center items-center">
          <Loader className={"mx-auto w-28 my-auto"} />
        </div>
      ) : (
        <ScrollArea className="flex flex-col gap-4 justify-center items-center mt-10 ">
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
      )}
    </div>
  );
};

export default RecommendationTab;
