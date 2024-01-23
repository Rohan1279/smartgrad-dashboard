import { useEffect, useState } from "react";
import Form from "../../../components/Form/Form";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const [formManager, setFormManager] = useState({});
  const [currentTab, setCurrentTab] = useState(1 || id);

  useEffect(() => {
    fetch("/profile-form-data.json")
      .then((res) => res.json())
      .then((res) => {
        setFormManager(res?.data);
        console.log(formManager);
      });
  }, []);
  return (
    <div className="text-[#595959]">
      <h1 className="text-[40px] font-bold pt-10">Hello User,</h1>
      <p className="pt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{" "}
      </p>

      <ul className="flex items-center flex-wrap mt-16 pl-[10px]">
        {formManager?.form?.map((item, idx) => {
          return (
            <a
              key={item?.form_id}
              href={`#${item?.form_id}`}
              className={`  
              mr-[42px]
                ${
                  currentTab === item?.form_id
                    ? "text-[#09D5D7] font-bold border-b  border-b-[#09D5D7] "
                    : ""
                }
              `}
              onClick={(e) => {
                e.preventDefault();
                setCurrentTab(item?.form_id);
              }}
            >
              {item.name}
            </a>
          );
        })}
      </ul>
      <hr className="w-full  border mt-[10px] border-[#D9D9D9]" />
      <Form formManager={formManager} currentTab={currentTab} id={currentTab} />
    </div>
  );
};

export default Profile;
