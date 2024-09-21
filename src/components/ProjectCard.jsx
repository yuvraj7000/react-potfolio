// import React from "react";

// const ProjectCard = ({ title, description, image }) => (
//   <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
//     <img src={image} alt={title} className="w-full h-40 object-cover"/>
//     <div className="p-6">
//       <h4 className="text-xl font-bold mb-2">{title}</h4>
//       <p className="mb-4">{description}</p>
//       <button className="bg-yellow-400 text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-yellow-300 transition duration-300">Learn More</button>
//     </div>
//   </div>
// );

// export default ProjectCard;
import React from "react";

const ProjectCard = ({ title, description, image }) => (
  <div className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out max-w-sm mx-auto">
    <img src={image} alt={title} className="w-full h-48 object-cover"/>
    <div className="p-6">
      <h4 className="text-2xl font-bold mb-3 text-white">{title}</h4>
      <p className="mb-6 text-gray-400">{description}</p>
      <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 py-2 px-8 rounded-full font-bold shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">Learn More</button>
    </div>
  </div>
);

export default ProjectCard;
