
import React from "react";
import './tech.css'

const SkillCard = ({ icon, name, hoverColor }) => (
  <div className={`bg-gray-800 ${hoverColor} transition duration-100 logo-out p-2 flex flex-col items-center hov`}>
    <div className="logo">

      <span className={`transition duration-100 `}>
        {icon}
      </span>
    </div>
    <div className={`logo-name mt-2 ${hoverColor} tex`}>{name}</div>
  </div>
);

export default SkillCard;

