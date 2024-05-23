import { NavLink } from "react-router-dom";
import { TfiStatsUp } from "react-icons/tfi";
import { LuUserCog } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
const Tabs = () => (
  <>
    <NavLink to="/dashboard" end className={({ isActive }) => `flex items-center px-5 py-3 gap-3 border-b border-l-4 ${isActive && "border-l-red-500"} border-l-transparent`}>
        <TfiStatsUp size={24} />
      Statistics
    </NavLink>
    <NavLink to="userProfile" className={({ isActive }) => `flex items-center px-5 py-3 gap-3 border-b border-l-4 ${isActive && "border-l-red-500"} border-l-transparent`}>
        <LuUserCog size={24} />
      Prifile
    </NavLink>
    <NavLink to="/contact" className={({ isActive }) => `flex items-center px-5 py-3 gap-3 border-b border-l-4 ${isActive && "border-l-red-500"} border-l-transparent`}>
        <CiSettings size={24} />
      Setting
    </NavLink>
  </>
);

export default Tabs;
