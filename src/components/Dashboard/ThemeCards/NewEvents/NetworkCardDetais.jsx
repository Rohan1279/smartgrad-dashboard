import { Fragment } from "react";

const NetworkCardDetais = ({ item }) => {
  return (
    <Fragment>
      <div className="p-2 bg-[#F5F5F5] lg:bg-white rounded-lg">
        <div className="grid grid-rows-1 grid-cols-1">
          <div className="flex gap-4">
            <div className="justify-center items-center">
              <div className="w-[60px] h-[60px]">
                <img src={item?.image} alt="member" className="w-full h-full" />
              </div>
            </div>
            <div className="col-span-2 flex flex-col items-start justify-center">
              <p className="font-bold whitespace-nowrap text-md mt-1">
                {item?.name}
              </p>
              <p className="text-sm">{item?.designation}</p>
            </div>
          </div>
          <div className="flex flex-col mt-4 h-full">
            <p className="text-xs text-justify line-clamp-3">{item?.content}</p>
            <button className="px-3 py-1 w-full bg-[#4B4E6D] text-sm text-[#ffffff] rounded-lg mt-2">
              Connect Now
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NetworkCardDetais;
