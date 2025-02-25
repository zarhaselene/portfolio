"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import ScrollIndicator from "../components/ScrollIndicator";
import Socials from "../components/Socials";
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
    <motion.div
      className="h-[90vh] mb-12 w-full relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:max-w-[1280px] lg:max-w-[900px] sm:max-w-[580px]">
        {/* Animated Heading */}
        <motion.div
          className="flex items-center justify-center"
          variants={containerVariants}
        >
          {renderLetters("Front", letterClass)}
          {/* Animated middle line */}
          <motion.span
            className="block w-full bg-base-content h-[10px] 
            mx-[10px] min-w-[50px] sm:h-[15px] sm:mx-[15px] lg:h-[30px] !lg:mx-[50px]"
            style={{
              minWidth: isLargeScreen ? `${lineWidth}px` : "auto",
            }}
            variants={lineVariants}
          ></motion.span>
          {renderLetters("End", letterClass)}
        </motion.div>

        {/* Developer title and intro text */}
        <div className="heading flex flex-col lg:items-start xl:flex-row xl:items-center xl:justify-between">
          <motion.div variants={containerVariants}>
            {renderLetters("Developer", letterClass)}
          </motion.div>
          {/* Introduction text animation */}
          <motion.div
            className="mt-5 w-[100%] max-w-[100%] lg:mt-5 xl:w-1/4 xl:text-right lg:text-left xl:items-start text-left"
            variants={introTextVariants}
          >
            <motion.h4 className="tracking-[3px] text-[1.2rem] font-light text-secondary hover:animate-jello min-w-[9rem] inline-block">
              Hello there,
            </motion.h4>
            <motion.p className="text-[2.5rem]">I&rsquo;m Zarha</motion.p>
            <motion.p
              className="text-[1rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              Stockholm-based web developer specializing in front-end magic.
              <br />
              Let&rsquo;s collaborate and make the web extraordinary.
            </motion.p>
          </motion.div>
        </div>
      </div>
      <div>
        <Socials />
        <ScrollIndicator />
        <Location />
      </div>
    </motion.div>
  );
};

export default Hero;
