"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import ScrollIndicator from "../components/ScrollIndicator";
import Location from "../components/Location";

const Hero = () => {
  const [hoveredLetter, setHoveredLetter] = useState(null);
  const [lineWidth, setLineWidth] = useState(100);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Effect to set initial screen size
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLargeScreen(window.innerWidth >= 1024);
    }
  }, []);

  // Handles scroll event to dynamically adjust the width of the animated line
  const handleScroll = useCallback(() => {
    if (typeof window !== "undefined" && isLargeScreen) {
      const position = window.scrollY;
      const scrollRatio = position / window.innerHeight;
      const newLineWidth = 100 + scrollRatio * window.innerWidth * 2;
      setLineWidth(newLineWidth);
    }
  }, [isLargeScreen]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  // CSS class for animated letters in the heading
  const letterClass =
    "font-header font-bold text-[4rem] sm:text-[6rem] lg:text-[10rem] xl:text-[14rem] leading-[90%] transition-all duration-300 hover:text-secondary hover:text-shadow-custom";

  const handleMouseEnter = (letter) => {
    setHoveredLetter(letter);
  };

  // Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  };

  const introTextVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Function to render animated letters
  const renderLetters = (word, className) => {
    return word.split("").map((letter, index) => (
      <motion.span
        key={index}
        variants={letterVariants}
        className={
          hoveredLetter === letter ? `${className} hovered` : className
        }
        onMouseEnter={() => handleMouseEnter(letter)}
      >
        {letter}
      </motion.span>
    ));
  };

  return (
    <motion.header
      className="h-[95vh] mb-12 w-full relative "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="w-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:max-w-[1280px] lg:max-w-[900px] sm:max-w-[580px]">
        <span className="sr-only">Full-Stack Developer Portfolio - Zarha</span>
        {/* Animated Heading */}
        <motion.span
          className="flex items-center justify-center"
          variants={containerVariants}
        >
          {renderLetters("Full", letterClass)}
          {/* Animated middle line */}
          <motion.span
            className="block w-full bg-base-content h-[10px] 
            mx-[10px] min-w-[50px] sm:h-[15px] sm:mx-[15px] lg:h-[30px] lg:!mx-[50px]"
            style={{
              minWidth: isLargeScreen ? `${lineWidth}px` : "auto",
            }}
            variants={lineVariants}
            aria-hidden="true"
          ></motion.span>
          {renderLetters("Stack", letterClass)}
        </motion.span>

        {/* Developer title and intro text */}
        <span className="heading flex flex-col lg:items-start xl:flex-row xl:items-center xl:justify-between">
          <motion.div variants={containerVariants}>
            {renderLetters("Developer", letterClass)}
          </motion.div>
          {/* Introduction text animation */}
          <motion.div
            className="mt-5 w-[100%] max-w-[100%] lg:mt-5 xl:w-1/3 xl:text-right lg:text-left xl:items-start text-left"
            variants={introTextVariants}
          >
            <motion.p className="tracking-[3px] text-[1.3rem] font-light text-secondary hover:animate-jello inline-block">
              Hello there,
            </motion.p>

            <motion.p className="text-[2.5rem] lg:text-[3rem]">
              I&rsquo;m Zarha
            </motion.p>
            <motion.p
              className="text-[1rem] font-main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              Stockholm-based full-stack developer with a passion for creating
              digital experiences that merge form and function. Specializing in
              frontend development where design meets code to build intuitive,
              accessible applications.
            </motion.p>
          </motion.div>
        </span>
      </h1>
      <div>
        <ScrollIndicator />
        <Location />
      </div>
    </motion.header>
  );
};

export default Hero;
