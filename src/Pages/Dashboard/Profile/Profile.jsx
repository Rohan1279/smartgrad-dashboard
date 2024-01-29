import DashboardAvatar from "/assets/images/dashboard/dashboard-avatar.png";

import { useEffect, useState } from "react";
import Form from "../../../components/Form/Form";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  // console.log("id", id);
  const [formManager, setFormManager] = useState({});
  const [currentForm, setCurrentForm] = useState({});
  const [currentTab, setCurrentTab] = useState(null);
  // console.log("currentTab", currentTab);
  const navigate = useNavigate();

  const handleTabChange = (form_id) => {
    // handle form change for tab
    setCurrentForm(() => {
      return formManager?.form?.find((item) => item?.form_id === form_id);
    });
  };

  useEffect(() => {
    fetch("/profile-dashboard-form.json")
      .then((res) => res.json())
      .then((res) => {
        setFormManager(res?.data);
        // default sets the first tab or the first tab
        setCurrentTab(
          () =>
            res?.data?.form.find((item) => item?.form_id === parseInt(id))
              ?.form_id || res.data.form[0].form_id
        );
        // default sets the first form or the first form
        setCurrentForm(
          () =>
            res?.data?.form.find((item) => item?.form_id === parseInt(id)) ||
            res.data.form[0]
        );
      });

    return () => {
      setFormManager({});
      setCurrentForm({});
      setCurrentTab(null);
    };
  }, []);
  return (
    <div className="text-[#595959]">
      <div className="flex flex-col justify-center md:flex-row md:justify-start items-center space-x-12">
        <img src={DashboardAvatar} alt="avatar" className="w-40" />

        <div className="text-center md:text-left">
          <h1 className="text-[40px] font-bold ">Hello User,</h1>
          <p className="pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
      </div>
      <div className="bg-red-200">
        <ul className="bg-blue-200  flex items-center flex-wrap mt-5 gap-y-4 pl-[10px]">
          {formManager?.form?.map((item) => {
            return (
              <button
                key={item?.form_id}
                className={`  
              mr-[42px] relative flex-1 
                ${
                  parseInt(currentTab) === item?.form_id
                    ? "text-[#09D5D7] font-bold  "
                    : ""
                }
              `}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentTab(item?.form_id);
                  handleTabChange(item?.form_id);
                  navigate("/dashboard/profile/" + item?.form_id);
                }}
              >
                {item.name}
                {parseInt(currentTab) === item?.form_id && (
                  <hr className="  border mt-[10px] border-[#09D5D7] w-1/2 absolute -bottom-[11px] translate-x-1/2" />
                )}
              </button>
            );
          })}
        </ul>
      </div>
      <hr className="w-full  border mt-[10px] border-[#D9D9D9]" />
      <Form
        currentForm={currentForm}
        setCurrentForm={setCurrentForm}
        currentTab={currentTab}
      />
    </div>
  );
};

export default Profile;
