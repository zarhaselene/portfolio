import React from "react";

const Heading = ({ word }) => (
  <div
    className="mt-8 bg-base-200 shadow-dividers
    relative flex items-center justify-center  -mx-[8vw] 
    lg:py-8 py-[10px] lg:mt-[80px] lg:mb-[50px] mb-[30px] "
  >
    <span className="text-secondary text-[3rem] lg:text-[5rem] uppercase font-bold">
      {word}
    </span>
  </div>
);

export default Heading;
