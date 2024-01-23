import { forwardRef } from "react";

const NetworksMenu = forwardRef((props, ref) => {
  return (
    <nav ref={ref} className="rounded-xl">
      <ul>
        <a className="pl-2 w-44 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          Sector Consultants
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-44 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          Mentors
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-44 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          Friends
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-44 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          Networking
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-44 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          Community
        </a>
      </ul>
    </nav>
  );
});
NetworksMenu.displayName = "NetworksMenu";

export default NetworksMenu;
