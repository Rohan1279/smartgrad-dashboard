import { Link } from "react-router-dom";

const ApplicationCard = ({ application }) => {
  const {
    id,
    programme,
    university,
    score,
    start_date,
    university_logo,
    university_image,
    status,
    tuition_fees,
  } = application;
  console.log("application", application);

  return (
    <Link className="flex  justify-between bg-white px-4 py-8 rounded-xl shadow-lg active:scale-[.99] active:shadow-none transition-all">
      <div className="flex items-center space-x-4">
        <img
          alt="University Logo"
          className="size-[128px] rounded-full "
          src={university_logo}
          style={{
            aspectRatio: "50/50",
            objectFit: "cover",
          }}
        />
        <div className="text-left">
          <h2 className="text-lg font-semibold">{programme}</h2>
          <p className="text-sm text-gray-600">{university}</p>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => {
              return i < score ? (
                <StarIcon
                  key={i}
                  className="text-yellow-400 fill-yellow-400 h-4 w-4"
                />
              ) : (
                <StarIcon
                  key={i}
                  className="text-gray-300 fill-gray-300h-4 w-4"
                />
              );
            })}
          </div>

          <p className="text-base text-primary mt-8">Status: {status}</p>
        </div>
      </div>
      <div className="text-right  flex flex-col justify-between ">
        <div>
          <p className="text-sm font-medium italic">Application ID : {id}</p>
          {/* CHANGE MAY COME IN THE FUTURE  */}
          <p className="text-sm  italic">Applied on : {start_date}</p>
        </div>
        <button className="w-[94px] px-5 py-2 rounded-[10px] bg-primary text-white ml-auto">
          View
        </button>
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
