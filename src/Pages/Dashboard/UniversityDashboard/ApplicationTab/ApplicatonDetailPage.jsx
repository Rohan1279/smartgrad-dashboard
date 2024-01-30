import { useParams } from "react-router-dom";
import UniversityImage from "/assets/images/dashboard/university-logo.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Information from "./TabContents/Information";
import Documents from "./TabContents/Documents";
import Status from "./TabContents/Status";

const ApplicatonDetailPage = () => {
  const universityData = {
    id: "1",
    subject: "Master of Business Administration",
    name: "Southeast Minnesota State University",
    rating: 4,
    applicationDate: "June 23, 2023",
    applicationId: "30459",
    status: "Application In-review",
    universityImage: "path_to_image_1.jpg",
  };
  const { id } = useParams();
  console.log("id", id);
  return (
    <div className="">
      {/* MAKE 2 DIVS HERE */}
      <div className=" bg-white p-4 rounded-xl ">
        <div className="flex items-center space-x-4">
          <img
            alt="University Logo"
            className="h-16 w-16 rounded-full"
            src={UniversityImage}
            style={{
              aspectRatio: "50/50",
              objectFit: "cover",
            }}
          />
          <div>
            <h2 className="text-lg font-semibold">{universityData?.subject}</h2>
            <p className="text-sm text-gray-600">{universityData?.name}</p>
            <div className="flex items-center mt-1">
              <StarIcon className="text-yellow-400 h-5 w-5" />
              <StarIcon className="text-yellow-400 h-5 w-5" />
              <StarIcon className="text-yellow-400 h-5 w-5" />
              <StarIcon className="text-yellow-400 h-5 w-5" />
              <StarIcon className="text-gray-300 h-5 w-5" />
            </div>

            <p className="text-sm font-medium italic">
              Application ID : {universityData?.applicationId}
            </p>
            <p className="text-sm  italic">status : {universityData?.status}</p>
          </div>
        </div>
        {/* ADD STATUS COMPONENT HERE */}

        <Tabs defaultValue="information" className="mt-10">
          <TabsList>
            <TabsTrigger
              className="mr-[42px] relative group"
              value="information"
            >
              Information
              <hr className="border mt-[10px] border-[#09D5D7] w-1/2 absolute -bottom-[11px] translate-x-1/2 group-data-[state=active]:block hidden" />
            </TabsTrigger>
            <TabsTrigger className="mr-[42px] relative group" value="documents">
              Documents
              <hr className="border mt-[10px] border-[#09D5D7] w-1/2 absolute -bottom-[11px] translate-x-1/2  group-data-[state=active]:block hidden" />
            </TabsTrigger>
            <TabsTrigger className="mr-[42px] relative group" value="status">
              Status
              <hr className="border mt-[10px] border-[#09D5D7] w-1/2 absolute -bottom-[11px] translate-x-1/2  group-data-[state=active]:block hidden" />
            </TabsTrigger>
          </TabsList>
          <hr className="w-full  border mt-[10px] border-[#D9D9D9]" />

          <TabsContent value="information" className={"pt-8"}>
            <Information />
          </TabsContent>
          <TabsContent value="documents">
            <Documents />
          </TabsContent>
          <TabsContent value="status">
            <Status />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ApplicatonDetailPage;

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
