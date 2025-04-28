"use client";
import React, { useEffect, useState } from "react";
import { ThemeSelector } from "./ThemeController";
import Socials from "./Socials";
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

  return (
    <div className="flex items-center w-full min-h-16">
      <div className="flex-1">
        <a
          tabIndex={0}
          className="text-lg font-header hover:text-secondary inline-block focus-ring"
          href="/"
        >
          Zarha Selene
        </a>
      </div>
      <div className="flex-none">
        <ThemeSelector />
      </div>
      <Socials />
    </div>
  );
};

export default Navbar;
