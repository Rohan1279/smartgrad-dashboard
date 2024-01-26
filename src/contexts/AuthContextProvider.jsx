import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const Authcontext = createContext();
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  //   REGISTER USER
  const createUser = (email, password) => {
    setLoading(true);
    let accessToken = Math.random().toString(36);
    let newUser = {
      email,
      password,
      accessToken,
    };
    console.log(newUser);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("user", JSON.stringify(newUser));
    setLoading(false);

    // const savedUsers = localStorage.getItem("users");
    // localStorage.setItem(
    //   "users",
    //   JSON.stringify([
    //     ...JSON.parse(savedUsers),
    //     { email, password, accessToken },
    //   ])
    // );

    // fetch("http://localhost:5000/api/v1/user/register", {
    //   method: "POST",
    //   body: JSON.stringify({ email, password }),
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     // localStorage.setItem("accessToken", accessToken);
    //     // localStorage.setItem(users, JSON.stringify(users));
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setLoading(false);
    //   });
  };
  //   LOGIN USER
  const login = (email, password) => {
    setLoading(true);
  };
  const logOut = () => {
    localStorage.removeItem("accessToken");
    return null;
  };
  useEffect(() => {
    localStorage.getItem("user") &&
      setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logOut,
  };

  return (
    <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
  );
};

export default AuthContextProvider;

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
