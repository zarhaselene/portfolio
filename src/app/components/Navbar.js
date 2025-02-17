"use client";
import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./Svgs";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex items-center w-full min-h-16">
      <div className="flex-1">
        <a className="text-xl">Zarha Selene</a>
      </div>
      <div className="flex-none">
        <label className="grid cursor-pointer place-items-center">
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1 hover:bg-secondary"
            checked={theme === "light"}
            onChange={handleThemeToggle}
          />
          <SunIcon />
          <MoonIcon />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
