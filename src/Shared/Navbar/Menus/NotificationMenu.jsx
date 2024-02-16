import { useEffect, useState } from "react";
import NotificationIcon from "/assets/images/navbar/notification/notification.svg";

import axios from "@/api/axios";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import notificationIcons from "@/utils/Icon";

const NotificationMenu = () => {
  const [notifications, setNotifications] = useState([]);
  


  useEffect(() => {
    axios
      .get("/notifications/", {
        params: {
          token: localStorage.getItem("token"),
        },
      })
      .then(({ data }) => {
        setNotifications(data);
      });
  }, []);

  const name = "John Doe";
  name.substring(0, 1);

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
        <DropdownMenuContent className="max-w-96">
          
          {
            notifications.map((notification, key) => (
              <DropdownMenuItem key={key} className="flex space-x-3 cursor-pointer">
                {<img className="w-8" src={notificationIcons[notification.type][notification.level]} alt="" />}
                <span>{notification?.text}</span>
              </DropdownMenuItem>
            ))
          }
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NotificationMenu;
