"use client";

import React, { useState, useEffect } from "react";
import ScrollIndicator from "../components/ScrollIndicator";
import Socials from "../components/Socials";
import Location from "../components/Location";

const Hero = () => {
  const [hoveredLetter, setHoveredLetter] = useState(null);
  const [lineWidth, setLineWidth] = useState(100);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (isLargeScreen) {
      const position = window.scrollY;
      const scrollDistance = 200;
      const scrollRatio = Math.min(position / scrollDistance, 1);
      const newLineWidth = 400 + scrollRatio * 560;
      setLineWidth(newLineWidth);
    }
  };

  // Update screen size on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Adjust based on lg breakpoint (1024px)
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check screen size on mount

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLargeScreen]);

  const letterClass =
    "font-header text-[4rem] sm:text-[6rem] lg:text-[10rem] leading-[90%] transition-all duration-300 hover:text-secondary hover:text-shadow-custom";

  // Function to handle mouse enter event on a letter
  const handleMouseEnter = (letter) => {
    setHoveredLetter(letter);
  };

  // Function to render each letter of a word with hover effect
  const renderLetters = (word, className) => {
    return word.split("").map((letter, index) => (
      <span
        key={index}
        className={
          hoveredLetter === letter ? `${className} hovered` : className
        }
        onMouseEnter={() => handleMouseEnter(letter)}
      >
        {letter}
      </span>
    ));
  };

  return (
    <div className="h-[90vh] w-full relative overflow-hidden ">
      <div className=" w-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:max-w-[950px] lg:max-w-[640px] sm:max-w-[480px] border-2">
        {/* "Front-End" Section */}
        <div className="topHeading flex items-center justify-center">
          {/* Front Word */}
          {renderLetters("Front", letterClass)}
          {/* Line - Dynamic width  */}
          <span
            className="block w-full bg-base-content h-[10px] 
            mx-[10px] min-w-[50px] sm:h-[15px] sm:mx-[15px] lg:h-[20px] !lg:mx-[50px]"
            style={{ minWidth: isLargeScreen ? `${lineWidth}px` : "auto" }}
          ></span>

          {/* End Word */}
          {renderLetters("End", letterClass)}
        </div>
        {/* Developer Section */}
        <div className="heading flex flex-col lg:items-start xl:flex-row xl:items-center xl:justify-between">
          <div>{renderLetters("Developer", letterClass)}</div>
          <div className="mt-5 w-[100%] max-w-[100%] lg:mt-5 xl:w-1/3 xl:text-right lg:text-left xl:items-start text-left">
            <h3 className="tracking-[3px] text-[1.2rem] font-light text-secondary hover:animate-jello w-36 lg:w-auto">
              Hello there,
            </h3>
            <p className="text-[2.5rem]">I&rsquo;m Zarha</p>
            <p className="text-[1rem]">
              Stockholm-based web developer specializing in front-end magic.
              <br />
              Let&rsquo;s collaborate and make the web extraordinary.
            </p>
          </div>
        </div>
      </div>
      <Socials />
      <ScrollIndicator />
      <Location />
    </div>
  );
};

export default Hero;
