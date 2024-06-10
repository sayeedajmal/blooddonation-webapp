import React from "react";
import { useTheme } from "../ThemeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <DarkModeSwitch
      className="w-10 h-10 mr-3"
      checked={isDarkMode}
      onChange={toggleTheme}
      size={120}
    />
  );
};

export default Navbar;
