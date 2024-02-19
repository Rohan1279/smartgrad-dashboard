import { GlobalContext } from "@/contexts/ContextProvider";
import { useContext } from "react";

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default useGlobalContext;
