import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import Loader from "../COMPONENTS/LOADER/Loader";
import useRole from "../HOOKS/useRole";

const UserRoute = ({ children }) => {
  const { role, isLoading } = useRole();

  if (isLoading) return <Loader />;
  if (role === "user") {
    return children;
  }
  return <Navigate to="/dashboard" />;
};

export default UserRoute;
UserRoute.propTypes = {
  children: PropTypes.element,
};
