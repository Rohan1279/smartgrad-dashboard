import PropTypes from "prop-types";
import { FaBriefcase } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const JobCard = ({ data }) => {
  const { image, title, company, location, type } = data;
  return (
    <div className="flex items-center border-b space-x-2 py-4 cursor-pointer">
      <img src={image} alt="" className="w-12 h-12 rounded-full" />
      <div className="">
        <h1 className="text-primary font-semibold">{title}</h1>
        <div className="flex items-center my-0.5">
          <FaBriefcase size={14} className="mb-1 mr-2" />
          {company}
        </div>
        <div className="flex items-center">
          <IoLocationOutline size={14} className="mb-1 mr-2" />
          <p className="text-sm">{`${location} (${type})`}</p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

JobCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};
