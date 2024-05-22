import { useState } from "react";
import useAuth from "../../../HOOKS/useAuth";
import { Link, NavLink } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";
import toast from "react-hot-toast";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();
  const handleLogOut = async () => {
    await logOut();
    return toast.success("we will be waiting", {
      position: "top-center",
      style: {
        backgroundColor: "#007bff",
        color: "white",
        fontSize: "13px",
      },
    });
  };
  return (
    <div>
      {!user ? (
        <Link className="text-4xl font-bold" to={"/logIn"}>
          <BiLogInCircle />
        </Link>
      ) : (
        <div className="relative">
          <img
            onError={(e) => {
              e.target.src = "https://i.ibb.co/nDMvB3b/image-Errr.gif";
            }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 p-1 bg-black/50 rounded-full cursor-pointer"
            src={user?.photoURL}
            alt=""
          />
          <div
            className={`absolute right-0 mt-1 px-3 overflow-hidden bg-slate-50/50 backdrop-blur-3xl transition-all duration-500 flex flex-col items-center rounded ${
              isOpen ? "h-48 opacity-100 py-5" : "h-0 opacity-0 py-0"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
            }}
          >
            <NavLink
              className="px-4 py-2"
              to="/"
            >
              Dashboard
            </NavLink>
            <NavLink
              className="px-4 py-2"
              to="/profile"
            >
              Profile
            </NavLink>
            <NavLink
              className="px-4 py-2"
              to="/settings"
            >
              Settings
            </NavLink>
            <button onClick={handleLogOut} className="px-4 py-2">
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
