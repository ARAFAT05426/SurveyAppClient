import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import useRole from "../HOOKS/useRole";
import Loader from "../COMPONENTS/LOADER/Loader";
const AdminRoute = ({ children }) => {
  const { role, isLoading } = useRole();

  if (isLoading) return <Loader />;
  if (role === "admin") {
    return children;
  }
  return <Navigate to="/dashboard" />;
};

export default AdminRoute;

AdminRoute.propTypes = {
  children: PropTypes.element,
};
