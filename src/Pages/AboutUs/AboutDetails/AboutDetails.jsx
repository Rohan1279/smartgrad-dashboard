import React, { Fragment } from "react";

const AboutDetails = ({ item, contentDivClass }) => {
  return (
    <Fragment>
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 mmd:grid-cols-2 gap-y-8 justify-between py-[20px] mmd:py-[50px] px-4 md:px-auto">
        <div className={`${item?.imageClass} flex justify-center items-center`}>
          <img
            src={item?.image ? item?.image : "/images/aboutus.svg"}
            alt="about"
            className="w-full max-w-sm max-h-[350px] rounded-xl"
          />
        </div>
        <div
          className={`${item?.divClass} flex flex-col justify-center items-center mmd:items-start px-4`}
        >
          <h1 className="text-[30px] mmd:text-[45px] font-bold text-[#595959]">
            {item?.title}
          </h1>
          <p className="text-justify text-[#595959] font-normal text-base">
            {item?.content}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutDetails;
