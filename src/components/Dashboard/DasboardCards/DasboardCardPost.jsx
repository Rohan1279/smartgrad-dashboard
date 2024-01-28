import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiOutlineEllipsis } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
// Import Swiper styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const DasboardCardPost = ({ author, author_image, time, images, content }) => {
  const slider = useRef();
  const imageContainerRef = useRef(null);
  const [parentWidth, setParentWidth] = useState(400);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  useEffect(() => {
    const updateParentWidth = () => {
      if (imageContainerRef.current) {
        const newParentWidth = imageContainerRef.current.clientWidth;
        setParentWidth(newParentWidth - 100);
      }
    };

    // Update the parent width initially and add a resize event listener
    updateParentWidth();
    window.addEventListener("resize", updateParentWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateParentWidth);
    };
  }, []);
  return (
    <>
      <Card className={"min-w-full my-5 border-none shadow-none"}>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="flex items-center justify-start space-x-2">
              <img src={author_image} alt="" className="w-11 rounded-xl" />
              <div>
                <CardTitle className={"text-base"}>{author}</CardTitle>
                <CardDescription className={"text-xs"}>{time}</CardDescription>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <AiOutlineEllipsis className="text-2xl cursor-pointer transition-all outline-none" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="m-w-fit contentCard" ref={imageContainerRef}>
          <p>{content}</p>
          {images &&
            (images.length === 1 ? (
              <div className="w-full h-[200px] mt-2 rounded-xl overflow-hidden">
                <img src={images} alt="" className="w-full h-full" />
              </div>
            ) : (
              // Carousal
              // <h1>Requires Carousal</h1>
              <div
                className="slide-container ss"
                style={{
                  maxWidth: parentWidth + "px",
                }}
              >
                <Slider
                  ref={slider}
                  className="custom-carousel-container"
                  {...settings}
                >
                  {images.map((item, k) => (
                    <div
                      key={k}
                      className="w-full h-[200px] mt-2 rounded-xl overflow-hidden"
                    >
                      <img src={item} alt="" className="w-full h-full" />
                    </div>
                  ))}
                </Slider>
              </div>
            ))}
        </CardContent>
        <CardFooter>
          <div className="flex items-center space-x-1">
            <button className="px-3 py-1 bg-[#F5F5F5] rounded-lg ">Like</button>
            <button className="px-3 py-1 bg-[#F5F5F5] rounded-lg ">
              Share
            </button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

DasboardCardPost.propTypes = {
  author: PropTypes.string.isRequired,
  author_image: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  images: PropTypes.string,
  content: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default DasboardCardPost;
