import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import InfoIcon from "/assets/images/dashboard/info-icon.svg";
import LinkIcon from "/assets/images/dashboard/link-icon.svg";

const DocumentsUploadField = ({ tooltip, type, id, completed, name }) => {
  return (
    <div className="my-2 w-full grid-cols-1">
      <label htmlFor={name} className="text-base mb-1 block">
        Upload {name}
      </label>
      {
        type === "file" && !completed ? 
        <input
        name={name}
        type="file"
        id={id}
        className="border border-[#595959] outline-none rounded-md px-4 py-2 relative w-full"
        required
        /> : type === "link" && !completed ? <Button className="w-full bg-primary rounded-lg p-6 text-md" hasChild>
          <Link>
            {name}
          </Link>
        </Button> : <Button className="border bg-transparent border-green-500 rounded-lg text-primary w-full p-6 text-md">Done </Button>
      }
      <div className="text-xs text-[#595959] flex items-center mt-2 gap-x-2">
        <img src={InfoIcon} className="" />
        {tooltip}
        {type === "link" && <span>
          <img src={LinkIcon} />
        </span>}
      </div>
    </div>
  );
};

export default DocumentsUploadField;
