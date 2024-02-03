import { useEffect, useState } from "react";
import DashboardAvatar from "/assets/images/dashboard/dashboard-avatar.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Form from "../../../components/Form/Form";
import { Link, useNavigate, useParams } from "react-router-dom";
import RecommendationCard from "@/components/Dashboard/RecommendationCard/RecommendationCard";
import ApplicationTab from "./ApplicationTab/ApplicationTab";
import axios from "@/api/axios";
import SearchLockIcon from "/assets/images/dashboard/search-lock.png";
const UniversityDashboard = () => {
  const { id } = useParams();

  const [formManager, setFormManager] = useState({});
  const [currentTab, setCurrentTab] = useState(id);
  const [currentForm, setCurrentForm] = useState({});
  const [isUserEligible, setIsUserEligible] = useState(false);
  const [isEligibilityLoading, setIsEligibilityLoading] = useState(false);

  const navigate = useNavigate();
  const recommendationData = [
    {
      name: "Southeast Minnesota State University",
      subject: "Master of Business Administration",
      academic_expense: "USD 333/month",
      card_image: "https://picsum.photos/400",
      cost: "USD 8888/year",
      job_permit: "Part-time",
      logo: "https://picsum.photos/200",
      offer_rate: "20%",
      ratings: 4.5,
    },
    {
      name: "Southeast Minnesota State University",
      subject: "Master of Business Administration",
      academic_expense: "USD 333/month",
      card_image: "https://picsum.photos/400",
      cost: "USD 8888/year",
      job_permit: "Part-time",
      logo: "https://picsum.photos/200",
      offer_rate: "20%",
      ratings: 4.5,
    },
    {
      name: "Southeast Minnesota State University",
      subject: "Master of Business Administration",
      academic_expense: "USD 333/month",
      card_image: "https://picsum.photos/400",
      cost: "USD 8888/year",
      job_permit: "Part-time",
      logo: "https://picsum.photos/200",
      offer_rate: "20%",
      ratings: 4.5,
    },
    {
      name: "Southeast Minnesota State University",
      subject: "Master of Business Administration",
      academic_expense: "USD 333/month",
      card_image: "https://picsum.photos/400",
      cost: "USD 8888/year",
      job_permit: "Part-time",
      logo: "https://picsum.photos/200",
      offer_rate: "20%",
      ratings: 4.5,
    },
    {
      name: "Southeast Minnesota State University",
      subject: "Master of Business Administration",
      academic_expense: "USD 333/month",
      card_image: "https://picsum.photos/400",
      cost: "USD 8888/year",
      job_permit: "Part-time",
      logo: "https://picsum.photos/200",
      offer_rate: "20%",
      ratings: 4.5,
    },
    {
      name: "Southeast Minnesota State University",
      subject: "Master of Business Administration",
      academic_expense: "USD 333/month",
      card_image: "https://picsum.photos/400",
      cost: "USD 8888/year",
      job_permit: "Part-time",
      logo: "https://picsum.photos/200",
      offer_rate: "20%",
      ratings: 4.5,
    },
  ];
  const formCallbacks = {
    success: () => setIsUserEligible(false),
    error: () => setIsUserEligible(true),
  };

  useEffect(() => {}, []);

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
    <div className="text-[#595959] min-h-screen">
      <div className="hidden md:flex flex-col justify-center md:flex-row md:justify-start items-center space-x-12">
        <img src={DashboardAvatar} alt="avatar" className="w-40" />

        <div className="text-center md:text-left">
          <h1 className="text-[40px] font-bold ">My Dashboard</h1>
          <p className="pt-2">
            Your Smartgrad dashboard streamlines the application process,
            offering personalized university recommendations. Simplify your
            journey to higher education with tailored options that align with
            your ambitions and preferences.
          </p>
        </div>
      </div>
      <div className=" h-fit bg-[#F5F5F5] mt-5 px-4 sm:px-9 py-5 rounded-xl">
        <Tabs defaultValue="search-form" className="">
          <TabsList>
            <TabsTrigger
              className="mr-[42px] relative group"
              value="search-form"
            >
              Search
              <hr className="border mt-[10px] border-[#09D5D7] w-1/2 absolute -bottom-[11px] translate-x-1/2 group-data-[state=active]:block hidden" />
            </TabsTrigger>
            <TabsTrigger
              className="mr-[42px] relative group"
              value="recommended"
            >
              Magic Recommendations
              <hr className="border mt-[10px] border-[#09D5D7] w-1/2 absolute -bottom-[11px] translate-x-1/2  group-data-[state=active]:block hidden" />
            </TabsTrigger>
            <TabsTrigger
              className="mr-[42px] relative group"
              value="applications"
            >
              Applications
              <hr className="border mt-[10px] border-[#09D5D7] w-1/2 absolute -bottom-[11px] translate-x-1/2  group-data-[state=active]:block hidden" />
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
                <p className="mt-4 w-1/2 text-center">
                  Smartgrad is looking for best universities that matches your
                  interest. Thank you for your patience and be in touch.
                </p>
              </div>
            )}
          </TabsContent>
          <TabsContent value="recommended">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 justify-center items-center mt-10 ">
              {recommendationData.map((item, idx) => {
                return (
                  <RecommendationCard
                    key={idx}
                    name={item.name}
                    subject={item.subject}
                    academic_expense={item.academic_expense}
                    card_image={item.card_image}
                    cost={item.cost}
                    job_permit={item.job_permit}
                    logo={item.logo}
                    offer_rate={item.offer_rate}
                    ratings={item.ratings}
                  />
                );
              })}
            </div>
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
