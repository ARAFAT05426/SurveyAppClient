import { NavLink } from "react-router-dom";
import { TfiStatsUp } from "react-icons/tfi";
import { LuUserCog } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { MdPostAdd } from "react-icons/md";

const Tabs = () => (
  <>
    <NavLink to="/dashboard" end className={({ isActive }) => `flex items-center px-5 py-3 gap-3 text-sm lg:text-base font-semibold border-b border-black/10 border-l-4 ${isActive ? "border-l-primary/85" : "border-l-transparent"}`}>
        <TfiStatsUp className="text-xl" size={24} />
      Statistics
    </NavLink>
    <NavLink to="addServey" end className={({ isActive }) => `flex items-center px-5 py-3 gap-3 text-sm lg:text-base font-semibold border-b border-black/10 border-l-4 ${isActive ? "border-l-primary/85" : "border-l-transparent"}`}>
        <MdPostAdd className="text-xl" size={24} />
      Add Survey
    </NavLink>
    <NavLink to="userProfile" className={({ isActive }) => `flex items-center px-5 py-3 gap-3 text-sm lg:text-base font-semibold border-b border-black/10 border-l-4 ${isActive ? "border-l-primary/85" : "border-l-transparent"}`}>
        <LuUserCog className="text-xl" size={24} />
      Prifile
    </NavLink>
    <NavLink to="/contact" className={({ isActive }) => `flex items-center px-5 py-3 gap-3 text-sm lg:text-base font-semibold border-b border-black/10 border-l-4 ${isActive ? "border-l-primary/85" : "border-l-transparent"}`}>
        <CiSettings className="text-xl" size={24} />
      Setting
    </NavLink>
  </>
);

export default Tabs;
