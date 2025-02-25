"use client";
import { useState, useEffect } from "react";

const ScrollIndicator = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasMounted]);

  if (!hasMounted) return null; // Prevents server-side rendering issues

  const opacity = Math.max(1 - scrollY / 200, 0);

  return (
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 text-sm flex flex-col items-center"
      style={{ opacity }}
    >
      <span className="w-1.5 h-1.5 bg-secondary rounded-full absolute -top-2 left-1/2 -translate-x-1/2 animate-moveAndFade"></span>
      <span>Scroll to Explore</span>
    </div>
  );
};

export default ScrollIndicator;
