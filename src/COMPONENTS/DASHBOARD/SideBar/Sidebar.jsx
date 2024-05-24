import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useToast from "../../../Hooks/useToast";
import "./Sidebar.css";
import Tabs from "./Tabs/Tabs";
import { useState } from "react";

const Sidebar = () => {
  const { user, logOut } = useAuth();
  const { showToast } = useToast();
  const [isActive, setActive] = useState(false);

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
      {/* SmallDevice Toggler */}
      <div className="SDS flex md:hidden bg-slate-100">
        <Link to={"/"}>
          <img className="w-28" src="/logo.png" alt="Logo" />
        </Link>
        <AiOutlineBars className="cursor-pointer" onClick={() => setActive(!isActive)} size={30} />
      </div>

      {/* Main Content */}
      <div
        className={`LDS bg-slate-100 ${
          isActive ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } md:translate-x-0 md:opacity-100`}
      >
        {/* Top Area */}
        <div className="LDS_top space-y-5">
          <Link to="/">
            <img
              className="hidden md:flex w-36 mx-auto"
              src="/logo.png"
              alt="Logo"
            />
          </Link>
          <div className="space-y-2">
            <img
              className="w-36 mx-auto p-1 rounded-full"
              src={user?.photoURL}
              alt="User"
            />
            <h1 className="font-bold text-center">{user?.displayName}</h1>
            <p className="font-semibold text-xs text-center">{user?.email}</p>
          </div>
        </div>

        {/* Middle Area */}
        <div className="LDS_middle flex-1">
          <Tabs />
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
      </div>
    </>
  );
};

export default Sidebar;
