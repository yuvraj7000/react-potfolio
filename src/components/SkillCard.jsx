import React from "react";

const SkillCard = ({ icon, name, level }) => (
  <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition duration-300">
    <div className="mb-4">{icon}</div>
    <h4 className="text-xl font-bold mb-2">{name}</h4>
    <p>{level}</p>
  </div>
);

export default SkillCard;
