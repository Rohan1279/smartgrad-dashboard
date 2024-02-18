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
import { Link } from "react-router-dom";
import NotificationIcon from "/assets/images/navbar/notification/notification.svg";

const NotificationMenu = () => {
  const { user } = useContext(Authcontext);
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (user?.id !== undefined) {
      const channel = pusher.subscribe(
        import.meta.env.VITE_PUSHER_CHANNEL + user?.id
      );

      channel.bind(import.meta.env.VITE_PUSHER_EVENT, function (data) {
        setNotifications((prev) => {
          return [data, ...prev];
        });
      });
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


  useEffect(() => {
    if (open) {
      axios
        .post("/notifications/", {
          token: localStorage.getItem("token"),
        })
        .then(() => {
          setNotifications((prev) => {
            return prev.map((data) => {
              return { ...data, unread: false };
            });
          });
        });
    }
  }, [open]);

  return (
    <div>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger className="relative">
          <img
            src={NotificationIcon}
            alt="avatar-icon"
            className="w-5 cursor-pointer transition-all outline-none"
          />
          {(notifications?.filter(data=> data?.unread)).length > 0 && (
            <span className="w-3 h-3 absolute rounded-full bg-[#F1662A] -top-1 -right-2 text-[9px] text-center text-white">
              {(notifications.filter(data=> data?.unread)).length}
            </span>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="max-w-96">
          {notifications.map((notification, key) => (
            <DropdownMenuItem
              key={key}
              className="flex space-x-3 cursor-pointer"
            >
              <Link to={notification.url} className="flex justify-center items-center space-x-1">
              {
                <img
                  className="w-8"
                  src={notificationIcons[notification.type][notification.level]}
                  alt=""
                />
              }
              <span>{notification?.text}</span>
              </Link>
            </DropdownMenuItem>
          ))}
          <Button className="w-full bg-transparent text-primary">
            View All
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NotificationMenu;
