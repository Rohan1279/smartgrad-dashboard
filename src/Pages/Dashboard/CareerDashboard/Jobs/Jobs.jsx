import JobCard from './JobCard';
import jobsData from './jobsData';

const Jobs = () => {

  return (
    <div className="flex gap-3 py-4">
      <div className="w-2/5">
        {jobsData.map((job, index) => {
            return <JobCard key={index} data={job} />
        })}
      </div>
      <div className="bg-red-500 h-10 w-3/5"></div>
    </div>
  );
};

export default Jobs;
