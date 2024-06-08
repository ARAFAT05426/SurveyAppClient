import { NavLink } from "react-router-dom";
import "./Links.css";

const Links = () => (
  <>
    <NavLink 
      to="/" 
      className={({ isActive }) => isActive ? "bg-primary/90 text-white active link" : "link"}>
      Home
    </NavLink>
    <NavLink 
      to="/surveys" 
      className={({ isActive }) => isActive ? "bg-primary/90 text-white active link" : "link"}>
      Surveys
    </NavLink>
    <NavLink 
      to="/pricing" 
      className={({ isActive }) => isActive ? "bg-primary/90 text-white active link" : "link"}>
      Pricing
    </NavLink>
    <NavLink 
      to="/about" 
      className={({ isActive }) => isActive ? "bg-primary/90 text-white active link" : "link"}>
      About
    </NavLink>
    <NavLink 
      to="/contact" 
      className={({ isActive }) => isActive ? "bg-primary/90 text-white active link" : "link"}>
      Contact
    </NavLink>
  </>
);

export default Links;
