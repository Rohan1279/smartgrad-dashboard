import { forwardRef } from "react";

const UniversitiesMenu = forwardRef((props, ref) => {
  return (
    <nav ref={ref} className="rounded-xl">
      <ul className="">
        <a className=" pl-2 w-52 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          University Admission
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />
        <a className=" pl-2 w-52 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          Essay Writing
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />
        <a className=" pl-2 w-52 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          Visa Processing & Travel
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />
        <a className=" pl-2 w-52 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          Extracurricular Activities & Soft Skills
        </a>
      </ul>
    </nav>
  );
});

UniversitiesMenu.displayName = "UniversitiesMenu";

export default UniversitiesMenu;
