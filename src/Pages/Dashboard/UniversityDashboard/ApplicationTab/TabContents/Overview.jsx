import { CiClock1, CiLocationArrow1 } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { TbMoneybag } from "react-icons/tb";
import { Link } from "react-router-dom";

const InfoSection = ({ Icon, title, subtitle }) => {
  return (
    <div className="flex items-start text-primary gap-x-2">
      <CiClock1 className="text-2xl" />
      <div>
        <p className="font-extrabold">{title}</p>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

const Overview = ({ universityData }) => {
  const {
    tuition_fees = 0,
    start_date,
    duration,
    scholarship,
    deadline_date,
  } = universityData;
  return (
    <div className="text-primary">
      <div className="grid grid-cols-2  mmd:grid-cols-4 sm:pl-5 py-8 justify-items-stretch">
        <div className="flex items-start text-primary gap-x-2">
          <CiClock1 className="text-2xl" />
          <div>
            <p className="font-extrabold">{duration}</p>
            <p>Duration</p>
          </div>
        </div>

        <div className="flex items-start text-primary gap-x-2">
          <TbMoneybag className="text-2xl" />
          <div>
            <p className="font-extrabold">{tuition_fees}</p>
            {scholarship && (
              <Link to={scholarship} target="_blank">
                Scholarships available
              </Link>
            )}
          </div>
        </div>

        <div className="flex items-start text-primary gap-x-2">
          <CiLocationArrow1 className="text-2xl" />
          <div>
            <p className="font-extrabold">{start_date}</p>
            <p>Start Date</p>
          </div>
        </div>
        <div className="flex items-start text-primary gap-x-2">
          <SlCalender className="text-2xl" />
          <div>
            <p className="font-extrabold">{deadline_date}</p>
            <p>Deadline</p>
          </div>
        </div>

        {/* <InfoSection title={tuition_fees} subtitle={"Scholarships available"} /> */}
        {/* <InfoSection title={"Mar 2024"} subtitle={"Apply date"} /> */}
        {/* <InfoSection title={start_date} subtitle={"Start date"} /> */}
      </div>
      <hr className="border border-t-[#f5f5f5]  w-11/12 mx-auto my-12"></hr>
      <div>
        <h3 className="font-extrabold">About</h3>
        <p className="w-1/2">
          The Animal Science MSc program from Mississippi State University
          curriculum is based on a total of 30 credit hours.
        </p>
        <p className="text-sm my-5 flex gap-x-1">
          Visit the{" "}
          <div className="flex">
            <FaLock className="text-sm text-blue-500" />
            <span className="text-blue-500  hover:underline cursor-pointer ">
              visit programme website
            </span>{" "}
          </div>
          for more information
        </p>
      </div>
      <hr className="border border-t-[#f5f5f5]  w-11/12 mx-auto my-12"></hr>
      <div className="bg-[#]"></div>
    </div>
  );
};

export default Overview;
