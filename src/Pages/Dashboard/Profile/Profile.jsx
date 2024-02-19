import DashboardAvatar from "/assets/images/dashboard/dashboard-avatar.png";

import axios from "@/api/axios";
import Loader from "@/components/Loader/Loader";
import { Authcontext } from "@/contexts/AuthContextProvider";
import useGlobalContext from "@/hooks/useGlobalContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../../components/Form/Form";

const Profile = () => {
  const { id } = useParams();
  const {openModal} = useGlobalContext();

  const infoClicked = () => {
    openModal({title: 'This is the feed page', content: <h1>This is feed</h1>});
  }

  const { user } = useContext(Authcontext);
  const [formManager, setFormManager] = useState({});
  const [currentForm, setCurrentForm] = useState({});
  const [currentTab, setCurrentTab] = useState(null);
  const [isFormLoading, setIsFormLoading] = useState(false);

  const navigate = useNavigate();

  const handleTabChange = (form_id) => {
    // handle form change for tab
    setCurrentForm(() => {
      return formManager?.form?.find((item) => item?.form_id === form_id);
    });
  };

  useEffect(() => {
    setIsFormLoading(true);
    // MAKE THIS A CUSTOM HOOK FOR FORM MANGER
    axios
      .get("/form/profile", {
        params: {
          token: localStorage.getItem("token"),
        },
      })
      .then(({ data }) => {
        setIsFormLoading(false);
        setFormManager(data?.data);
        // default sets the first tab or the first tab
        setCurrentTab(
          () =>
            data?.data?.form.find((item) => item?.form_id === parseInt(id))
              ?.form_id || data.data.form[0].form_id
        );
        // default sets the first form
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
    <div className="text-primary ">
      <div className="hidden mmd:flex flex-col justify-center md:flex-row md:justify-start items-center space-x-[34px] shadow-md bg-white rounded-[20px] pl-[34px] py-[24px]">
        <img src={DashboardAvatar} alt="avatar" className="w-[88px]" />
        <div className="text-center md:text-left">
          <h1 className="text-[40px] font-bold ">Hello {user?.name},</h1>
          <p className="">Effortlessly manage all your applications here.</p>
        </div>
      </div>

      <div className="h-fit bg-white mt-5 px-4 sm:px-9 py-5 rounded-xl shadow-md">
        {isFormLoading ? (
          <div className="w-full">
            <Loader className={"mx-auto w-28"} />
          </div>
        ) : (
          <>
            <ul className="max-w-80 md:max-w-full overflow-x-scroll overflow-y-hidden md:overflow-y-hidden md:overflow-x-hidden flex items-center  mt-5 gap-y-4 pl-[10px] ">
              {formManager?.form?.map((item) => {
                return (
                  <button
                    key={item?.form_id}
                    className={`  
                mr-[42px] relative flex-1 
                ${
                  parseInt(currentTab) === item?.form_id
                    ? "text-primary font-bold  "
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
                      <hr className="border mt-[10px] border-primary w-1/2 absolute -bottom-[11px] translate-x-1/2" />
                    )}
                  </button>
                );
              })}
            </ul>

            <hr className="w-full  border mt-[10px] border-[#D9D9D9]" />

            <Form
              currentForm={currentForm}
              setCurrentForm={setCurrentForm}
              currentTab={currentTab}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
