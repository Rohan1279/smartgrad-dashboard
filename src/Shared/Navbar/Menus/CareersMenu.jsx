import React, { forwardRef } from "react";

const CareersMenu = forwardRef((props, ref) => {
  return (
    <nav ref={ref} className=" rounded-xl">
      <ul>
        <a className="pl-2 w-44 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          CV Review
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-44 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          Mock Interview
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-44 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          Soft Skill Development
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-44 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          Networking
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-44 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          Job App Support
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-44 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          Counselling
        </a>
      </ul>
    </nav>
  );
});
CareersMenu.displayName = "CareersMenu";

export default CareersMenu;
