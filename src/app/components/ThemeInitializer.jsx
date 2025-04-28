"use client";

import { useEffect } from "react";

export default function ThemeInitializer() {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "green";
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  // This component doesn't render anything
  return null;
}
