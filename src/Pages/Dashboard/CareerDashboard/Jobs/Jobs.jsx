import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import JobCard from "./JobCard";
import JobDetails from "./JobDetails";
import jobsData from "./jobsData";

const Jobs = () => {
  const [jobDetails, setJobDetails] = useState(jobsData[0]);

  return (
    <div className="flex gap-6 py-4">
      <ScrollArea  className="w-2/5 h-[63vh] overflow-y-auto">
        {jobsData.map((job, index) => {
          return (
            <div key={index} onClick={()=>setJobDetails(job)}>
              <JobCard data={job} />
            </div>
          );
        })}
      </ScrollArea>
      <ScrollArea className="w-3/5 p-4 bg-gray-100 rounded-lg h-[63vh] overflow-y-auto">
        {/* {jobDetails && } */}
        <JobDetails data={jobDetails} />
      </ScrollArea>
    </div>
  );
};

export default Jobs;
