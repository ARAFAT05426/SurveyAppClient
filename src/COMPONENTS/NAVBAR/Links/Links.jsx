import { NavLink } from "react-router-dom";
import "./Links.css";

const Links = () => (
  <>
    <NavLink 
      to="/" 
      className={({ isActive }) => isActive ? "active link" : "link"}>
      Home
    </NavLink>
    <NavLink 
      to="/about" 
      className={({ isActive }) => isActive ? "active link" : "link"}>
      About
    </NavLink>
    <NavLink 
      to="/contact" 
      className={({ isActive }) => isActive ? "active link" : "link"}>
      Contact
    </NavLink>
  </>
);

export default Links;
