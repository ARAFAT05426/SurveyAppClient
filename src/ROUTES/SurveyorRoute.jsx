import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import useRole from "../HOOKS/useRole";
import Loader from "../COMPONENTS/LOADER/Loader";
const SurveyorRoute = ({ children }) => {
  const { role, isLoading } = useRole();

  if (isLoading) return <Loader />;
  if (role === "surveyor") {
    return children;
  }
  return <Navigate to="/dashboard" />;
};

export default SurveyorRoute;

SurveyorRoute.propTypes = {
  children: PropTypes.element,
};
