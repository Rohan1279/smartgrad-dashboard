import { useEffect, useState } from "react";
import DashboardAvatar from "/assets/images/dashboard/dashboard-avatar.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Form from "../../../components/Form/Form";
import { Link, useNavigate, useParams } from "react-router-dom";
import RecommendationCard from "@/components/Dashboard/RecommendationCard/RecommendationCard";
import ApplicationTab from "./ApplicationTab/ApplicationTab";
const UniversityDashboard = () => {
  const { id } = useParams();
  // console.log("id", id);
  const [formManager, setFormManager] = useState({});
  const [currentTab, setCurrentTab] = useState(id);
  const [currentForm, setCurrentForm] = useState({});
  // console.log("currentTab", currentTab);
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

  useEffect(() => {
    fetch("/university-dashboard-forms.json")
      .then((res) => res.json())
      .then((res) => {
        setFormManager(res?.data);
        // console.log(formManager);
        setCurrentTab(
          () =>
            res?.data?.form.find((item) => item?.form_id === parseInt(id))
              ?.form_id || res.data.form[0].form_id
        );
        // default sets the first form or the first form
        setCurrentForm(
          () =>
            res?.data?.form.find((item) => item?.form_id === parseInt(id)) ||
            res.data.form[0]
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
      </div>
      <div className=" min-h-screen  bg-[#F5F5F5] mt-5 px-4 sm:px-9 py-5 rounded-xl">
        <Tabs defaultValue="apply-form" className="">
          <TabsList>
            <TabsTrigger
              className="mr-[42px] relative group"
              value="apply-form"
            >
              Apply
              <hr className="border mt-[10px] border-[#09D5D7] w-1/2 absolute -bottom-[11px] translate-x-1/2 group-data-[state=active]:block hidden" />
            </TabsTrigger>
            <TabsTrigger
              className="mr-[42px] relative group"
              value="recommended"
            >
              {/* Rocommended by{" "}
              <span className="text-[#09D5D7] font-bold">smart</span>
              <span className="font-bold">grad</span> */}
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

          <TabsContent value="apply-form">
            <Form
              currentForm={currentForm}
              setCurrentForm={setCurrentForm}
              formManager={formManager}
              currentTab={currentTab}
              id={currentTab}
              setFormManager={setFormManager}
            />
          </TabsContent>
          <TabsContent value="recommended">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center items-center mt-10 ">
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
