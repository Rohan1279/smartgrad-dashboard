import { useForm } from "react-hook-form";
import NavIcon from "/assets/images/navbar/smart-grad.png";
import { Authcontext } from "../../contexts/AuthContextProvider";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Register = () => {
  const { createUser, user } = useContext(Authcontext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = (formData) => {
    // console.log(formData);
    createUser(formData.email, formData.password);
  };
  return (
    <div className="grid grid-cols-3 w-full min-h-screen text-[#595959]">
      <div className="w-full col-span-1 flex justify-center items-center">
        <img src={NavIcon} alt="" />
      </div>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="w-full col-span-2 bg-[#F5F5F5] flex flex-col justify-end items-start px-48 "
      >
        <h1 className="text-left text-3xl font-bold mb-5 uppercase mt-auto">
          Register Now!
        </h1>
        <div className="w-full  ">
          <label htmlFor="email" className="text-left block">
            Email Address
          </label>
          <input
            {...register("email", { required: true })}
            id="email"
            type="email"
            name="email"
            className="border border-[#595959] w-full px-[10px] py-2 rounded-md mb-3"
            placeholder="Email"
          />
          <p>{errors.email?.type === "required" && "Email is required"}</p>
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
            className="border border-[#595959] w-full px-[10px] py-2 rounded-md"
            placeholder="Password"
          />
          <p>
            {errors.password?.type === "required" && "Password is required"}
          </p>
        </div>
        <div className="w-full flex justify-end items-center mt-10 space-x-10">
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
          <button className="mx-auto  bg-white px-5 py-2 rounded-md shadow-lg active:shadow-none mt-5 transition-all border flex justify-center items-center space-x-2">
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
        <p className="uppercase my-auto text-xs pr-40">
          your virtual education and career advisor, for life. Smartgrad is a
          brand owned by Yugen Group Limited,registered in UK.
        </p>
      </form>
    </div>
  );
};

export default Register;
