import React from "react";

const SkillCard = ({ icon, name }) => (
  <div className="bg-gray-800  hover:bg-gray-700 transition duration-300 logo-out">
    <div className="logo">{icon}</div>
    <div className="logo-name">{name}</div>
  </div>
);

export default SkillCard;

// import React from "react";

// const SkillCard = ({ icon, name, level }) => (
//   <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-6 rounded-lg text-center hover:scale-105 transform transition duration-300 ease-in-out max-w-xs mx-auto shadow-lg border border-gray-700">
//     <div className="mb-4 text-4xl text-yellow-400">{icon}</div>
//     <h4 className="text-2xl font-bold mb-2 text-white">{name}</h4>
//     <p className="text-gray-400">{level}</p>
//     <div className="mt-4">
//       <div className="h-2 w-full bg-gray-700 rounded-full">
//         <div
//           className="h-full bg-yellow-400 rounded-full"
//           style={{ width: level }}
//         ></div>
//       </div>
//     </div>
//   </div>
// );

// export default SkillCard;
