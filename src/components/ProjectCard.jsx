import React from "react";

const ProjectCard = ({ title, description, image }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
    <img src={image} alt={title} className="w-full h-40 object-cover"/>
    <div className="p-6">
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="mb-4">{description}</p>
      <button className="bg-yellow-400 text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-yellow-300 transition duration-300">Learn More</button>
    </div>
  </div>
);

export default ProjectCard;
