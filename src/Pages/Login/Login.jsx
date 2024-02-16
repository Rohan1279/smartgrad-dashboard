import { useForm } from "react-hook-form";
import NavIcon from "/assets/images/navbar/smartgrad-logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import useAuth from "../../hooks/useAuth";
import axios from "@/api/axios";
import { toast } from "sonner";
import { setAuthToken } from "@/utils/setAuthToken";
const Login = () => {
  const { setUser, setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const handleLogin = async (formData) => {
    const email = formData.email;
    const password = formData.password;

    const loginPromise = () =>
      axios.post(
        "/login",
        { email: email, password: password },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

    toast.promise(loginPromise, {
      loading: "Logging in...",
      success: (response) => {
        const accessToken = response?.data?.access_token;
        setAuthToken(accessToken);
        setAuth(true);
        setUser(response?.data?.user);
        localStorage.setItem("user", JSON.stringify(response?.data?.user));
        navigate("/dashboard/home");
        reset();
        return "Logged in successfully";
      },
      error: (err) => {
        switch (err?.response?.status) {
          case 400: {
            return "Invalid Credentials";
          }
          case 401: {
            return "Unauthorized";
          }
          default: {
            return "Something went wrong";
          }
        }
      },
    });
  };
  return (
    <div className="grid grid-cols-7 w-full min-h-screen text-[#595959]">
      <div className="hidden mmd:flex w-full col-span-4 flex justify-center items-center">
        <img src={NavIcon} alt="" />
      </div>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="w-full col-span-7 mmd:col-span-3 bg-[#F5F5F5] flex flex-col justify-end items-start px-10 sm:px-28 "
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
          <p className="text-red-400">
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
            className="border border-[#595959] w-full px-[10px] py-2 rounded-md"
            placeholder="Password"
          />
          <p className="text-red-400">
            {errors.password?.type === "required" && "Password is required"}
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-10 space-y-5">
          <Link to="/register" className="hover:underline ">
            New User? Register Now
          </Link>
          <button className=" w-[272px] h-[50px] text-white font-bold rounded-md bg-[#00D4D6]">
            Login
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
};

export default Login;
