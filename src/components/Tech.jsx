// import React from "react";
// import SkillCard from "./SkillCard";
// import { DiMongodb, DiNodejs, DiCss3 } from "react-icons/di";
// import { SiExpress, SiReact } from "react-icons/si";
// import { AiOutlineHtml5, AiOutlineCode } from "react-icons/ai";
// import { FaGithub } from "react-icons/fa";
// import { SiPostman } from "react-icons/si";
// import { GrDocker } from "react-icons/gr";
// import { FaPython } from "react-icons/fa";
// import { TbBrandCpp } from "react-icons/tb";
// import { FaLinux } from "react-icons/fa";
// import { FiFigma } from "react-icons/fi";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { IoLogoJavascript } from "react-icons/io5";
// import "./tech.css";

// const  TechSection = () => {
//   return (
//     <section id="skills" className=" pt-20 py-20">
//       <div className="container mx-auto px-4">
//       <div className="flex justify-center">
//           <div className="dd">
//             <p className="text-4xl font-bold mb-10 text-center anime">Tool / Tech Stack</p>
//           </div>
//         </div>
//         <div className="logo-container">
//           <SkillCard icon={<DiMongodb className="text-5xl" />} name="MongoDB"  />
//           <SkillCard icon={<SiExpress className="text-5xl" />} name="Express.js"  />
//           <SkillCard icon={<SiReact className="text-5xl" />} name="React.js"  />
//           <SkillCard icon={<DiNodejs className="text-5xl" />} name="Node.js" />
//           <SkillCard icon={<AiOutlineHtml5 className="text-5xl" />} name="HTML5"  />
//           <SkillCard icon={<DiCss3 className="text-5xl" />} name="CSS3"  />
//           <SkillCard icon={<RiTailwindCssFill className="text-5xl" />} name="Tailwind"  />
//           <SkillCard icon={<AiOutlineCode className="text-5xl" />} name="JavaScript"  />
//           <SkillCard icon={<FaGithub className="text-5xl" />} name="Git"  />
//           <SkillCard icon={<SiPostman className="text-5xl" />} name="Postman"  />
//           <SkillCard icon={<GrDocker className="text-5xl" />} name="Git"  />
//           <SkillCard icon={<FaPython className="text-5xl" />} name="Git"  />
//           <SkillCard icon={<TbBrandCpp className="text-5xl" />} name="Git"  />
//           <SkillCard icon={<FaLinux className="text-5xl" />} name="Git"  />
//           <SkillCard icon={<FiFigma className="text-5xl" />} name="Git"  />

//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechSection;



import React from "react";
import SkillCard from "./SkillCard";
import { DiMongodb, DiNodejs, DiCss3 } from "react-icons/di";
import { SiExpress, SiReact } from "react-icons/si";
import { AiOutlineHtml5, AiOutlineCode } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { GrDocker } from "react-icons/gr";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaLinux } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { RiTailwindCssFill } from "react-icons/ri";
import "./tech.css";

const TechSection = () => {
  return (
    <section id="tech" className="pt-20 py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="dd">
            <p className="text-4xl font-bold mb-10 text-center anime">Tool / Tech Stack</p>
          </div>
        </div>
        <div className="logo-container flex flex-wrap justify-center">
        <SkillCard icon={<DiMongodb className="text-5xl" />} name="MongoDB" hoverColor="hover:text-green-500" />
          <SkillCard icon={<SiExpress className="text-5xl" />} name="Express.js" hoverColor="hover:text-yellow-500" />
          <SkillCard icon={<SiReact className="text-5xl" />} name="React.js" hoverColor="hover:text-blue-500" />
          <SkillCard icon={<DiNodejs className="text-5xl" />} name="Node.js" hoverColor="hover:text-green-600" />
          <SkillCard icon={<AiOutlineHtml5 className="text-5xl" />} name="HTML5" hoverColor="hover:text-orange-500" />
          <SkillCard icon={<DiCss3 className="text-5xl" />} name="CSS3" hoverColor="hover:text-blue-400" />
          <SkillCard icon={<RiTailwindCssFill className="text-5xl" />} name="Tailwind" hoverColor="hover:text-cyan-400" />
          <SkillCard icon={<AiOutlineCode className="text-5xl" />} name="JavaScript" hoverColor="hover:text-yellow-400" />
          <SkillCard icon={<FaGithub className="text-5xl" />} name="Git" hoverColor="hover:text-red-300" />
          <SkillCard icon={<SiPostman className="text-5xl" />} name="Postman" hoverColor="hover:text-red-500" />
          <SkillCard icon={<GrDocker className="text-5xl" />} name="Docker" hoverColor="hover:text-blue-600" />
          <SkillCard icon={<FaPython className="text-5xl" />} name="Python" hoverColor="hover:text-yellow-500" />
          <SkillCard icon={<TbBrandCpp className="text-5xl" />} name="C++" hoverColor="hover:text-blue-700" />
          <SkillCard icon={<FaLinux className="text-5xl" />} name="Linux" hoverColor="hover:text-yellow-300" />
          <SkillCard icon={<FiFigma className="text-5xl" />} name="Figma" hoverColor="hover:text-purple-500" />
        </div>
      </div>
    </section>
  );
};

export default TechSection;
