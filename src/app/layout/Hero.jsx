"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollIndicator from "../components/ScrollIndicator";
import Socials from "../components/Socials";
import Location from "../components/Location";

const Hero = () => {
  const [hoveredLetter, setHoveredLetter] = useState(null);
  const [lineWidth, setLineWidth] = useState(100);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Handles scroll event to dynamically adjust the width of the animated line
  const handleScroll = () => {
    if (isLargeScreen) {
      const position = window.scrollY;
      const scrollDistance = 200; // Maximum scroll distance to trigger full animation
      const scrollRatio = Math.min(position / scrollDistance, 1); // Ensures value stays between 0 and 1
      const newLineWidth = 100 + scrollRatio * 560; // Adjust line width based on scroll position
      setLineWidth(newLineWidth);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Detects if screen size is large
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check when component mounts

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLargeScreen]);

  // CSS class for animated letters in the heading
  const letterClass =
    "font-header font-bold text-[4rem] sm:text-[6rem] lg:text-[10rem] xl:text-[14rem] leading-[90%] transition-all duration-300 hover:text-secondary hover:text-shadow-custom";

  const handleMouseEnter = (letter) => {
    setHoveredLetter(letter);
  };

  // Framer Motion animation variants

  // Parent container animation: Staggers children for a sequential reveal effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delays each child by 0.1s
        delayChildren: 0.3, // Starts revealing after 0.3s
      },
    },
  };

  // Animation for each letter: Bounces in from above
  const letterVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100, // Determines how much spring effect
        damping: 12, // Controls how bouncy the animation is
      },
    },
  };

  // Animation for the middle line: Expands horizontally
  const lineVariants = {
    hidden: { scaleX: 0 }, // Starts as invisible (scaleX = 0)
    visible: {
      scaleX: 1, // Expands fully
      transition: {
        duration: 0.8, // Animation duration
        ease: "easeInOut", // Smooth ease-in-out effect
        delay: 0.5, // Delays after the heading starts appearing
      },
    },
  };

  // Animation for introduction text: Slides in from the left
  const introTextVariants = {
    hidden: { opacity: 0, x: -50 }, // Starts off-screen
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 1, // Delays text appearance by 1s
        ease: "easeOut", // Smooth slide-in effect
      },
    },
  };

  // Function to render animated letters
  const renderLetters = (word, className) => {
    return word.split("").map((letter, index) => (
      <motion.span
        key={index}
        variants={letterVariants} // Applies bounce effect to each letter
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
      className="h-[90vh] w-full relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants} // Triggers staggered animation
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
            style={{ minWidth: isLargeScreen ? `${lineWidth}px` : "auto" }}
            variants={lineVariants} // Expanding animation
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
