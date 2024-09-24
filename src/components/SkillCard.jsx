// import React from "react";

// const SkillCard = ({ icon, name }) => (
//   <div className="bg-gray-800  hover:bg-gray-700 transition duration-300 logo-out">
//     <div className="logo">{icon}</div>
//     <div className="logo-name">{name}</div>
//   </div>
// );

// export default SkillCard;


import React from "react";

const SkillCard = ({ icon, name, hoverColor }) => (
  <div className={`bg-gray-800 ${hoverColor} transition duration-100 logo-out p-4 flex flex-col items-center`}>
    <div className="logo">
      {/* Use the hoverColor prop for hover effect */}
      <span className={` transition duration-100 `}>
        {icon}
      </span>
    </div>
    <div className="logo-name text-white mt-2 ">{name}</div>
  </div>
);

export default SkillCard;

