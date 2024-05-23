import { useState } from "react";
import { Link } from "react-router-dom";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { LuLogOut } from "react-icons/lu";
import useAuth from "../../../Hooks/useAuth";
import useToast from "../../../Hooks/useToast";
import Tabs from "./Tabs/Tabs";

const Sidebar = () => {
  const { user, logOut } = useAuth();
  const { showToast } = useToast();
  const [isActive, setIsActive] = useState(false);
  const handleLogOut = async () => {
    try {
      await logOut();
      showToast("You've been logged out successfully.", "success");
    } catch (error) {
      console.error("Logout error:", error);
      showToast("An error occurred during logout. Please try again.", "error");
    }
  };

  return (
    <nav>
      <div
        className={`${
          isActive ? "translate-x-0" : "-translate-x-52"
        } md:translate-x-0 md:opacity-100 transition-all duration-1000 cubic-bezier(0.68, -0.55, 0.27, 1.55) relative`}
      >
        {/* '-' Toggler For Small Device '-' */}
        {isActive ? (
          <GoSidebarExpand
            className="cursor-pointer text-rose-500 md:hidden opacity-100 bg-white absolute left-52 z-30 transition-transform duration-500"
            onClick={() => setIsActive(!isActive)}
            size={35}
          />
        ) : (
          <GoSidebarCollapse
            className="cursor-pointer text-rose-500 md:hidden opacity-100 bg-white absolute left-52 z-30 transition-transform duration-500"
            onClick={() => setIsActive(!isActive)}
            size={35}
          />
        )}
        <aside
          className={`flex flex-col md:w-60 h-screen ${
            isActive ? "opacity-100 w-52 px-5" : "opacity-0 w-0 px-0"
          } md:opacity-100 md:px-10 py-10 overflow-y-auto overflow-x-hidden transition-all duration-1000 cubic-bezier(0.68, -0.55, 0.27, 1.55) bg-white border-r`}
        >
          {/* '-' Top Area '-' */}
          <div>
            <Link to={"/"} className="mx-auto">
              <img
                className="w-auto h-6 sm:h-7"
                src="/logo.png"
                alt="KraftFix Logo"
              />
            </Link>
            <div className="flex flex-col items-center mt-5">
              <img
                className="object-cover w-24 h-24 rounded-full"
                src={user?.photoURL || "https://via.placeholder.com/150"}
                alt="User Avatar"
              />
              <h4 className="mx-2 mt-2 font-medium">
                {user?.displayName || "Guest"}
              </h4>
              <p className="mx-2 mt-1 text-sm font-medium">
                {user?.email || "guest@example.com"}
              </p>
            </div>
          </div>
          {/* '-' Middle Area '-' */}
          <div className="flex flex-col flex-1 mt-6">
            <Tabs />
          </div>
          {/* '-' Bottom Area '-' */}
          <div>
            <h1
              onClick={handleLogOut}
              className="flex items-center gap-3 px-5 py-3 rounded cursor-pointer"
            >
              <LuLogOut size={24} /> Log Out
            </h1>
          </div>
        </aside>
      </div>
    </nav>
  );
};

export default Sidebar;
