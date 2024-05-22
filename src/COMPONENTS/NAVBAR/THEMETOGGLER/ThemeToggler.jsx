import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import "./ThemeToggler.css";

const ThemeToggler = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  return (
    <div className="theme-toggler">
      <label className="toggle w-10 h-10" htmlFor="theme-switch">
        <input
          id="theme-switch"
          className="toggle-input"
          type="checkbox"
          onChange={handleToggle}
          checked={theme === "dark"}
          aria-label="Toggle dark mode"
        />
        <div className="icon icon--moon">
          <FaMoon size={24} />
        </div>
        <div className="icon icon--sun">
          <MdOutlineWbSunny size={24} />
        </div>
      </label>
    </div>
  );
};

export default ThemeToggler;
