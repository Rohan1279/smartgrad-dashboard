import PropTypes from "prop-types";
import { useContext } from "react";
import { Authcontext } from "../../contexts/AuthContextProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  console.log(user);
  if (loading) {
    return (
      <p className="w-20 h-20 rounded-full border-8 border-primary border-dashed animate-spin mx-auto mt-10"></p>
    );
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
ProtectedRoute.propTypes = {
  children: PropTypes.node,
};
