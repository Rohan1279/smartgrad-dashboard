import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import AvatarIcon from "/assets/images/navbar/avatar-icon.svg";
import LogOutIcon from "/assets/images/navbar/profile/logout.svg";
import LogOutIconActive from "/assets/images/navbar/profile/logout-active.svg";
import ProfileIcon from "/assets/images/navbar/profile/profile.svg";
import ProfileIconActive from "/assets/images/navbar/profile/profile-active.svg";
import SettingIcon from "/assets/images/navbar/profile/setting.svg";
import SettingIconActive from "/assets/images/navbar/profile/setting-active.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useAuth from "@/hooks/useAuth";
import axios from "@/api/axios";
import getAuthToken from "@/utils/useAuthToken";
import { toast } from "sonner";
// const authToken = getAuthToken();
const ProfileMenu = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
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
        localStorage.removeItem("token");
        setAuth(false);

        navigate("/login");
        return "Logged out successfully";
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
  };
  const location = useLocation();
  const isActive = location.pathname === "/dashboard/profile";
  return (
    <div>
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
    </div>
  );
};

export default ProfileMenu;
