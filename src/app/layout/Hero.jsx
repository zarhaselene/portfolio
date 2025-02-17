"use client";

import React, { useState, useEffect } from "react";
import ScrollIndicator from "../components/ScrollIndicator";
import Socials from "../components/Socials";
import Location from "../components/Location";

const Hero = () => {
  const [hoveredLetter, setHoveredLetter] = useState(null);
  const [lineWidth, setLineWidth] = useState(450);

  // Function to handle scroll event
  const handleScroll = () => {
    const position = window.scrollY;
    // Distance for the effect to start
    const scrollDistance = 200;
    // Calculate the scroll ratio based on the scroll distance
    const scrollRatio = Math.min(position / scrollDistance, 1);
    // Calculate the new width of the line based on the scroll ratio
    const newLineWidth = 400 + scrollRatio * 560;
    setLineWidth(newLineWidth);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const letterClass =
    "font-header text-[4rem] md:text-[6rem] lg:text-[10rem] xl:text-[15rem] leading-[90%] transition-all duration-300 hover:text-secondary hover:text-shadow-custom";

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
      <div className="max-w-[1300px] w-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:max-w-[800px] lg:max-w-[640px] md:max-w-[480px]">
        {/* "Front-End" Section */}
        <div className="topHeading flex items-center justify-center">
          {/* Front Word */}
          {renderLetters("Front", letterClass)}
          {/* Line - Dynamic width  */}
          <span
            className="block w-full bg-base-content !h-[10px] 
            mx-[10px] !min-w-[20px] md:h-[15px] md:mx-[15px] lg:h-[35px] !lg:mx-[50px]"
            style={{ minWidth: `${lineWidth}px` }}
          ></span>

          {/* End Word */}
          {renderLetters("End", letterClass)}
        </div>
        {/* Developer Section */}
        <div className="heading flex flex-col lg:items-start xl:flex-row xl:items-center xl:justify-between">
          <div>{renderLetters("Developer", letterClass)}</div>
          <div className="mt-5 w-[100%] max-w-[100%] sm:text-[13px] lg:mt-5 lg:w-1/4 lg:text-right xl:w-full xl:text-left xl:items-start text-left">
            <h3 className="tracking-[3px] text-[1.2rem] font-light text-secondary hover:animate-jello w-36">
              Hello there,
            </h3>
            <p className="text-[2.5rem]">I&rsquo;m Zarha</p>
            <p className="text-[13px]">
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
