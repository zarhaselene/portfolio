import React from "react";
import { FaMapPin } from "react-icons/fa";

const Location = () => {
  return (
    <div className="location hidden sm:block absolute bottom-0  right-0 lg:right-10 text-sm">
      <div className="flex">
        <span className="text-secondary">
          <FaMapPin size={20} alt="Map pin icon" />
        </span>
        <span className="ml-1">Stockholm</span>
      </div>
    </div>
  );
};

export default Location;
