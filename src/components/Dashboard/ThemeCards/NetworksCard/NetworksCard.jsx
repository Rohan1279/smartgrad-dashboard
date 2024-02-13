import React, { useEffect, useRef, useState } from "react";
import { DasboardCardTheme } from "../../DasboardCards/DasboardCardTheme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NetworkCardDetais from "./NetworkCardDetais";
import NetworkIcon from "../../../ThemeIcons/NetworkIcon";

const NetworksCard = () => {
  const slider = useRef();
  const imageContainerRef = useRef(null);
  const [parentWidth, setParentWidth] = useState(400);

  const networkJSON = [
    {
      name: "Sakib Ahmed",
      designation: "Founder & CEO",
      content:
        "Loves teaching so much that he has been doing it for 20+ years, in addition to his corporate and startup career. Sakib is an Oxford alumnus and holds a 1st Class Economics & Finance bachelors degree from Brunel.",
      image: "/assets/images/TeamImages/member2.png",
    },
    {
      name: "Raihan Alauddin",
      designation: "Co-Founder & Director",
      content:
        "Loves teaching so much that he has been doing it for 20+ years, in addition to his corporate and startup career. Sakib is an Oxford alumnus and holds a 1st Class Economics & Finance bachelors degree from Brunel.",
      image: "/assets/images/TeamImages/member1.png",
    },
    {
      name: "Mansur Abbasi",
      designation: "Co-Founder & Director",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/assets/images/TeamImages/member3.png",
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

    // Update the parent width initially and add a resize event listener
    updateParentWidth();
    window.addEventListener("resize", updateParentWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateParentWidth);
    };
  }, []);
  return (
    <div className="w-full h-auto min-h-[166px] bg-white shadow-md rounded-[10px] px-4 py-2 pb-[30px] text-base">
      <div className="flex items-center gap-x-2">
        <NetworkIcon className={"min-w-8 max-w-8 fill-none stroke-primary"} />
        <h1>Networks</h1>
      </div>
      <div className="flex flex-row rounded-lg mt-4" ref={imageContainerRef}>
        <div
          className="slide-container"
          style={{
            maxWidth: parentWidth + "px",
          }}
        >
          <Slider ref={slider} className="w-full h-full" {...settings}>
            {networkJSON.map((item, index) => (
              <NetworkCardDetais key={index} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default NetworksCard;
