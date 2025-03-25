import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ThemeSelector = () => {
  const [theme, setTheme] = useState("green");
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { name: "dark", label: "Dark" },
    { name: "light", label: "Light" },
    { name: "green", label: "Green" },
  ];

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

  // Define animation variants for the dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-base-100 rounded-md hover:bg-primary transition-colors flex items-center gap-2"
      >
        <span className="font-header text-lg text-secondary">Theme</span>
        <svg
          width="12"
          height="12"
          className={`transform transition-transform text-secondary ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="currentColor"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
        </svg>
      </button>

      {/* Animate dropdown visibility with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-2 w-48 bg-base-300 rounded-md shadow-md z-50"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
          >
            {themes.map((t) => (
              <button
                key={t.name}
                onClick={() => {
                  setTheme(t.name);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-left hover:bg-secondary/80 rounded-md hover:text-primary transition-colors font-header
                  ${
                    theme === t.name
                      ? "text-secondary bg-primary"
                      : "text-base-content"
                  }`}
              >
                {t.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { ThemeSelector };
