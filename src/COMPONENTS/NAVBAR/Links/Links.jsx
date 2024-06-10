import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Links.css";

const Links = ({close}) => (
  <>
    <NavLink 
      onClick={() =>close(false)}
      to="/" 
      className={({ isActive }) => isActive ? "bg-primary/90 text-white active link" : "link"}>
      Home
    </NavLink>
    <NavLink 
      onClick={() =>close(false)}
      to="/surveys" 
      className={({ isActive }) => isActive ? "bg-primary/90 text-white active link" : "link"}>
      Surveys
    </NavLink>
    <NavLink 
      onClick={() =>close(false)}
      to="/pricing" 
      className={({ isActive }) => isActive ? "bg-primary/90 text-white active link" : "link"}>
      Pricing
    </NavLink>
    <NavLink 
      onClick={() =>close(false)}
      to="/contact" 
      className={({ isActive }) => isActive ? "bg-primary/90 text-white active link" : "link"}>
      Contact
    </NavLink>
  </>
);

export default Links;
Links.propTypes = {
  close: PropTypes.func.isRequired,
};