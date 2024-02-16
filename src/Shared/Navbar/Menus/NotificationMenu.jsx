import axios from "@/api/axios";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Authcontext } from "@/contexts/AuthContextProvider";
import notificationIcons from "@/utils/Icon";
import { pusher } from "@/utils/pusher";
import { useContext, useEffect, useState } from "react";
import NotificationIcon from "/assets/images/navbar/notification/notification.svg";

const NotificationMenu = () => {
  const { user } = useContext(Authcontext);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    console.log("outer");
    if (user?.id !== undefined) {
      console.log("inner");
      const channel = pusher.subscribe(import.meta.env.VITE_PUSHER_CHANNEL+user?.id);
      
      channel.bind(import.meta.env.VITE_PUSHER_EVENT, function(data) {
        setNotifications((prev) => {
          return [data,...prev ];
        });
      })
    }
  }, [user]);


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
          <Button className="w-full bg-transparent text-primary">View All</Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NotificationMenu;
