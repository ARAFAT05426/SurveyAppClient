import { MdList, MdPlaylistAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SuveyorTabs = () => {
  return (
    <>
      <NavLink
        to="addSurvey"
        className={({ isActive }) =>
          `flex items-center px-5 py-3 gap-3 text-sm lg:text-base font-semibold border-b border-black/10 border-l-4 ${
            isActive ? "border-l-primary/85" : "border-l-transparent"
          }`
        }
      >
        <MdPlaylistAdd className="text-xl" size={24} />
        Add Survey
      </NavLink>
      <NavLink
        to="mySurveys"
        className={({ isActive }) =>
          `flex items-center px-5 py-3 gap-3 text-sm lg:text-base font-semibold border-b border-black/10 border-l-4 ${
            isActive ? "border-l-primary/85" : "border-l-transparent"
          }`
        }
      >
        <MdList className="text-xl" size={24} />
        My Surveys
      </NavLink>
    </>
  );
};

export default SuveyorTabs;
