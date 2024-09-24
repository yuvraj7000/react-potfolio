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
import { IoLogoJavascript } from "react-icons/io5";
import "./tech.css";

const  TechSection = () => {
  return (
    <section id="skills" className=" pt-20 py-20">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-12 text-center">My Tech Stack</h3>
        <div className="logo-container">
          <SkillCard icon={<DiMongodb className="text-5xl" />} name="MongoDB"  />
          <SkillCard icon={<SiExpress className="text-5xl" />} name="Express.js"  />
          <SkillCard icon={<SiReact className="text-5xl" />} name="React.js"  />
          <SkillCard icon={<DiNodejs className="text-5xl" />} name="Node.js" />
          <SkillCard icon={<AiOutlineHtml5 className="text-5xl" />} name="HTML5"  />
          <SkillCard icon={<DiCss3 className="text-5xl" />} name="CSS3"  />
          <SkillCard icon={<RiTailwindCssFill className="text-5xl" />} name="Tailwind"  />
          <SkillCard icon={<AiOutlineCode className="text-5xl" />} name="JavaScript"  />
          <SkillCard icon={<FaGithub className="text-5xl" />} name="Git"  />
          <SkillCard icon={<SiPostman className="text-5xl" />} name="Postman"  />
          <SkillCard icon={<GrDocker className="text-5xl" />} name="Git"  />
          <SkillCard icon={<FaPython className="text-5xl" />} name="Git"  />
          <SkillCard icon={<TbBrandCpp className="text-5xl" />} name="Git"  />
          <SkillCard icon={<FaLinux className="text-5xl" />} name="Git"  />
          <SkillCard icon={<FiFigma className="text-5xl" />} name="Git"  />

        </div>
      </div>
    </section>
  );
};

export default TechSection;
