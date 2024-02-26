import useGlobalContext from "@/hooks/useGlobalContext";
import { Fragment } from "react";
import { FaInfoCircle } from "react-icons/fa";
import DasboardCardPost from "../DasboardCards/DasboardCardPost";
import FeedWrapper from "../FeedWrapper/FeedWrapper";

const FeedContent = ({ posts }) => {
  const {openModal} = useGlobalContext();

  const infoClicked = () => {
    openModal({title: 'This is the feed page', content: <h1>This is feed</h1>});
  }

  return (
    <Fragment>
      <FeedWrapper className="col-span-3 lg:col-span-3 xl:col-span-2 bg-white rounded-xl lg:px-5 lg:py-3 max-h-[85vh] relative">
        <div>
          <div className="absolute top-3  bg-white z-40 w-[96%]">
            <div className="flex justify-between">
            <h1 className="hidden lg:block cursor-default pl-[10px]  font-semibold">
              Feed
            </h1>
            <FaInfoCircle onClick={infoClicked} />
            </div>
            <hr className="hidden lg:block mt-[10px] h-1 border-x-none   border-t-[#4B4E6D] " />
          </div>
          <div className="mt-4 mmd:mt-12 ">
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
