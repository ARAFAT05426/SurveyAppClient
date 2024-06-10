import { MdInsertComment } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { LuListX } from "react-icons/lu";
import { TfiWrite } from "react-icons/tfi";
import useRole from "../../../../HOOKS/useRole";
const UserTabs = () => {
  const { role } = useRole();
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
        <TfiWrite className="text-xl" size={24} />
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
        <LuListX className="text-5xl" size={24} />
        Reported
      </NavLink>
      {role !== "prouser" ? (
        ""
      ) : (
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
      )}
    </>
  );
};

export default UserTabs;
