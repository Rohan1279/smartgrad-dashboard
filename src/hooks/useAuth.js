import { Authcontext } from "../contexts/AuthContextProvider";
import { useContext } from "react";

const useAuth = () => {
  return useContext(Authcontext);
};

export default useAuth;
