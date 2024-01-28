import axios from "@/api/axios";
import useAuth from "@/hooks/useAuth";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useEffect, useState } from "react";

const Home = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  useEffect(() => {
    const getUsers = async () => {
      const response = await axiosPrivate.get("/users");
      setUsers(response.data);
    };
    getUsers();
  }, [axiosPrivate]);

  return (
    <div>
      <h1>Home</h1>
      {users.map((user, idx) => (
        <div key={idx}>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
