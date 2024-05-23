import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loader from "../COMPONENTS/Loader/Loader";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation();
  if (loading) {
    return <Loader />;
  }
  if (!user) {
    return (
      <Navigate to={"/logIn"} state={location?.pathname}></Navigate>
    );
  }
  return <section>{children}</section>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
