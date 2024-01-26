import { useEffect, useState } from "react";
import DashboardAvatar from "/assets/images/dashboard/dashboard-avatar.png";

import Form from "../../../components/Form/Form";
import { useNavigate, useParams } from "react-router-dom";
const UniversityDashboard = () => {
  const { id } = useParams();
  // console.log("id", id);
  const [formManager, setFormManager] = useState({});
  const [currentTab, setCurrentTab] = useState(id);
  // console.log("currentTab", currentTab);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/university-dashboard-forms.json")
      .then((res) => res.json())
      .then((res) => {
        setFormManager(res?.data);
        // console.log(formManager);
      });
  }, []);

  return (
    <div className="text-[#595959]">
      <div className="flex flex-col justify-center md:flex-row md:justify-start items-center space-x-12">
        <img src={DashboardAvatar} alt="avatar" className="w-40" />

        <div className="text-center md:text-left">
          <h1 className="text-[40px] font-bold ">My Dashboard</h1>
          <p className="pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
      </div>
      <ul className="flex items-center flex-wrap mt-16 pl-[10px]">
        {formManager?.form?.map((item) => {
          return (
            <a
              key={item?.form_id}
              href={`#${item?.form_id}`}
              className={`  
              mr-[42px] relative
                ${
                  parseInt(currentTab) === item?.form_id
                    ? "text-[#09D5D7] font-bold  "
                    : ""
                }
              `}
              onClick={(e) => {
                e.preventDefault();
                setCurrentTab(item?.form_id);
                navigate("/dashboard/university/" + item?.form_id);
              }}
            >
              {item.name}
              {parseInt(currentTab) === item?.form_id && (
                <hr className="  border mt-[10px] border-[#09D5D7] w-1/2 absolute -bottom-[11px] translate-x-1/2" />
              )}
            </a>
          );
        })}
      </ul>
      <hr className="w-full  border mt-[10px] border-[#D9D9D9]" />
      <Form
        formManager={formManager}
        currentTab={currentTab}
        id={currentTab}
        setFormManager={setFormManager}
      />
    </div>
  );
};

export default UniversityDashboard;
