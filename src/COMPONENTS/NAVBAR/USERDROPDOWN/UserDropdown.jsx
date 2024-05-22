import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";
import useAuth from "../../../HOOKS/useAuth";
import toast from "react-hot-toast";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();

  const handleLogOut = async () => {
    await logOut();
    toast.success("We will be waiting", {
      position: "top-center",
      style: {
        backgroundColor: "#007bff",
        color: "white",
        fontSize: "13px",
      },
    });
  };

  return (
    <div className="relative">
      {!user ? (
        <Link className="text-4xl font-bold" to="/logIn">
          <BiLogInCircle />
        </Link>
      ) : (
        <div className="relative">
          <img
            onError={(e) => {
              e.target.src = "https://i.ibb.co/nDMvB3b/image-Errr.gif";
            }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 p-1 bg-black/50 rounded-full cursor-pointer"
            src={user?.photoURL}
            alt="User Avatar"
          />
          <div
            className={`absolute right-0 mt-2 w-48 overflow-hidden bg-white shadow-lg rounded-md transition-all duration-500 ${
              isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
            }}
          >
            <NavLink
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </NavLink>
            <NavLink
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              to="/profile"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </NavLink>
            <NavLink
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              to="/settings"
              onClick={() => setIsOpen(false)}
            >
              Settings
            </NavLink>
            <button
              onClick={() => {
                handleLogOut();
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
