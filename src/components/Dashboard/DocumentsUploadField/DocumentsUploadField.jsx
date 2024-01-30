import React from "react";
import InfoIcon from "/assets/images/dashboard/info-icon.svg";
import LinkIcon from "/assets/images/dashboard/link-icon.svg";

const DocumentsUploadField = ({ label, tooltip, link, name }) => {
  return (
    <div className="my-2 w-full max-w-80">
      <label htmlFor={name} className="text-base mb-1 block">
        {label}
      </label>
      <input
        name={name}
        type="file"
        className="border border-[#595959] outline-none rounded-md px-4 py-2 relative w-full"
      />
      <div className="text-xs text-[#595959] flex mt-2 gap-x-1">
        <img src={InfoIcon} />
        {tooltip}
        <span>
          <img src={LinkIcon} />
        </span>
      </div>
    </div>
  );
};

export default DocumentsUploadField;
