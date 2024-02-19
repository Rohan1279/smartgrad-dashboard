import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const Authcontext = createContext();


const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  // const authToken = useAuthToken();

  //   REGISTER USER
  const createUser = (email, password) => {
    setLoading(true);
    let accessToken = Math.random().toString(36);
    let newUser = {
      email,
      password,
      accessToken,
    };

    setLoading(false);
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
    // const authToken = localStorage.getItem("token");
    // if (authToken) {
    //   setAuth(true);
    // }
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

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
    <Authcontext.Provider value={authInfo}>
        {children}
    </Authcontext.Provider>
  );
};

export default AuthContextProvider;

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
