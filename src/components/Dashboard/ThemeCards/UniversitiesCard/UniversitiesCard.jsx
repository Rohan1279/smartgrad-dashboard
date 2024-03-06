import axios from "@/api/axios";
import { Progress } from "@/components/ui/progress";
import router from "@/routes/routes";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import UniversityIcon from "../../../ThemeIcons/UniversityIcon";
import { DasboardCardTheme } from "../../DasboardCards/DasboardCardTheme";

const UniversitiesCard = () => {
  const slider = useRef(null);
  const parentContainerRef = useRef(null);
  const [parentWidth, setParentWidth] = useState(400);

  const [universities, setUniversities] = useState([]);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: universities.length > 3
  };

  useEffect(() => {
    axios
      .get("/university/applications", {
        params: {
          token: localStorage.getItem("token"),
        },
      })
      .then(({ data }) => {
        setUniversities(
          data.data.map((item) => {
            return {
              name: item.university,
              status: item.programme,
              progress: 50,
              logo: item.university_logo,
            };
          })
        );
      });
  }, []);

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
            <UniversityIcon className={"min-w-8 max-w-8 fill-primary"} />
            <h1 className="text-sm xl:text-lg font-semibold">Universities</h1>
          </div>
          {/* <ScrollArea className="h-[120px] p-2 py-4"> */}
          {universities.length ? (
            <div
              className="slide-container shadow-lg rounded-sm"
              style={{
                maxWidth: parentWidth + "px",
              }}
            >
              <Slider ref={slider} {...settings} className="w-full h-full mt-1">
                  {universities.map((item, idx) => {
                    console.log(item, "item");
                    return (
                      <div key={idx} className="hover:shadow-sm transition-all">
                        <div className="flex items-center space-x-2 mb-2 cursor-pointer rounded-md">
                          <div className="w-14">
                            <img
                              src={item.logo}
                              alt="university-logo"
                              className="mt-auto"
                            />
                          </div>
                          <div className="">
                            <p className="text-sm lg:text-md font-semibold">
                              {item.name}
                            </p>
                            <p className="text-xs lg:text-sm line-clamp-1 italic">
                              {item.status}
                            </p>
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
          ) : (
            <div className="flex">
              <Link
                className="text-lg font-light animate-pulse hover:animate-none underline mt-2"
                to="/dashboard/university"
              >
                Find Your Programme
              </Link>
            </div>
          )}
          {/* </ScrollArea> */}
        </div>
        <div className="ml-auto flex flex-col justify-between items-center">
          <button
            onClick={() => {
              router.navigate("/dashboard/university/applications");
            }}
            className="text-sm py-1 underline rounded-lg whitespace-nowrap"
          >
            View All
          </button>
          <p className="text-6xl font-bold text-center">
            {universities.length > 0 ? universities.length : ""}
          </p>
        </div>
      </div>
    </DasboardCardTheme>
  );
};

export default UniversitiesCard;
