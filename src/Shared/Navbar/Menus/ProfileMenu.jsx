import axios from "@/api/axios";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useAuth from "@/hooks/useAuth";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import AvatarIcon from "/assets/images/navbar/avatar-icon.svg";
import LogOutIcon from "/assets/images/navbar/profile/logout.svg";
import ProfileIconActive from "/assets/images/navbar/profile/profile-active.svg";
import ProfileIcon from "/assets/images/navbar/profile/profile.svg";
import SettingIcon from "/assets/images/navbar/profile/setting.svg";
import { Fragment } from "react";
// const authToken = getAuthToken();
const ProfileMenu = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const logout = async () => {
    const authToken = localStorage.getItem("token");
    // try {
    const logoutPromise = () =>
      axios.post(
        "/logout",
        { authToken },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          // withCredentials: true,
        }
      );

    toast.promise(logoutPromise, {
      loading: "Logging out...",
      success: () => {
        return "Logged out successfully";
      },
      error: (err) => {
        console.log(err);
        // return err?.response?.data?.error;
        return "Something went wrong";
      },
    });

    // if (response?.status === 200) {
    //   localStorage.removeItem("token");
    //   setAuth(false);
    //   toast("Logout Successful", {
    //     action: {
    //       label: "Close",
    //       onClick: () => console.log(""),
    //     },
    //   });
    //   navigate("/login");
    // }

    logOut();
    navigate("/login");
  };
  const location = useLocation();
  const isActive = location.pathname === "/dashboard/profile";
  return (
    <Fragment>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            {" "}
            <img
              src={AvatarIcon}
              alt="avatar-icon"
              className="w-5 cursor-pointer transition-all outline-none"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <NavLink
                to="/dashboard/profile"
                className={(isActive ? "text-primary" : "") + " flex space-x-3"}
              >
                {isActive ? (
                  <img src={ProfileIconActive} alt="" className="" />
                ) : (
                  <img src={ProfileIcon} alt="" className="" />
                )}
                <span>My Account</span>
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex space-x-3 cursor-pointer">
              <img src={SettingIcon} alt="" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button
                onClick={logout}
                className="flex space-x-3 cursor-pointer"
              >
                <img src={LogOutIcon} alt="" />
                <span>Logout</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link
          to="/login"
          className="bg-primary hover:shadow-md transition-all text-white text-[12px] rounded-xl px-4 py-2"
        >
          Login
        </Link>
      )}
    </Fragment>
  );
};

export default ProfileMenu;
