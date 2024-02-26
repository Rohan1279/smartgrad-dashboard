import { useEffect, useRef, useState } from "react";
import { MdOutlineEventAvailable } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import NewEventDetails from "./NewEventDetails";

const NewEventsCard = () => {
  const slider = useRef();
  const imageContainerRef = useRef(null);
  const [parentWidth, setParentWidth] = useState(400);

  const newEventJSON = [
    {
      image: "/assets/images/dashboard/posts/post-2.png",
      url: "https://smartgrad.org",
    },
    {
      image: "/assets/images/dashboard/posts/post-3.jpg",
      url: "https://smartgrad.org",
    },
    {
      image: "/assets/images/dashboard/posts/post-1.png",
      url: "https://smartgrad.org",
    },
  ];
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
        setParentWidth(newParentWidth - 10);
      }
    };

    updateParentWidth();
    window.addEventListener("resize", updateParentWidth);

    return () => {
      window.removeEventListener("resize", updateParentWidth);
    };
  }, []);


  return (
    <div className="w-full h-auto bg-white shadow-md rounded-[10px] px-4 py-2 pb-[30px] text-base grow overflow-y-hidden flex flex-col justify-center">
      <div className="flex items-center gap-x-2">
        <MdOutlineEventAvailable size={20} />
        <h1 className="text-md xl:text-lg font-semibold">New Events</h1>
      </div>
      <div className="rounded-lg mt-4" ref={imageContainerRef}>
        <div
          className="slide-container"
          style={{
            maxWidth: parentWidth + "px",
          }}
        >
          <Slider ref={slider} className="h-full w-full" {...settings}>
            {newEventJSON.map((item, index) => (
              <NewEventDetails key={index} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default NewEventsCard;
