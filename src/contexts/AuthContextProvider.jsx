import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const Authcontext = createContext();
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(user);
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
  useEffect(() => {}, []);

  const authInfo = {
    auth,
    setAuth,
    user,
    setUser,
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
