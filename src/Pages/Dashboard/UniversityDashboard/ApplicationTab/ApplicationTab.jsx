import React from "react";
import ApplicationCard from "./ApplicationCard";
import ApplicatonDetailPage from "./ApplicatonDetailPage";

const ApplicationTab = () => {
  const universitiesData = [
    {
      id: "1",
      subject: "Master of Business Administration",
      name: "Southeast Minnesota State University",
      rating: 4,
      applicationDate: "June 23, 2023",
      applicationId: "30459",
      status: "Application In-review",
      universityImage: "path_to_image_1.jpg",
    },
    {
      id: "2",
      subject: "Master of Business Administration",
      name: "Southeast Minnesota State University",
      rating: 4,
      applicationDate: "June 23, 2023",
      applicationId: "30460",
      status: "Application In-review",
      universityImage: "path_to_image_2.jpg",
    },
    {
      id: "3",
      subject: "Master of Business Administration",
      name: "Southeast Minnesota State University",
      rating: 4,
      applicationDate: "June 23, 2023",
      applicationId: "30461",
      status: "Application In-review",
      universityImage: "path_to_image_3.jpg",
    },
  ];

  return (
    <div className="py-4 rounded-xl  flex flex-col space-y-3">
      {/* {universitiesData?.map((university, idx) => {
        return <ApplicationCard key={idx} university={university} />;
      })} */}
      <ApplicatonDetailPage />
    </div>
  );
};

export default ApplicationTab;
