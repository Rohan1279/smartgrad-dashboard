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
  const handleRegister = (formData) => {
    // console.log(formData);
    login(formData.email, formData.password);
  };
  return (
    <div className="grid grid-cols-3 w-full min-h-screen">
      <div className="w-full col-span-1 flex justify-center items-center">
        <img src={NavIcon} alt="" />
      </div>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="w-full col-span-2 bg-[#F5F5F5] flex flex-col justify-center items-center"
      >
        <div>
          <label htmlFor="email" className="text-left">
            {/* Email */}
          </label>
          <input
            {...register("email", { required: true })}
            id="email"
            type="email"
            name="email"
            className="border border-[#595959] w-[300px] h-[50px] px-[10px] rounded-md "
            placeholder="Email"
          />
          <p>{errors.email?.type === "required" && "Email is required"}</p>
        </div>
        <div>
          <label htmlFor="password" className="text-left">
            {/* Password */}
          </label>
          <input
            {...register("password", { required: true })}
            id="password"
            type="password"
            name="password"
            className="border border-[#595959] w-[300px] h-[50px] px-[10px] rounded-md"
            placeholder="Password"
          />
          <p>
            {errors.password?.type === "required" && "Password is required"}
          </p>
        </div>
        <div className="flex justify-center items-center mt-20 space-x-5">
          <button className=" w-[272px] h-[50px] rounded-md bg-[#00D4D6]">
            Get Started
          </button>
          <Link
            to="/register"
            className="w-[272px] h-[50px] rounded-md bg-[#595959] text-[#f9f9f9] flex justify-center items-center"
          >
            Go to Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
