import { Progress } from "@/components/ui/progress";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { toast } from "sonner";
import UniversityIcon from "../../../ThemeIcons/UniversityIcon";
import { DasboardCardTheme } from "../../DasboardCards/DasboardCardTheme";
import UniversityImage from "/assets/images/dashboard/university-logo.png";

const UniversitiesCard = () => {
  const slider = useRef(null);
  const parentContainerRef = useRef(null);
  const [parentWidth, setParentWidth] = useState(400);
  const universities = [
    {
      name: "Southwest Minnesota University",
      status: "Awating Approval",
      progress: 33,
    },
    {
      name: "Southwest Minnesota University",
      status: "Awating Approval",
      progress: 93,
    },
    {
      name: "Southwest Minnesota University",
      status: "Awating Approval",
      progress: 43,
    },
    {
      name: "Southwest Minnesota University",
      status: "Awating Approval",
      progress: 73,
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
      if (parentContainerRef.current) {
        const newParentWidth = parentContainerRef.current.clientWidth;
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
    <DasboardCardTheme>
      <div className="flex flex-row rounded-lg xl:gap-x-1">
        <div className="flex-1" ref={parentContainerRef}>
          <div className="flex items-center gap-x-2">
            <UniversityIcon className={"min-w-8 max-w-8 fill-primary "} />
            <h1 className="text-sm xl:text-lg font-semibold">Universities</h1>
          </div>
          {/* <ScrollArea className="h-[120px] p-2 py-4"> */}
          <div
            className="slide-container"
            style={{
              maxWidth: parentWidth + "px",
            }}
          >
            <Slider
            ref={slider}
              {...settings}
              className="w-full h-full mt-1"
            >
              {universities?.map((item, idx) => {
                return (
                  <div key={idx} className="hover:shadow-sm transition-all">
                    <div className="flex items-center space-x-2 mb-2 cursor-pointer rounded-md">
                      <div className="w-14">
                        <img
                          src={UniversityImage}
                          alt="university-logo"
                          className="mt-auto"
                        />
                      </div>
                      <div className="">
                        <p className="text-sm lg:text-md">{item.name}</p>
                        <p className="text-xs lg:text-sm">{item.status}</p>
                        <Progress
                          value={item.progress}
                          className={"w-full mt-1"}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          {/* </ScrollArea> */}
        </div>
        <div className="ml-auto flex flex-col justify-between items-center">
          <button
            onClick={() => {
              toast("Coming Soon");
            }}
            className="text-sm py-1 underline rounded-lg whitespace-nowrap"
          >
            View All
          </button>
          <p className="text-6xl font-bold text-center">
            {universities.length}
          </p>
        </div>
      </div>
    </DasboardCardTheme>
  );
};

export default UniversitiesCard;
