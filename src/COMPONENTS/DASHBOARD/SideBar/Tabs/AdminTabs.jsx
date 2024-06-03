import { FaUsersGear } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const AdminTabs = () => {
  return (
    <>
      <NavLink
        to="allUsers"
        className={({ isActive }) =>
          `flex items-center px-5 py-3 gap-3 text-sm lg:text-base font-semibold border-b border-black/10 border-l-4 ${
            isActive ? "border-l-primary/85" : "border-l-transparent"
          }`
        }
      >
        <FaUsersGear className="text-xl" size={24} />
        All Users
      </NavLink>
    </>
  );
};

export default AdminTabs;
