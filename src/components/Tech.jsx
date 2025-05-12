import React from "react";
import SkillCard from "./SkillCard";
import { DiMongodb, DiNodejs, DiCss3 } from "react-icons/di";
import { SiExpress, SiReact, SiDjango, SiPostgresql, SiAndroid, SiJavascript,    SiPostman } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaGithub, FaGit, FaPython, FaLinux } from "react-icons/fa";
import { GrDocker } from "react-icons/gr";
import { TbBrandCpp } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import "./tech.css";

const TechSection = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { icon: <SiReact className="text-4xl" />, name: "React.js", hoverColor: "hover:text-blue-500" },
        { icon: <RiTailwindCssFill className="text-4xl" />, name: "Tailwind CSS", hoverColor: "hover:text-cyan-400" },
        { icon: <AiOutlineHtml5 className="text-4xl" />, name: "HTML5", hoverColor: "hover:text-orange-500" },
        { icon: <DiCss3 className="text-4xl" />, name: "CSS3", hoverColor: "hover:text-blue-400" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { icon: <DiNodejs className="text-4xl" />, name: "Node.js", hoverColor: "hover:text-green-600" },
        { icon: <SiExpress className="text-4xl" />, name: "Express.js", hoverColor: "hover:text-yellow-500" },
        { icon: <SiDjango className="text-4xl" />, name: "Django", hoverColor: "hover:text-green-800" },
      ]
    },
    {
      title: "App Development",
      skills: [
        { icon: <SiReact className="text-4xl" />, name: "React Native", hoverColor: "hover:text-blue-400" },
        { icon: <SiAndroid className="text-4xl" />, name: "Android Studio", hoverColor: "hover:text-green-500" },
      ]
    },
    {
      title: "Databases",
      skills: [
        { icon: <DiMongodb className="text-4xl" />, name: "MongoDB", hoverColor: "hover:text-green-500" },
        { icon: <SiPostgresql className="text-4xl" />, name: "PostgreSQL", hoverColor: "hover:text-blue-600" },
      ]
    },
    {
      title: "Version Control",
      skills: [
        { icon: <FaGit className="text-4xl" />, name: "Git", hoverColor: "hover:text-orange-600" },
        { icon: <FaGithub className="text-4xl" />, name: "GitHub", hoverColor: "hover:text-gray-800" },
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { icon: <TbBrandCpp className="text-4xl" />, name: "C++", hoverColor: "hover:text-blue-700" },
        { icon: <SiJavascript className="text-4xl" />, name: "JavaScript", hoverColor: "hover:text-yellow-400" },
        { icon: <FaPython className="text-4xl" />, name: "Python", hoverColor: "hover:text-yellow-500" },
      ]
    },
    {
      title: "DSA/CP",
      skills: [
        { icon: <TbBrandCpp className="text-4xl" />, name: "C++", hoverColor: "hover:text-blue-700" },
      ]
    },
    {
      title: "Platforms/Tools",
      skills: [
        { icon: <FaLinux className="text-4xl" />, name: "Linux", hoverColor: "hover:text-yellow-300" },
        { icon: <SiPostman className="text-4xl" />, name: "Postman", hoverColor: "hover:text-red-500" },
        { icon: <GrDocker className="text-4xl" />, name: "Docker", hoverColor: "hover:text-blue-600" },
        // { icon: <SiBug className="text-4xl" />, name: "Burp Suite", hoverColor: "hover:text-purple-600" },
      ]
    },
  ];

  return (
    <section id="tech" className="pt-20 py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="dd">
            <p className="text-4xl font-bold mb-14 text-center anime">Tool / Tech Stack</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <div key={index} className=" p-3 sec text-gray-300">
              <h3 className="text-2xl font-semibold mb-3 text-center tit">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skillIndex}
                    icon={skill.icon}
                    name={skill.name}
                    hoverColor={skill.hoverColor}
                    className="flex-[1_1_30%] text-sm p-1" // Add responsive sizing
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;