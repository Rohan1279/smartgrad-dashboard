import React, { Fragment } from "react";
import FeedWrapper from "../FeedWrapper/FeedWrapper";
import DasboardCardPost from "../DasboardCards/DasboardCardPost";

const FeedContent = ({ posts }) => {
  return (
    <Fragment>
      <FeedWrapper className="col-span-3  lg:col-span-2 bg-[#F5F5F5]/70 rounded-xl lg:px-5 lg:py-3 max-h-screen relative">
        <div>
          <div className="absolute top-3  bg-[#f8f8f8] z-40 w-[96%]">
            <h1 className="hidden lg:block cursor-default pl-[10px]  font-semibold">
              Feed
            </h1>
            <hr className="hidden lg:block mt-[10px] h-1 border-x-none   border-t-[#4B4E6D] " />
          </div>
          <div className="mt-4 mmd:mt-12">
            {posts?.map((item, idx) => {
              return (
                <DasboardCardPost
                  key={idx}
                  content={item.content}
                  images={item.images}
                  time={item.time}
                  author={item.author}
                  author_image={item.author_image}
                />
              );
            })}
          </div>
        </div>
      </FeedWrapper>
    </Fragment>
  );
};

export default FeedContent;
