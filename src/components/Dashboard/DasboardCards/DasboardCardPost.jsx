import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DasboardCardPost = ({ title, time, images, content }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{time}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
        <CardFooter>
          <div className="flex items-center space-x-1">
            <button className="w-[44.74px] h-[21.63px] bg-neutral-100 rounded-[5px]">
              Like
            </button>
            <button className="w-[44.74px] h-[21.63px] bg-neutral-100 rounded-[5px]">
              Share
            </button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

DasboardCardPost.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  images: PropTypes.string,
  content: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default DasboardCardPost;
