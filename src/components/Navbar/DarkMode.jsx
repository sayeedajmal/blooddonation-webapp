import React from "react";
import { useTheme } from "../ThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center p-4">
      <label className="themeSwitcherTwo relative flex cursor-pointer select-none items-end">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
          className="sr-only"
        />
        <span
          className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            isDarkMode ? "bg-[#212b36]" : "bg-[#e6eff8]"
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-slate-300 duration-200 ${
              isDarkMode ? "translate-x-[28px]" : ""
            }`}
          ></span>
        </span>
      </label>
    </nav>
  );
};

export default Navbar;
