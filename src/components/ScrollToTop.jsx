import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button 
      onClick={scrollToTop} 
      className={`fixed bottom-6 right-6 p-4 rounded-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition duration-300 ${visible ? "block" : "hidden"}`}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
