import DashboardAvatar from "/assets/images/dashboard/dashboard-avatar.png";

import { useContext, useEffect, useState } from "react";
import Form from "../../../components/Form/Form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "@/api/axios";
import { Authcontext } from "@/contexts/AuthContextProvider";

const Profile = () => {
  const { id } = useParams();

  const { user } = useContext(Authcontext);
  const [formManager, setFormManager] = useState({});
  const [currentForm, setCurrentForm] = useState({});
  const [currentTab, setCurrentTab] = useState(null);

  const navigate = useNavigate();

  const handleTabChange = (form_id) => {
    // handle form change for tab
    setCurrentForm(() => {
      return formManager?.form?.find((item) => item?.form_id === form_id);
    });
  };

  useEffect(() => {
    // MAKE THIS A CUSTOM HOOK FOR FORM MANGER

    axios
      .get("/form/profile", {
        params: {
          token: localStorage.getItem("token"),
        },
      })
      .then(({ data }) => {
        setFormManager(data?.data);

        // default sets the first tab or the first tab
        setCurrentTab(
          () =>
            data?.data?.form.find((item) => item?.form_id === parseInt(id))
              ?.form_id || data.data.form[0].form_id
        );
        // default sets the first form or the first form
        setCurrentForm(
          () =>
            data?.data?.form.find((item) => item?.form_id === parseInt(id)) ||
            data?.data.form[0]
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
      <div className="hidden md:flex flex-col justify-center md:flex-row md:justify-start items-center space-x-12">
        <img src={DashboardAvatar} alt="avatar" className="w-40" />

        <div className="text-center md:text-left">
          <h1 className="text-[40px] font-bold ">Hello {user?.name},</h1>
          <p className="pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
      </div>
      <div className="">
        <ul className="max-w-80 md:max-w-full overflow-x-scroll overflow-y-hidden md:overflow-y-hidden md:overflow-x-hidden flex items-center  mt-5 gap-y-4 pl-[10px]">
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
                  <hr className="border mt-[10px] border-[#09D5D7] w-1/2 absolute -bottom-[11px] translate-x-1/2" />
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
