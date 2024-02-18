import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
// Import Swiper styles
import { PhotoProvider, PhotoView } from "react-photo-view";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

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
        setParentWidth(newParentWidth - 0);
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
      <Card className={"min-w-full my-5 border mmd:border-none mmd:shadow-md"}>
        <CardHeader className="">
          <div className="flex justify-between items-start">
            <div className="flex items-center justify-start space-x-2">
              <img src={author_image} alt="" className="w-11 rounded-xl" />
              <div>
                <CardTitle className={"text-base"}>{author}</CardTitle>
                <CardDescription className={"text-xs"}>{time}</CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="m-w-fit contentCard " ref={imageContainerRef}>
          <p className="px-6">{content}</p>
          {images &&
            (images.length === 1 ? (
              <div className="mmd:w-full mmd:h-[540px] mt-2  overflow-hidden">
                <PhotoProvider
                  className=""
                  maskOpacity=".8"
                  bannerVisible={false}
                >
                  <PhotoView src={images}>
                    <img
                      src={images}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
            ) : (
              <div
                className="slide-container"
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
                      className="mmd:w-full mmd:h-[540px] mt-2  overflow-hidden"
                    >
                      <PhotoProvider
                        className=""
                        maskOpacity=".8"
                        maskClassName=""
                        bannerVisible={false}
                      >
                        <PhotoView src={item}>
                          <img
                            src={item}
                            alt=""
                            className="w-full h-full object-cover object-top"
                          />
                        </PhotoView>
                      </PhotoProvider>
                    </div>
                  ))}
                </Slider>
              </div>
            ))}
        </CardContent>
        <CardFooter className="mt-6">
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
  images: PropTypes.array,
  content: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default DasboardCardPost;
