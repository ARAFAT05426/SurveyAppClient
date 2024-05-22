import { Link } from "react-router-dom";
import Links from "./Links/Links";
import logo from "/logo.png";
import "./Navbar.css";
import { useState } from "react";
import UserDropdown from "./USERDROPDOWN/UserDropdown";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="flex h-16 px-5 lg:px-32 py-2 bg-black/20 backdrop-blur-3xl navbar">
      {/* LEFT */}
      <div className="flex items-center gap-1">
        <div className="flex lg:hidden toggle" onClick={() =>setIsNavOpen(!isNavOpen)}>
          <div className={isNavOpen ? "togglebars open" : "togglebars"}>
            <span className="bg-white"></span>
            <span className="bg-white"></span>
            <span className="bg-white"></span>
          </div>
        </div>
        <Link to={"/"}>
          <img className="w-20 h-10" src={logo} alt="Logo" />
        </Link>
      </div>
      {/* CENTER */}
      <div>
        {/* SMALL-DEVICE-LINKS */}
        <div className={`font-semibold snav flex ${isNavOpen ? "h-half opacity-100 py-16" : "h-0 opacity-0 py-0"} lg:hidden bg-black/20 backdrop-blur-3xl`}>
          <Links />
        </div>
        {/* LARGE-DEVICE-LINKS */}
        <div className="font-bold hidden lg:flex items-center">
          <Links />
        </div>
      </div>
      {/* RIGHT */}
      <div>
        <UserDropdown />
      </div>
    </nav>
  );
};

export default Navbar;
