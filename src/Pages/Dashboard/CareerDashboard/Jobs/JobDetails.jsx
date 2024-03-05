import parse from 'html-react-parser';
import PropTypes from "prop-types";
import { FaBriefcase } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const JobDetails = ({data}) => {

    return (
        <div className="">
            <div className="flex items-center space-x-4">
                <img src={data.image} alt="" className="w-14 h-14 rounded-full" />
                <div className="">
                    <h1 className="text-primary font-semibold">{data.title}</h1>
                    <div className="flex items-center my-0.5">
                        <FaBriefcase size={14} className="mb-1 mr-2" />
                        {data.company}
                    </div>
                    <div className="flex items-center">
                        <IoLocationOutline size={14} className="mb-1 mr-2" />
                        <p className="text-sm">{`${data.location} (${data.type})`}</p>
                    </div>
                </div>
            </div>
            <div className="py-2">
                {/* <div id="htmDetails"></div> */}
                {parse(data?.details)}
            </div>
        </div>
    );
};

export default JobDetails;

JobDetails.propTypes = {
    data: PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
    }).isRequired,
  };