import { CardContent, CardFooter, Card } from "@/components/ui/card";
const RecommendationCard = ({
  logo,
  card_image,
  name,
  subject,
  ratings,
  cost,
  academic_expense,
  job_permit,
  offer_rate,
}) => {
  return (
    <Card className="w-[219px] h-[306px] m-auto rounded-lg overflow-hidden shadow-lg">
      <img
        alt="Southeast Minnesota State University"
        className="w-full h-[135px] object-cover"
        src="https://picsum.photos/400"
        style={{
          aspectRatio: "350/200",
          objectFit: "cover",
        }}
      />
      <CardContent className="p-2 relative">
        <h2 className="text-xs font-semibold">{subject}</h2>
        <p className="text-xs text-gray-500">{name}</p>
        <div className="flex mt-2">
          <StarIcon className="text-yellow-400 w-[11px]" />
          <StarIcon className="text-yellow-400 w-[11px]" />
          <StarIcon className="text-yellow-400 w-[11px]" />
          <StarIcon className="text-yellow-400 w-[11px]" />
          <StarIcon className="text-gray-300 w-[11px]" />
        </div>
        <ul className="mt-3 text-[10px]">
          <li>
            <strong>Living Cost:</strong> {cost}
          </li>
          <li>
            <strong>Academic Expense:</strong> {academic_expense}
          </li>
          <li>
            <strong>Job Permit:</strong> {job_permit}
          </li>
        </ul>
      </CardContent>
      <CardFooter className="mt-[9px] flex justify-between text-white p-0 bg-[#34343E] h-[35px] text-[10px] px-3 py-2">
        <button className="text-center w-full font-bold ">Apply Now</button>
      </CardFooter>
    </Card>
  );
};

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
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
export default RecommendationCard;
