import { Link } from "react-router-dom";
import UniversityImage from "/assets/images/dashboard/university-logo.png";

const ApplicationCard = ({ university }) => {
  const {
    id,
    subject,
    name,
    rating,
    applicationDate,
    applicationId,
    status,
    universityImage,
  } = university;

  return (
    <Link
      to={`/dashboard/university/application/${id}`}
      className="flex items-center justify-between bg-white p-4 rounded-xl hover:shadow-lg active:scale-[.99] active:shadow-none transition-all"
    >
      <div className="flex items-center space-x-4">
        <img
          alt="University Logo"
          className="h-16 w-16 rounded-full"
          src={UniversityImage}
          style={{
            aspectRatio: "50/50",
            objectFit: "cover",
          }}
        />
        <div>
          <h2 className="text-lg font-semibold">{subject}</h2>
          <p className="text-sm text-gray-600">{name}</p>
          <div className="flex items-center mt-1">
            <StarIcon className="text-yellow-400 h-5 w-5" />
            <StarIcon className="text-yellow-400 h-5 w-5" />
            <StarIcon className="text-yellow-400 h-5 w-5" />
            <StarIcon className="text-yellow-400 h-5 w-5" />
            <StarIcon className="text-gray-300 h-5 w-5" />
          </div>
          <p className="text-sm text-gray-600 mt-1 italic">{applicationDate}</p>
        </div>
      </div>
      <div className="text-right ">
        <p className="text-sm font-medium italic">
          Application ID : {applicationId}
        </p>
        <p className="text-sm  italic">status : {status}</p>
      </div>
    </Link>
  );
};

export default ApplicationCard;
function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
