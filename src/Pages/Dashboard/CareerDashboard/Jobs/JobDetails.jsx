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
                    <div className="flex items-center">
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
                <h1 className="text-primary font-semibold">Job Description</h1>
                <p className="text-sm">{data?.details?.description}</p>
            </div>
            <div className="py-2">
                <h1 className="text-primary font-semibold">Key Responsibilities</h1>
                <ul className="list-inside list-disc">
                    {data.details["keyResponsibilities"].map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="py-2">
                <h1 className="text-primary font-semibold">Educational Requirements</h1>
                <ul className="list-inside list-disc">
                    {data.details["educationalRequirements"].map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="py-2">
                <h1 className="text-primary font-semibold">Required Experience</h1>
                <ul className="list-inside list-disc">
                    {data.details["requiredExperience"].map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="py-2">
                <h1 className="text-primary font-semibold">Company Details</h1>
                <p className="text-sm">{data.details.employees}</p>
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
      details: PropTypes.shape({
        employees: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keyResponsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
        educationalRequirements: PropTypes.arrayOf(PropTypes.string).isRequired,
        requiredExperience: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
    }).isRequired,
  };