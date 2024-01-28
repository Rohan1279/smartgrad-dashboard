import { NavLink } from "react-router-dom";
import NotificationIcon from "/assets/images/navbar/notification/notification.svg";
import NotificationIconActive from "/assets/images/navbar/notification/notification-active.svg";
import UniversityNotifyIcon from "/assets/images/navbar/notification/university-warning.png";
import AptitudesNotifyIcon from "/assets/images/navbar/notification/aptitudes-alert.png";
import UniversitiesIcon from "/assets/images/navbar/convocation-cap.svg";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NotificationMenu = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <img
            src={NotificationIcon}
            alt="avatar-icon"
            className="w-5 cursor-pointer transition-all outline-none"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="flex space-x-3 cursor-pointer">
            <img src={UniversityNotifyIcon} alt="" />
            <span>You got 3 pending requests </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex space-x-3 cursor-pointer">
            <img src={AptitudesNotifyIcon} alt="" />
            <span>You have 2 due submissions</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex space-x-3 cursor-pointer">
            <img src={UniversitiesIcon} alt="" />
            <span>Check out recommendations</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NotificationMenu;
