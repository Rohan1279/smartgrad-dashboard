import { useContext, useEffect, useState } from "react";
import DashboardAvatar from "/assets/images/dashboard/dashboard-avatar.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Form from "../../../components/Form/Form";
import { Link, useNavigate, useParams } from "react-router-dom";
import ApplicationTab from "./ApplicationTab/ApplicationTab";
import axios from "@/api/axios";
import SearchLockIcon from "/assets/images/dashboard/search-lock.png";
import RecommendationTab from "./RecommendationTab/RecommendationTab";
import { Authcontext } from "@/contexts/AuthContextProvider";
const UniversityDashboard = () => {
  const { id } = useParams();

  const [formManager, setFormManager] = useState({});
  const [currentTab, setCurrentTab] = useState(id);
  const [currentForm, setCurrentForm] = useState({});
  const [isUserEligible, setIsUserEligible] = useState(false);
  const [isEligibilityLoading, setIsEligibilityLoading] = useState(false);
  const [recommendationData, setRecommendationData] = useState([]);
  const { user } = useContext(Authcontext);

  const navigate = useNavigate();

  const formCallbacks = {
    success: () => setIsUserEligible(false),
    error: () => setIsUserEligible(true),
  };

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

  useEffect(() => {
    axios
      .get("/university/eligible", {
        params: {
          token: localStorage.getItem("token"),
        },
      })
      .then(({ data }) => {
        setIsUserEligible(data?.status);
      });

    // MAKE THIS A CUSTOM HOOK FOR FORM MANGER
    axios
      .get("/form/uni-apply", {
        params: {
          token: localStorage.getItem("token"),
        },
      })
      .then(({ data }) => {
        setFormManager(data?.data);
        setCurrentTab(
          () =>
            data?.data?.form.find((item) => item?.form_id === parseInt(id))
              ?.form_id || data.data.form[0].form_id
        );
        // default sets the first form or the first form
        setCurrentForm(
          () =>
            data?.data?.form.find((item) => item?.form_id === parseInt(id)) ||
            data?.data.form[0]
        );
      });
  }, []);

  return (
    <div className="text-primary min-h-fit">
      <div className="hidden mmd:flex flex-col justify-center md:flex-row md:justify-start items-center space-x-[34px] shadow-md bg-white rounded-[20px] pl-[34px] py-[24px]">
        <img src={DashboardAvatar} alt="avatar" className="w-[88px]" />

        <div className="text-center md:text-left">
          <h1 className="text-[40px] font-bold ">Hello {user?.name},</h1>
          <p className="">
            Your Smartgrad dashboard streamlines the application process,
            offering personalized university recommendations. Simplify your
            journey to higher education with tailored options that align with
            your ambitions and preferences.
          </p>
        </div>
      </div>
      <div className=" h-fit bg-white mt-5 px-4 sm:px-9 py-5 rounded-xl">
        <Tabs defaultValue="search-form" className="">
          <TabsList>
            <TabsTrigger
              className="mr-[42px] relative group"
              value="search-form"
            >
              Search
              <hr className="border mt-[10px] border-primary w-1/2 absolute -bottom-[11px] translate-x-1/2 group-data-[state=active]:block hidden" />
            </TabsTrigger>
            <TabsTrigger
              className="mr-[42px] relative group"
              value="recommended"
              disabled={isUserEligible}
            >
              Magic Recommendations
              {/*  */}
              {recommendationData?.length > 0 &&
                recommendationData?.length !== undefined && (
                  <span className="w-3 h-3 absolute rounded-full bg-[#F1662A] text-[9px] text-center text-white">
                    {recommendationData.length}
                  </span>
                )}
              <hr className="border mt-[10px] border-primary w-1/2 absolute -bottom-[11px] translate-x-1/2  group-data-[state=active]:block hidden" />
            </TabsTrigger>
            <TabsTrigger
              className="mr-[42px] relative group"
              value="applications"
            >
              Applications
              <hr className="border mt-[10px] border-primary w-1/2 absolute -bottom-[11px] translate-x-1/2  group-data-[state=active]:block hidden" />
            </TabsTrigger>
          </TabsList>
          <hr className="w-full  border mt-[10px] border-[#D9D9D9]" />

          <TabsContent value="search-form">
            {isUserEligible ? (
              <Form
                currentForm={currentForm}
                setCurrentForm={setCurrentForm}
                formManager={formManager}
                currentTab={currentTab}
                id={currentTab}
                setFormManager={setFormManager}
                cb={formCallbacks}
              />
            ) : (
              <div className=" flex flex-col items-center my-[70px]">
                <img src={SearchLockIcon} alt="" className="w-[520px] " />
                <p className="mt-4  w-full md:w-1/2  text-center">
                  Smartgrad is looking for best universities that matches your
                  interest. Thank you for your patience and be in touch.
                </p>
                <button className="bg-primary text-white px-5 py-3 rounded-[10px] mt-4">
                  <Link to="/dashboard/home">Back To Dashboard</Link>
                </button>
              </div>
            )}
          </TabsContent>
          <TabsContent value="recommended">
            <RecommendationTab />
          </TabsContent>
          {/* pass added university data later */}
          <TabsContent value="applications">
            <ApplicationTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UniversityDashboard;
