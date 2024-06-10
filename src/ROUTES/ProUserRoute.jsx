import PropTypes from "prop-types";
import useRole from "../HOOKS/useRole";
import Loader from "../COMPONENTS/LOADER/Loader";
import { Navigate } from "react-router-dom";

const ProUserRoute = ({ children }) => {
  const { role, isLoading } = useRole();

  if (isLoading) return <Loader />;
  if (role === "prouser") {
    return children;
  }
  return <Navigate to="/dashboard" />;
};
ProUserRoute.propTypes = {
  children: PropTypes.element,
};
export default ProUserRoute;
