import { Link } from "react-router-dom";

const RecommendationCard = ({ universityData }) => {
  const {
    university,
    programme,
    university_logo,
    tuition_fees,
    start_date,
    score,
    discipline,
    format,
    duration,
  } = universityData;

  return (
    <Link className="w-full flex items-center justify-between gap-x-[26px] border bg-white p-4 rounded-xl hover:shadow-lg active:scale-[.99] active:shadow-none transition-all mb-4">
      <img
        alt="University Logo"
        className="h-[128px] w-[128px] rounded-[10px] relative "
        src={university_logo}
        style={{
          aspectRatio: "50/50",
          objectFit: "cover",
        }}
      />
      {/* <div className="h-10 w-10  absolute left-5 z-20 bg-white rounded-full translate-y-full">
        <img src={UniversityImage} alt="" className="h-10 w-10 rounded-full" />
      </div> */}
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
        <ul className="hidden mmd:block mt-5 text-[12px] ">
          <li>
            <strong>Tuition Fee:</strong> {tuition_fees}
          </li>
          <li>
            <strong>Duration:</strong> {duration}
          </li>
          <li>
            <strong>Format:</strong> {format}
          </li>
        </ul>
      </div>
      <button className=" bg-primary rounded-2xl text-white px-5 py-2 ml-auto hidden mmd:block">
        View Details
      </button>
    </Link>
  );
};

export default RecommendationCard;
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
