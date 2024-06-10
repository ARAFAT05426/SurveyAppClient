import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";
import useAuth from "../../../HOOKS/useAuth";
import useToast from "../../../HOOKS/useToast";
import PrimaryBtn from "../../COMMON/BUTTONS/PrimaryBtn";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();
  const { showToast } = useToast();

  const handleLogOut = async () => {
    try {
      await logOut();
      await showToast("We will be waiting", "success");
      setIsOpen(false);
    } catch (error) {
      console.error("Logout error:", error);
      showToast("An error occurred. Please try again.", "error");
    }
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
            className="w-14 h-14 p-1 bg-primary/80 rounded-full cursor-pointer"
            src={user?.photoURL || "https://i.ibb.co/nDMvB3b/image-Errr.gif"}
            alt="User"
          />
          <div
            className={`absolute right-0 mt-1 text-white overflow-hidden bg-black/50 flex flex-col shadow-lg rounded px-5 text-center transition-all duration-500 ${
              isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
            }}
          >
            <NavLink
              className="px-5 py-2 mb-5 text-sm border-b-2 rounded-xl"
              to="/dashboard"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </NavLink>
            <PrimaryBtn
              className={"text-xs"}
              text="Log Out"
              type={"button"}
              onClick={handleLogOut}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
