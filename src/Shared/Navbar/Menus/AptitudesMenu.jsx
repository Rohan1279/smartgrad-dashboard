import { forwardRef } from "react";

const AptitudesMenu = forwardRef((props, ref) => {
  return (
    <nav ref={ref} className=" rounded-xl">
      <ul>
        <a className="pl-2 w-48 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          Soft Skills
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-48 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          Standardized Test Prep
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-48 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          Technical Skills
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-48 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          Networking
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-48 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          Business Skills
        </a>
      </ul>
    </nav>
  );
});
AptitudesMenu.displayName = "AptitudesMenu";

export default AptitudesMenu;
