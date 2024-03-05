import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const CareerDashboardHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-start items-center md:space-y-0 md:space-x-2 gap-y-4 shadow-md bg-white rounded-[20px] p-[24px] mt-4 lg:mt-0 ">

      <div className="flex w-full md:w-1/2 flex-row space-x-2">
        <div className="w-1/2">
          <div className="relative w-full h-10">
            <input
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 outline-none border-[#595959]"
              placeholder=" "
              name="keyword"
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
              Search by Title,Company
            </label>
          </div>
        </div>

        <div className="w-1/2 md:mt-0">
          <div className="relative w-full h-10">
            <input
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 outline-none border-[#595959]"
              placeholder=" "
              name="location"
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
              Location
            </label>
          </div>
        </div>
      </div>

      <div className="flex w-full md:w-1/2 flex-row md:items-center md:space-x-2">
        <div className="w-1/2 md:w-full">
        <select
          name="datePosted"
          defaultValue={"anyTime"}
          className="h-10 bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border focus:border-2 text-sm px-3 rounded-[7px] border-blue-gray-200 outline-none border-[#595959] w-full mb-2 md:mb-0 md:w-1/2 appearance-none"
        >
          <option value="anyTime" disabled>
            Date Posted
          </option>
          <option value="anyTime">Any Time</option>
          <option value="pastMonth">Past Month</option>
          <option value="pastWeek">Past Week</option>
          <option value="past24">Past 24 Hours</option>
        </select>
        </div>

        <div className="flex-1 text-right">
        <button className="bg-primary text-white rounded-[10px] px-3 py-2 w-auto text-right">
          <Link to="" className="flex items-center">
            <FaSearch className="mr-2" /> Search
          </Link>
        </button>
        </div>
      </div>
    </div>
  );
};

export default CareerDashboardHeader;
