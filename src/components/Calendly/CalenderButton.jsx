import { Authcontext } from "@/contexts/AuthContextProvider";
import { useContext } from "react";

const CalenderButton = ({ text, cb }) => {
  const { user } = useContext(Authcontext);
  
  const handleClick = () => {
    cb && cb();
    
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/arnab_barua/30min",
      prefill: {
        name: user?.name,
        email: user?.email,
      },
    });
  };

  return (
    <button
      onClick={handleClick}
      className="w-[128px] h-[30px] bg-primary rounded-[10px] text-white text-[12px] mt-1"
    >
      {text}
    </button>
  );
};

export default CalenderButton;
