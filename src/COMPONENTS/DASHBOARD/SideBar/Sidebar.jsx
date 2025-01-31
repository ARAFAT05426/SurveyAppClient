import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../HOOKS/useAuth";
import useToast from "../../../HOOKS/useToast";
import "./Sidebar.css";
import { useState } from "react";
import { RiSurveyLine } from "react-icons/ri";
import useRole from "../../../HOOKS/useRole";
import UserTabs from "./Tabs/UserTabs";
import SuveyorTabs from "./Tabs/SuveyorTabs";
import AdminTabs from "./Tabs/AdminTabs";

const Sidebar = () => {
  const { user, logOut } = useAuth();
  const { showToast } = useToast();
  const [isActive, setActive] = useState(false);
  const { role } = useRole();

  const handleLogout = async () => {
    try {
      await logOut();
      showToast("Successfully logged out!", "success", "green");
    } catch (error) {
      showToast("Error logging out. Please try again.", "error", "red");
    }
  };

  return (
    <>
      {/* Small Device Toggler */}
      <div className="SDS flex lg:hidden bg-black/20 backdrop-blur-3xl w-full">
        <Link to={"/"}>
          <img className="w-28" src="/logo.png" alt="Logo" />
        </Link>
        <AiOutlineBars
          className="cursor-pointer"
          onClick={() => setActive(!isActive)}
          size={30}
        />
      </div>

      {/* Main Content */}
      <nav
        className={`LDS bg-black/20 backdrop-blur-3xl ${
          isActive
            ? "translate-x-0 opacity-100 w-60"
            : "-translate-x-full opacity-0 w-0"
        } lg:translate-x-0 lg:w-60 lg:opacity-100`}
      >
        {/* Top Area */}
        <div className="LDS_top space-y-5">
          <Link to="/">
            <img
              className="hidden lg:flex w-28 lg:w-40 mx-auto"
              src="/logo.png"
              alt="Logo"
            />
          </Link>
          <div className="space-y-2">
            <img
              onError={(e) => {
                e.target.src = "https://i.ibb.co/nDMvB3b/image-Errr.gif";
              }}
              className="w-36 mx-auto p-1 bg-primary/80 rounded-full cursor-pointer"
              src={user?.photoURL || "https://i.ibb.co/nDMvB3b/image-Errr.gif"}
            />
            <h1 className="font-bold text-center">{user?.displayName}</h1>
            <p className="font-semibold text-xs text-center">{user?.email}</p>
          </div>
        </div>

        {/* Middle Area */}
        <div className="LDS_middle flex-1">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `flex items-center px-5 py-3 gap-3 text-sm lg:text-base font-semibold border-b border-black/10 border-l-4 ${
                isActive ? "border-l-primary/85" : "border-l-transparent"
              }`
            }
          >
            <RiSurveyLine className="text-xl" size={24} />
            Statistics
          </NavLink>
          {role === "user" || role === "prouser" ? <UserTabs /> : null}
          {role === "surveyor" ? <SuveyorTabs /> : null}
          {role === "admin" ? <AdminTabs /> : null}
        </div>

        {/* Bottom Area */}
        <div className="LDS_bottom">
          {/* Embedded Programming Blog */}
          <div className="blog p-1 bg-white/15 rounded-sm shadow my-4">
            <div className="image-container">
              <img
                className="h-28 w-full"
                src="https://source.unsplash.com/featured/?technology"
                alt=""
              />
            </div>
            <a
              href="https://dev.to/"
              className="text-xs italic underline text-center"
            >
              Explore Latest Blogs
            </a>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 flex items-center gap-3 font-semibold"
          >
            <GrLogout className="h-5 w-5" />
            Log Out
          </button>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
