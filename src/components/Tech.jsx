import React from "react";
import SkillCard from "./SkillCard";
import { DiMongodb, DiNodejs, DiCss3 } from "react-icons/di";
import { SiExpress, SiReact } from "react-icons/si";
import { AiOutlineHtml5, AiOutlineCode } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const  TechSection = () => {
  return (
    <section id="skills" className=" py-20">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-12 text-center">My Tech Stack</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <SkillCard icon={<DiMongodb className="text-5xl" />} name="MongoDB" level="Advanced" />
          <SkillCard icon={<SiExpress className="text-5xl" />} name="Express.js" level="Advanced" />
          <SkillCard icon={<SiReact className="text-5xl" />} name="React.js" level="Expert" />
          <SkillCard icon={<DiNodejs className="text-5xl" />} name="Node.js" level="Advanced" />
          <SkillCard icon={<AiOutlineHtml5 className="text-5xl" />} name="HTML5" level="Expert" />
          <SkillCard icon={<DiCss3 className="text-5xl" />} name="CSS3" level="Expert" />
          <SkillCard icon={<AiOutlineCode className="text-5xl" />} name="JavaScript" level="Expert" />
          <SkillCard icon={<FaGithub className="text-5xl" />} name="Git" level="Advanced" />
        </div>
      </div>
    </section>
  );
};

export default TechSection;
