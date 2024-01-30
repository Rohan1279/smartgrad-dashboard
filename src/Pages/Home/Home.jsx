import axios from "@/api/axios";
import useAuth from "@/hooks/useAuth";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useEffect, useState } from "react";

const Home = () => {
  const { user } = useAuth();

  const axiosPrivate = useAxiosPrivate();

  return <div></div>;
};

export default Home;
