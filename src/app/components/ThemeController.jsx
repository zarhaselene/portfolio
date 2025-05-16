import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const initializeTheme = () => {
  // Check if code is running in browser environment
  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem("theme") || "green";
    document.documentElement.setAttribute("data-theme", storedTheme);
    return storedTheme;
  }
  return "green";
};

const ThemeSelector = () => {
  // Use the result of initializeTheme as the initial state
  const [theme, setTheme] = useState(() => initializeTheme());
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const optionsRef = useRef([]);
  const buttonRef = useRef(null);
  const containerRef = useRef(null);

  const themes = [
    { name: "dark", label: "Dark" },
    { name: "green", label: "Green" },
  ];

  // When theme changes, update localStorage and document
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (isOpen && optionsRef.current[focusedIndex]) {
      optionsRef.current[focusedIndex]?.focus();
    }
  }, [isOpen, focusedIndex]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const closeDropdown = () => {
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (!isOpen) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev + 1) % themes.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev - 1 + themes.length) % themes.length);
    } else if (e.key === "Escape") {
      closeDropdown();
    } else if (e.key === "Enter") {
      setTheme(themes[focusedIndex].name);
      closeDropdown();
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        ref={buttonRef}
        onClick={() => {
          setIsOpen((prev) => !prev);
          setFocusedIndex(themes.findIndex((t) => t.name === theme));
        }}
        onKeyDown={handleKeyDown}
        className="px-4 py-2 bg-base-100 hover:bg-base-300 transition-colors flex items-center gap-2 focus-ring"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="theme-listbox"
        id="theme-button"
      >
        <span className="font-header text-lg">Theme</span>
        <svg
          width="12"
          height="12"
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="currentColor"
          viewBox="0 0 2048 2048"
          aria-hidden="true"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-2 w-48 bg-base-300 rounded-md shadow-md z-50"
            variants={{
              hidden: { opacity: 0, y: -5 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
            role="listbox"
            id="theme-listbox"
            aria-labelledby="theme-button"
          >
            {themes.map((t, i) => (
              <button
                key={t.name}
                ref={(el) => (optionsRef.current[i] = el)}
                onClick={() => {
                  setTheme(t.name);
                  closeDropdown();
                }}
                onKeyDown={handleKeyDown}
                className={`w-full px-4 py-2 text-left hover:bg-secondary/80 rounded-md hover:text-primary transition-colors font-header focus-ring 
          ${
            theme === t.name ? "text-secondary bg-primary" : "text-base-content"
          }`}
                role="option"
                aria-selected={theme === t.name}
                id={`theme-option-${t.name}`}
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
