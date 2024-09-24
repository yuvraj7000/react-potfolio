





import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import "./project.css";
import { GrFormNext } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";

const projectData = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects, skills, and experience. Built with React and Tailwind CSS, the site is fully responsive and includes animations.",
    image: "https://via.placeholder.com/300x200",
    website: "https://yourwebsite.com",
    github: "https://github.com/yourgithub",
    tags: [{ name: "React", color: "blue" }, { name: "HTML", color: "red" }, { name: "CSS", color: "green" }, { name: "Tailwind", color: "teal" }],
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects, skills, and experience. Built with React and Tailwind CSS, the site is fully responsive and includes animations.",
    image: "https://via.placeholder.com/300x200",
    website: "https://yourwebsite.com",
    github: "https://github.com/yourgithub",
    tags: [{ name: "React", color: "blue" }, { name: "HTML", color: "red" }, { name: "CSS", color: "green" }, { name: "Tailwind", color: "teal" }],
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects, skills, and experience. Built with React and Tailwind CSS, the site is fully responsive and includes animations.",
    image: "https://via.placeholder.com/300x200",
    website: "https://yourwebsite.com",
    github: "https://github.com/yourgithub",
    tags: [{ name: "React", color: "blue" }, { name: "HTML", color: "red" }, { name: "CSS", color: "green" }, { name: "Tailwind", color: "teal" }],
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects, skills, and experience. Built with React and Tailwind CSS, the site is fully responsive and includes animations.",
    image: "https://via.placeholder.com/300x200",
    website: "https://yourwebsite.com",
    github: "https://github.com/yourgithub",
    tags: [{ name: "React", color: "blue" }, { name: "HTML", color: "red" }, { name: "CSS", color: "green" }, { name: "Tailwind", color: "teal" }],
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects, skills, and experience. Built with React and Tailwind CSS, the site is fully responsive and includes animations.",
    image: "https://via.placeholder.com/300x200",
    website: "https://yourwebsite.com",
    github: "https://github.com/yourgithub",
    tags: [{ name: "React", color: "blue" }, { name: "HTML", color: "red" }, { name: "CSS", color: "green" }, { name: "Tailwind", color: "teal" }],
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects, skills, and experience. Built with React and Tailwind CSS, the site is fully responsive and includes animations.",
    image: "https://via.placeholder.com/300x200",
    website: "https://yourwebsite.com",
    github: "https://github.com/yourgithub",
    tags: [{ name: "React", color: "blue" }, { name: "HTML", color: "red" }, { name: "CSS", color: "green" }, { name: "Tailwind", color: "teal" }],
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects, skills, and experience. Built with React and Tailwind CSS, the site is fully responsive and includes animations.",
    image: "https://via.placeholder.com/300x200",
    website: "https://yourwebsite.com",
    github: "https://github.com/yourgithub",
    tags: [{ name: "React", color: "blue" }, { name: "HTML", color: "red" }, { name: "CSS", color: "green" }, { name: "Tailwind", color: "teal" }],
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects, skills, and experience. Built with React and Tailwind CSS, the site is fully responsive and includes animations.",
    // image: "https://via.placeholder.com/300x200",
    website: "https://yourwebsite.com",
    github: "https://github.com/yourgithub",
    tags: [{ name: "React", color: "blue" }, { name: "HTML", color: "red" }, { name: "CSS", color: "green" }, { name: "Tailwind", color: "teal" }],
  },
  // ... (other project objects)
];


const ProjectsSection = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState("fade-in");
  const itemsPerPage = 3;

  // Function to handle "Next" button click
  const next = () => {
    if (index + itemsPerPage < projectData.length) {
      setAnimate("fade-out");
      setTimeout(() => {
        setIndex(index + itemsPerPage);
        setAnimate("fade-in");
      }, 500); // Duration matches the CSS animation duration
    }
  };

  // Function to handle "Back" button click
  const back = () => {
    if (index - itemsPerPage >= 0) {
      setAnimate("fade-out");
      setTimeout(() => {
        setIndex(index - itemsPerPage);
        setAnimate("fade-in");
      }, 500); // Duration matches the CSS animation duration
    }
  };

  useEffect(() => {
    setAnimate("fade-in"); // Initial load animation
  }, []);

  return (
    <section id="projects" className="container mx-auto py-20 px-4">
      <div className="flex justify-center">
          <div className="dd">
            <p className="text-4xl font-bold mb-10 text-center anime">Projects</p>
          </div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.slice(index, index + itemsPerPage).map((project, idx) => (
          <div key={idx} className={animate}>
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            image={project.image}
            website={project.website}
            github={project.github}
            tags={project.tags}
          />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-8 space-x-4">
        <button
          onClick={back}
          disabled={index === 0}
          className={`flex items-center py-2 px-4 bg-gray-800 text-white rounded ${index === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"}`}
        >
          {/* <img src="/path/to/back-icon.svg" alt="Back" className="w-4 h-4 mr-2" /> */}
          Back
        
        </button>
        <button
          onClick={next}
          disabled={index + itemsPerPage >= projectData.length}
          className={`flex items-center py-2 px-4 bg-gray-800 text-white rounded ${index + itemsPerPage >= projectData.length ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"}`}
        >
          {/* <img src="/path/to/next-icon.svg" alt="Next" className="w-4 h-4 mr-2" /> */}
        
          Next
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;

