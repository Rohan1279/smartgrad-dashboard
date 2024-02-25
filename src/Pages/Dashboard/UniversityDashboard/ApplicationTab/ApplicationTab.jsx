import axios from "@/api/axios";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import ApplicationCard from "./ApplicationCard";
import Documents from "./TabContents/Documents";
import Information from "./TabContents/Overview";
import Status from "./TabContents/Status";

const ApplicationTab = () => {
  const [selectedTab, setSelectedTab] = useState(null);
  const [universitiesData, setUniversitiesData] = useState(null);
  
  useEffect(() => {
    axios
      .get("/university/applications", {
        params: {
          token: localStorage.getItem("token"),
        },
      })
      .then(({ data }) => {
        setUniversitiesData(data.data);
      });
  }, []);


  const handleTabClick = (applicationId) => {
    setSelectedTab(applicationId);
  };

  const handleCloseDetails = () => {
    setSelectedTab(null);
  };

  return (
    <div className="py-4 rounded-xl  flex flex-col space-y-3 text-primary ">
      <Tabs defaultValue="" className="">
        {universitiesData?.map((application, idx) => {
          return (
            <div key={idx}>
              <TabsList className={`${selectedTab ? "hidden" : "block"}`}>
                <TabsTrigger
                  key={idx}
                  className="w-full mb-5"
                  value={application.id}
                  onMouseDown={() => handleTabClick(application.id)}
                >
                  <ApplicationCard application={application} />
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value={application?.id}
                className={
                  selectedTab === application?.id ? "" : "hidden"
                }
              >
                <div className="">
                  <div className=" bg-white p-4 rounded-xl ">
                    <div
                      style={{
                        backgroundImage: `url(${application?.university_image})`,
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
                          className="h-16 w-16 rounded-full relative"
                          src={application?.university_logo}
                          style={{
                            aspectRatio: "50/50",
                            objectFit: "cover",
                          }}
                        />
                        <div>
                          <h2 className="text-lg font-semibold">
                            {application?.programme}
                          </h2>
                          <p className="text-sm text-gray-600">
                            {application?.university}
                          </p>
                          <div className="flex items-center mt-1">
                            <StarIcon className="text-yellow-400 h-5 w-5" />
                            <StarIcon className="text-yellow-400 h-5 w-5" />
                            <StarIcon className="text-yellow-400 h-5 w-5" />
                            <StarIcon className="text-yellow-400 h-5 w-5" />
                            <StarIcon className="text-gray-300 h-5 w-5" />
                          </div>

                          <p className="text-sm font-medium italic">
                            Application ID : {application?.id}
                          </p>
                          <p className="text-sm  italic">
                            status : {application?.status}
                          </p>
                        </div>
                        <IoIosCloseCircle className="text-white absolute top-2 right-2 border-2 rounded-full border-primary" size={30} onClick={handleCloseDetails} />
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
                          Requirements
                          <hr className="border mt-[10px] border-primary w-1/2 absolute -bottom-[11px] translate-x-1/2  group-data-[state=active]:block hidden" />
                        </TabsTrigger>
                        <TabsTrigger
                          className="mr-[42px] relative group"
                          value="status"
                        >
                          Checklist
                          <hr className="border mt-[10px] border-primary w-1/2 absolute -bottom-[11px] translate-x-1/2  group-data-[state=active]:block hidden" />
                        </TabsTrigger>
                      </TabsList>
                      <hr className="w-full  border mt-[10px] border-[#D9D9D9]" />

                      <TabsContent value="information" className={"pt-8"}>
                        <Information universityData={application} />
                      </TabsContent>
                      <TabsContent value="documents">
                        <Documents documents={application?.requirements} applicationId={application.id} />
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
