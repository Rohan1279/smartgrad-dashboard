import React, { Fragment } from "react";
import FeedWrapper from "../FeedWrapper/FeedWrapper";
import DasboardCardPost from "../DasboardCards/DasboardCardPost";

const FeedContent = ({ posts }) => {
  return (
    <Fragment>
      <FeedWrapper className="col-span-3 lg:col-span-2 bg-[#F5F5F5] rounded-xl lg:px-5 lg:py-3">
        <div>
          <h1 className="hidden lg:block cursor-default pl-[10px] font-semibold">
            Feed
          </h1>
          <hr className="hidden lg:block border mt-[10px] border-[#D9D9D9]" />
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
      </FeedWrapper>
    </Fragment>
  );
};

export default FeedContent;
