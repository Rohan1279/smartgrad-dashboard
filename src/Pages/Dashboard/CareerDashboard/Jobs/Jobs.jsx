import { useState } from "react";
import JobCard from "./JobCard";
import JobDetails from "./JobDetails";
import jobsData from "./jobsData";

const Jobs = () => {
  const [jobDetails, setJobDetails] = useState(jobsData[0]);

  return (
    <div className="flex gap-6 py-4">
      <div className="w-2/5">
        {jobsData.map((job, index) => {
          return (
            <div key={index} onClick={()=>setJobDetails(job)}>
              <JobCard data={job} />
            </div>
          );
        })}
      </div>
      <div className="w-3/5 p-4 bg-gray-100 rounded-lg">
        {/* {jobDetails && } */}
        <JobDetails data={jobDetails} />
      </div>
    </div>
  );
};

export default Jobs;
