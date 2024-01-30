import React, { Fragment } from "react";

const NetworkCardDetais = ({ item }) => {
  return (
    <Fragment>
      <div className="p-2 bg-[#F5F5F5] lg:bg-white rounded-lg">
        <div className="grid grid-rows-1 grid-cols-1">
          <div className="grid grid-cols-3">
            <div className="col-span-1 justify-center items-center">
              <div className="w-[60px] h-[60px] ">
                <img src={item?.image} alt="member" className="w-full h-full" />
              </div>
            </div>
            <div className="col-span-2 flex flex-col items-start justify-center">
              <p className="font-bold whitespace-nowrap text-sm mt-1">
                {item?.name}
              </p>
              <p className="text-xs">{item?.designation}</p>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <p className="text-xs text-justify line-clamp-3">{item?.content}</p>
            <button className="px-3 py-1 w-full bg-[#05D5D7] text-sm text-[#ffffff] rounded-lg mt-2">
              Connect Now
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NetworkCardDetais;
