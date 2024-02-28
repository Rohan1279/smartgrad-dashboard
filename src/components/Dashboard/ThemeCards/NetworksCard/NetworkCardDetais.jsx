import { Fragment } from "react";

const NetworkCardDetais = ({ item }) => {
  return (
    <Fragment>
      <div className="p-2 bg-[#F5F5F5] lg:bg-white rounded-lg">
        <div className="flex gap-x-3">
          <div className="gap-4">
            <div className="justify-center items-center">
              <div className="w-[60px] h-[60px]">
                <img src={item?.image} alt="member" className="w-full h-full" />
              </div>
            </div>
            <div className="col-span-2 flex flex-col items-start justify-center">
              <p className="font-bold whitespace-nowrap text-xs mt-1">
                {item?.name.length > 12 ? `${(item?.name).substring(0,12)}...` : item?.name }
              </p>
              <p className="text-xs line-clamp-1">{(item?.designation)}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-justify grow">{item.content.length > 70 ? `${item?.content.substring(0,70)}...`: item.content}</p>
            <button className="px-3 py-1 w-full bg-[#4B4E6D] text-sm text-[#ffffff] rounded-lg">
              Connect Now
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NetworkCardDetais;
