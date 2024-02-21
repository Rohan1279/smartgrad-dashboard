import { useEffect, useRef, useState } from "react";
import { MdOutlineEventAvailable } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


const NewEventsCard = () => {
  const slider = useRef();
  const imageContainerRef = useRef(null);
  const [parentWidth, setParentWidth] = useState(400);

  const newEventJSON = [
    {
      image: "https://www.cuchd.in/includes/assets/images/qs-ranking-banner-engg-mech.webp",
      url: "https://smartgrad.org"
    },
    {
      image: "https://bdbusinessfinder.com/wp-content/uploads/2019/07/xse556t.jpg",
      url: "https://smartgrad.org"
    },
    {
      image: "https://blog.mmumullana.org/wp-content/uploads/2018/03/Course-wise-FB-Banners-Feb-2018-1-1.jpg",
      url: "https://smartgrad.org"
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
    <div className="w-full h-auto min-h-[166px] bg-white shadow-md rounded-[10px] px-4 py-2 pb-[30px] text-base grow overflow-y-auto flex flex-col justify-center">
      <div className="flex items-center gap-x-2">
        <MdOutlineEventAvailable size={20} />
        <h1 className="text-lg font-semibold">New Events</h1>
      </div>
      <div className="flex flex-row rounded-lg mt-4" ref={imageContainerRef}>
        <div
          className="slide-container"
          style={{
            maxWidth: parentWidth + "px",
          }}
        >
          <Slider ref={slider} className="w-full h-full" {...settings}>
            {
              newEventJSON?.map((item, index) => <Link to={item.url} key={index}>
              <img src={item.image} alt="event" className="w-full h-44" />
            </Link>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default NewEventsCard;
