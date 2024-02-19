import axios from "@/api/axios";
import { Separator } from "@/components/ui/separator";
import { Authcontext } from "@/contexts/AuthContextProvider";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useAuth from "../../hooks/useAuth";
import NavIcon from "/assets/images/navbar/smartgrad-logo.png";

const Register = () => {
  const [registrationStatus, setRegistrationStatus] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const { user, auth } = useContext(Authcontext);
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleRegister = async (formData) => {
    const name = formData.name;
    const email = formData.email;
    const password = formData.password;

    const registerPromise = () =>
      axios.post(
        "/register",
        { name: name, email: email, password: password },
        {
          headers: { "Content-Type": "application/json" },
          // withCredentials: true,
        }
      );

    toast.promise(registerPromise, {
      loading: "Creating account...",
      success: () => {
        setRegistrationStatus(true);
        reset();
        return "Account created successfully";
      },
      error: (err) => {
        const errors = err?.response?.data?.error;

        if (errors?.email) {
          return errors?.email[0];
        } else if (errors?.password) {
          return errors?.password[0];
        } else if (errors?.name) {
          return errors?.name[0];
        } else {
          return "An error occured, please try again";
        }
      },
    });
  };
  
  if (user) {
    return <Navigate to={"/dashboard/home"} />;
  } else {
    return (
      <div className="grid grid-cols-7 w-full min-h-screen text-[#595959]">
        <div className="hidden mmd:flex w-full col-span-4 flex justify-center items-center">
          <img src={NavIcon} alt="" />
        </div>
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="w-full col-span-7 mmd:col-span-3 bg-[#F5F5F5] flex flex-col justify-end items-start  px-10 sm:px-28"
        >
          {registrationStatus && (
            <div className="w-full h-10 bg-[#00D4D6] text-center text-white rounded-b-xl">
              <p className="leading-8">Verification Link Has Been Sent!</p>
            </div>
          )}
          <h1 className="text-left text-3xl font-bold mb-5 uppercase mt-auto">
            Register Now!
          </h1>
          <div className="w-full  mb-3">
            <label htmlFor="name" className="text-left block">
              Name
            </label>
            <input
              {...register("name", {
                required: true,
              })}
              id="name"
              type="name"
              name="name"
              className={`  w-full px-[10px] py-2 rounded-md outline-none ${
                errors.name?.type === "required"
                  ? "border border-red-500"
                  : "border border-[#595959]"
              }`}
              placeholder="Enter Your Name"
            />
            <p className="text-red-500">
              {errors.name?.type === "required" && "Name is required"}
            </p>
          </div>
          <div className="w-full mb-3 ">
            <label htmlFor="email" className="text-left block">
              Email Address
            </label>
            <input
              {...register("email", { required: true })}
              id="email"
              type="email"
              name="email"
              className={`  w-full px-[10px] py-2 rounded-md outline-none ${
                errors.email?.type === "required"
                  ? "border border-red-500"
                  : "border border-[#595959]"
              }`}
              placeholder="Email"
            />
            <p className="text-red-500">
              {errors.email?.type === "required" && "Email is required"}
            </p>
          </div>
          <div className="w-full  ">
            <label htmlFor="password" className="text-left block">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              id="password"
              type="password"
              name="password"
              className={`  w-full px-[10px] py-2 rounded-md outline-none ${
                errors.password?.type === "required"
                  ? "border border-red-500"
                  : "border border-[#595959]"
              }`}
              placeholder="Password"
            />
            <p className="text-red-500">
              {errors.password?.type === "required" && "Password is required"}
            </p>
          </div>
          <div className="w-full flex flex-col justify-end items-center mt-10 space-y-5">
            <Link to="/login" className="hover:underline ">
              Already have an account?
            </Link>
            <button className=" w-[272px] h-[50px] text-white font-bold rounded-md bg-[#00D4D6]">
              Get Started
            </button>
          </div>
          <div className="w-full">
            <div className="flex  justify-center items-center space-x-6 mt-14">
              <Separator className="w-1/4 bg-[#595959]" />
              <span>Or</span>
              <Separator className="w-1/4 bg-[#595959]" />
            </div>
            <button
              type="button"
              className="mx-auto  bg-white px-5 py-2 rounded-md shadow-lg active:shadow-none mt-5 transition-all border flex justify-center items-center space-x-2"
            >
              <img
                src={
                  "https://cdn3.iconfinder.com/data/icons/3d-applications/256/app_icons_social_media_search___google_logo_engine_software.png"
                }
                alt="google-icon"
                className="w-5"
              />
              <span>Google</span>
            </button>
          </div>
          <p className="uppercase my-auto text-center mmd:text-start text-xs">
            your virtual education and career advisor, for life. Smartgrad is a
            brand owned by Yugen Group Limited,registered in UK.
          </p>
        </form>
      </div>
    );
  }
};

export default Register;
