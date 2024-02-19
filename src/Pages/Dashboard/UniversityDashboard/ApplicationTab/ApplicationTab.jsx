import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import ApplicationCard from "./ApplicationCard";
import Documents from "./TabContents/Documents";
import Information from "./TabContents/Overview";
import Status from "./TabContents/Status";
import UniversityBackgroundImage from "/assets/images/dashboard/university-background.png";

const ApplicationTab = () => {
  const [tabVisible, setTabVisible] = useState(true);
  const universitiesData = [
    {
      id: "1",
      subject: "Master of Business Administration",
      name: "Southeast Minnesota State University",
      rating: 4,
      applicationDate: "June 23, 2023",
      applicationId: "30459",
      status: "Application In-review",
      universityImage: "/assets/images/dashboard/university-logo.png",
      duration: "2 years",
      tuition_fees: "USD 20000",
      start_date: "August 2023",
      deadline_date: "December 2023",
    },
    {
      id: "2",
      subject: "Master of Business Administration",
      name: "Southeast Minnesota State University",
      rating: 4,
      applicationDate: "June 23, 2023",
      applicationId: "30459",
      status: "Application In-review",
      universityImage: "/assets/images/dashboard/university-logo.png",
      duration: "2 years",
      tuition_fees: "USD 20000",
      start_date: "August 2023",
      deadline_date: "December 2023",
    },
    {
      id: "3",
      subject: "Master of Business Administration",
      name: "Southeast Minnesota State University",
      rating: 4,
      applicationDate: "June 23, 2023",
      applicationId: "30459",
      status: "Application In-review",
      universityImage: "/assets/images/dashboard/university-logo.png",
      duration: "2 years",
      tuition_fees: "USD 20000",
      start_date: "August 2023",
      deadline_date: "December 2023",
    },
  ];


  return (
    <div className="py-4 rounded-xl  flex flex-col space-y-3 text-primary ">
      <Tabs defaultValue="" className="">
        {universitiesData?.map((university, idx) => {
          return (
            <div key={idx}>
              <TabsList className={`${tabVisible ? "block" : "hidden"}`}>
                <TabsTrigger
                  key={idx}
                  className="w-full mb-5"
                  value={university.applicationId}
                  onMouseDown={() => setTabVisible((prev) => !prev)}
                >
                  <ApplicationCard university={university} />
                </TabsTrigger>
              </TabsList>
              <TabsContent value={university?.applicationId} className={""}>
                <div className="">
                  <div className=" bg-white p-4 rounded-xl ">
                    <div
                      style={{
                        backgroundImage: `url(${UniversityBackgroundImage})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                      className="flex relative items-center space-x-4  h-[252px] rounded-[10px] overflow-hidden"
                    >
                      <div className="bg-gradient-to-r from-white to-white/10 absolute w-full h-full z-0"></div>
                      <div className="z-10">
                        <img
                          alt="University Logo"
                          className="h-16 w-16 rounded-full"
                          src={university.universityImage}
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

                          <p className="text-sm font-medium italic">
                            Application ID : {university?.applicationId}
                          </p>
                          <p className="text-sm  italic">
                            status : {university?.status}
                          </p>
                        </div>
                      </div>
                    </div>

                    <Tabs defaultValue="information" className="mt-10">
                      <TabsList>
                        <TabsTrigger
                          className="mr-[42px] relative group"
                          value="information"
                        >
                          Information
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

                      <TabsContent value="information" className={"pt-8"}>
                        <Information universityData={university} />
                      </TabsContent>
                      <TabsContent value="documents">
                        <Documents  />
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

      {/* <ApplicatonDetailPage /> */}
    </div>
  );
};

export default ApplicationTab;

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
