import { Button } from "@/components/ui/button";
import { IoMdDoneAll } from "react-icons/io";
import { Link } from "react-router-dom";
import InfoIcon from "/assets/images/dashboard/info-icon.svg";
import LinkIcon from "/assets/images/dashboard/link-icon.svg";


const DocumentsUploadField = ({document, setData}) => {
  const { type, id, label, name, text, completed, link} = document;
  return (
    <div className="my-2 w-full grid-cols-1">
      <label htmlFor={label} className="flex items-center text-base mb-1">
      {label} {completed && <IoMdDoneAll className="mx-2 mb-1" />} 
      </label>
      {
        type === "file" && !completed ? 
        <input
        name={name}
        type="file"
        accept=".pdf, image/*"
        id={id}
        className="border border-[#595959] outline-none rounded-md px-4 py-2 relative w-full"
        onChange={(e) => setData((prev) => ({ ...prev, [name]: e.target.files[0] }))}
        required
        /> : type === "link" && !completed ? <Button className="w-full bg-primary rounded-lg p-6 text-md" hasChild>
          <Link to={link}>
            {label}
          </Link>
        </Button> : <Button className="border bg-transparent border-green-500 rounded-lg text-primary w-full p-6 text-md">Accepted</Button>
      }
      <div className="text-xs text-[#595959] flex items-center mt-2 gap-x-2">
        <img src={InfoIcon} className="" />
        {text}
        {type === "link" && <span>
          <img src={LinkIcon} />
        </span>}
      </div>
    </div>
  );
};

export default DocumentsUploadField;
