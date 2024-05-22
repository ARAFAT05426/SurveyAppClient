import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../HOOKS/useAuth";
import Loader from "../LOADER/Loader";
const Private = ({ children }) => {
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
Private.propTypes = {
  children: PropTypes.node,
};
export default Private;
