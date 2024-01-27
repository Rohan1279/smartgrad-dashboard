import { useContext } from "react";
import { Authcontext } from "../../contexts/AuthContextProvider";
import { useForm } from "react-hook-form";
import NavIcon from "/assets/images/navbar/smart-grad.png";
import { Link } from "react-router-dom";

const Login = () => {
  const { createUser, login } = useContext(Authcontext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (formData) => {
    // console.log(formData);
    login(formData.email, formData.password);
  };
  return (
    <div className="grid grid-cols-3 w-full min-h-screen text-[#595959]">
      <div className="w-full col-span-1 flex justify-center items-center">
        <img src={NavIcon} alt="" />
      </div>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="w-full col-span-2 bg-[#F5F5F5] flex flex-col justify-end items-start px-48 "
      >
        <h1 className="text-left text-3xl font-bold mb-5 uppercase mt-auto">
          Login Now!
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
          <Link to="/register" className="hover:underline ">
            New User? Register Now
          </Link>
          <button className=" w-[272px] h-[50px] text-white font-bold rounded-md bg-[#00D4D6]">
            Get Started
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

export default Login;
