import { MdInsertComment } from "react-icons/md";
import { RiSurveyLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const UserTabs = () => {
  return (
    <>
      <NavLink
        to="perticipate"
        className={({ isActive }) =>
          `flex items-center px-5 py-3 gap-3 text-sm lg:text-base font-semibold border-b border-black/10 border-l-4 ${
            isActive ? "border-l-primary/85" : "border-l-transparent"
          }`
        }
      >
        <RiSurveyLine className="text-xl" size={24} />
        Perticipate
      </NavLink>
      <NavLink
        to="reported"
        className={({ isActive }) =>
          `flex items-center px-5 py-3 gap-3 text-sm lg:text-base font-semibold border-b border-black/10 border-l-4 ${
            isActive ? "border-l-primary/85" : "border-l-transparent"
          }`
        }
      >
        <MdInsertComment className="text-5xl" size={24} />
        Reported
      </NavLink>
      <NavLink
        to="commented"
        className={({ isActive }) =>
          `flex items-center px-5 py-3 gap-3 text-sm lg:text-base font-semibold border-b border-black/10 border-l-4 ${
            isActive ? "border-l-primary/85" : "border-l-transparent"
          }`
        }
      >
        <MdInsertComment className="text-5xl" size={24} />
        Commented
      </NavLink>
    </>
  );
};

export default UserTabs;
