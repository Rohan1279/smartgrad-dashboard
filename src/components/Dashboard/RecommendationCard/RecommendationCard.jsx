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
    <Card className="w-[350px] rounded-lg overflow-hidden shadow-lg">
      <img
        alt="Southeast Minnesota State University"
        className="w-full h-48 object-cover"
        height="200"
        src="/placeholder.svg"
        style={{
          aspectRatio: "350/200",
          objectFit: "cover",
        }}
        width="350"
      />
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold">
          Master of Business Administration
        </h2>
        <p className="text-sm text-gray-500">
          Southeast Minnesota State University
        </p>
        <div className="flex mt-2">
          <StarIcon className="text-yellow-400" />
          <StarIcon className="text-yellow-400" />
          <StarIcon className="text-yellow-400" />
          <StarIcon className="text-yellow-400" />
          <StarIcon className="text-gray-300" />
        </div>
        <ul className="mt-3 text-sm">
          <li>
            <strong>Living Cost:</strong> USD 8888/year
          </li>
          <li>
            <strong>Academic Expense:</strong> USD 333/month
          </li>
          <li>
            <strong>Job Permit:</strong> Part-time
          </li>
        </ul>
      </CardContent>
      <CardFooter className="flex justify-between items-center bg-[#f0f4f8] p-4">
        <span className="text-lg">20% OFF</span>
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
export default RecommendationCard;
