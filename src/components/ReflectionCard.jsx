import React, { useState } from "react";
import "./reflection.css";
const ReflectionCard = ({ title, content, onReadMore, onReadLess }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    if (isExpanded) {
      onReadLess(); // Call onReadLess when collapsing the card
    } else {
      onReadMore(); // Call onReadMore when expanding the card
    }
    setIsExpanded(!isExpanded); // Toggle the isExpanded state
  };

  return (
    <div className="bg-gray-800 text-white  shadow-lg max-w-lg w-full transform hover:scale-105 transition duration-300 ease-in-out my-2 ref-con">
      <h2 className="text-2xl font-semibold text-yellow-400 mb-3 ref-tit">{title}</h2>
      <p className={`text-gray-300 mb-3 ref-des`}>
        {content}
      </p>
      <button
        onClick={toggleExpansion}
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition duration-200 focus:outline-none ref-btn"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReflectionCard;

