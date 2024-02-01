import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
const ProtectedRoute = ({ children }) => {
  const { user, auth } = useAuth();
  const location = useLocation();
  // console.log(`auth`, auth);
  // const [authToken, setAuthToken] = useState(null);
  const authToken = localStorage.getItem("token");

  return authToken ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
ProtectedRoute.propTypes = {
  children: PropTypes.node,
};
