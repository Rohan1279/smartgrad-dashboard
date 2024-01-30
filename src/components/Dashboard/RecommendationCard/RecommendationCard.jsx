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
    <Card className="w-full max-w-[250px] m-auto rounded-lg overflow-hidden shadow-lg">
      <img
        alt="Southeast Minnesota State University"
        className="w-full h-[135px] object-cover"
        src="https://picsum.photos/400"
        style={{
          aspectRatio: "350/200",
          objectFit: "cover",
        }}
      />
      <CardContent className="p-2">
        <h2 className="text-sm font-semibold">{subject}</h2>
        <p className="text-xs text-gray-500">{name}</p>
        <div className="flex mt-2">
          <StarIcon className="text-yellow-400" />
          <StarIcon className="text-yellow-400" />
          <StarIcon className="text-yellow-400" />
          <StarIcon className="text-yellow-400" />
          <StarIcon className="text-gray-300" />
        </div>
        <ul className="mt-3 text-xs">
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
      <CardFooter className="flex justify-between text-white p-0 bg-[#34343E] text-xs px-3 py-2">
        <div>
          <span className="text-sm text-[#FFC24C] font-bold">{offer_rate}</span>{" "}
          <span>OFF</span>
        </div>
        <span>Get Now!</span>
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
