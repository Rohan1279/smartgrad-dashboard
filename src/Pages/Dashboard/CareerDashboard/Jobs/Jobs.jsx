import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import JobCard from "./JobCard";
import JobDetails from "./JobDetails";
import jobsData from "./jobsData";

const Jobs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [selectedJobIndex, setSelectedJobIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);

      if (window.innerWidth <= 767) {
        setSelectedJobIndex(null);
      } else {
        setSelectedJobIndex(0);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  
console.log(selectedJobIndex, "selectedJobIndex");
  return (
    <div className="flex gap-6 py-4">
      {<ScrollArea  className={`w-full md:w-2/5 h-[50vh] md:h-[63vh] overflow-y-auto ${isMobile && selectedJobIndex != null ? "hidden" : "block"}`}>
        {jobsData.map((job, index) => {
          return (
            <div key={index} onClick={()=>setSelectedJobIndex(index)}>
              <JobCard data={job} />
            </div>
          );
        })}
      </ScrollArea>}
      {selectedJobIndex != null && <ScrollArea className="md:w-3/5 p-4 bg-gray-100 rounded-lg h-[50vh] md:h-[63vh] overflow-y-auto">
        <JobDetails data={jobsData[selectedJobIndex]} />
        {isMobile && <RxCrossCircled className="text-red-400 absolute top-2 right-2" size={25} onClick={() => setSelectedJobIndex(null)} />}
      </ScrollArea>}
    </div>
  );
};

export default Jobs;
