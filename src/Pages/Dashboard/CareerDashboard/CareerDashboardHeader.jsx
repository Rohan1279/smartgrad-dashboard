import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Select from 'react-select';

const CareerDashboardHeader = () => {

    
  const multiSelectStyles = {
    control: (provided) => ({
      ...provided,
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#595959',
    }),
  }

  const multiSelectTheme = (theme) => ({
    ...theme,
    borderRadius: "7px",
    colors: {
      ...theme.colors,
      primary: '#595959',
      outline: "none",
      neutral20: "transparent"
    },
  })

    const datePostedOptions = [
        { label: 'Any Time', value: "anyTime",},
        { label: 'Past Month', value: "pastMonth"},
        { label: 'Past Week', value: "pastWeek"},
        { label: 'Past 24 Hours', value: "past24"},
      ];
      
        const experienceOptions = [
        { label: 'Internship', value: 1,},
        { label: 'Entry level', value: 2},
        { label: 'Mid-Senior Level', value: 3},
      ];
      
        const typeOptions = [
        { label: 'Internship', value: 1,},
        { label: 'Entry level', value: 2},
        { label: 'Mid-Senior Level', value: 3},
      ];
      

    return (
        <div className="hidden mmd:flex flex-col justify-center md:flex-row md:justify-start items-center space-x-[34px] shadow-md bg-white rounded-[20px] p-[24px] ">
        <div className="mmd:flex justify-center md:flex-row md:justify-start items-center space-x-[34px] flex-1">
        <div className="">
          <div className="relative w-full min-w-[200px] h-10">
            <input
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 outline-none  border-[#595959]"
              placeholder=" "
              name="title"
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
              Search by Career Title
            </label>
          </div>
        </div>

        <div className="">
          <div className="relative w-full min-w-[200px] h-10">
            <input
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 outline-none  border-[#595959]"
              placeholder=" "
              name="location"
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
              Location
            </label>
          </div>
        </div>

        {/* <div className="">
          <div className="relative w-full min-w-[180px] h-10">
            <select name="Date Posted" className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border focus:border-2 text-sm px-3 rounded-[7px] border-blue-gray-200 outline-none border-[#595959] my-auto">
              <option value="anyTime" disabled selected>Date Posted</option>
              <option value="anyTime">Any Time</option>
              <option value="pastMonth">Past Month</option>
              <option value="pastWeek">Past Week</option>
              <option value="past24">Past 24 Hours</option>
            </select>
          </div>
        </div> */}

        <div className="">
          <div className="relative w-full min-w-[180px] h-10">
          <Select options={datePostedOptions} isSearchable={false} placeholder="Date Posted" className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border focus:border-2 text-sm rounded-[7px] border-blue-gray-200 outline-none border-[#595959]"
          styles={multiSelectStyles}
          theme={multiSelectTheme}
          />
          
          </div>
        </div>
        <div className="">
          <div className="relative w-full min-w-[180px] h-10">
          <Select options={experienceOptions} isMulti isSearchable={false} closeMenuOnSelect={false} placeholder="Enter Type" className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border focus:border-2 text-sm rounded-[7px] border-blue-gray-200 outline-none border-[#595959]"
          styles={multiSelectStyles}
          theme={multiSelectTheme}
          />
          
          </div>
        </div>

        <div className="">
          <div className="relative w-full min-w-[180px] h-10">
          <Select options={typeOptions} isMulti isSearchable={false} closeMenuOnSelect={false} placeholder="Experience Level" className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border focus:border-2 text-sm rounded-[7px] border-blue-gray-200 outline-none border-[#595959]"
          styles={multiSelectStyles}
          theme={multiSelectTheme}
          />
          
          </div>
        </div>
        </div>


        <button className="bg-primary text-white rounded-[10px] px-3 py-2">
          <Link to="" className="flex items-center">
            <FaSearch className="mr-2" /> Search
          </Link>
        </button>
      </div>
    );
};

export default CareerDashboardHeader;