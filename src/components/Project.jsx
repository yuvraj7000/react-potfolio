



import narcoticsImage from "../assets/narcotics.png";
import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import "./project.css";
import codecraftImage from "../assets/codecraft.png";
import blogwaveImage from "../assets/blogwave.png";
import codedeckImage from "../assets/codedeck.png";
import practice from "../assets/practice.jpg";
import har from "../assets/har.png";
import ecop from "../assets/ecop.png";

const projectData = [  
  {
    title: "BlogWave",
    description: "A full-stack blogging platform with all essential features and a user dashboard for content management. || Guest login: username-guest || Password: guest123 || <a href='/' style='text-decoration: underline;'>more details</a>",
    image: blogwaveImage,
    website: "https://blogwaveapp.vercel.app",
    github: "https://github.com/yuvraj7000/bloging-website-backend",
    tags: [{ name: "MERN", color: "orange" }, { name: "Cloud", color: "green" }, { name: "JWT", color: "pink" }, { name: "REST API", color: "teal" }],
  },
  {
    title: "CodeDeck",
    description: " A platform to sell programming courses and templates with an admin panel, add-to-cart, and dark mode. || admin login: username-admin || Password: admin123 || <a href='/' style='text-decoration: underline;'>more details</a>",
    image: codedeckImage,
    website: "https://codedeckapp.vercel.app",
    github: "https://github.com/yuvraj7000/online-course-template",
    tags: [{ name: "MERN", color: "pink" }, { name: "stripe", color: "yellow" }, { name: "emails", color: "green" }, { name: "cloud", color: "orange" }],
  },
  {
    title: "HAR Model",
    description: "Human Action Recognition, a CNN-based model to classify human activities into 15 categories and deployed it in a Flask app for real-time predictions with 85% accuracy. <a href='/' style='text-decoration: underline;'>details</a>",
    image: har,
    website: "https://github.com/yuvraj7000/web-implementation-human-action-recognization",
    github: "https://github.com/yuvraj7000/human-action-recognition-model",
    tags: [{ name: "cnn", color: "orange" }, { name: "flask", color: "teal" }, { name: "ml", color: "yellow" }, { name: "datascience", color: "pink" }],
  },
  {
    title: "CodeCraft",
    description: "An online code editor that supports multiple programming languages.  Enabled real-time code execution by integrating an external API.  <a href='/' style='text-decoration: underline;'>more details</a>",
    image: codecraftImage,
    website: "https://codecraftapp.vercel.app",
    github: "https://github.com/yuvraj7000/web-code-editor",
    tags: [{ name: "React", color: "orange" }, { name: "API", color: "teal" }, { name: "axios", color: "pink" }, { name: "code", color: "green" }],
  },
  {
    title: "eCopStation",
    description: "Built an FIR management portal for police stations using the MERN stack, streamlining case record tracking and improving efficiency. || all passwords = 'ecop' || <a href='/' style='text-decoration: underline;'>more details</a>",
    image: ecop,
    website: "https://ecopstationapp.vercel.app/",
    github: "https://github.com/yuvraj7000/police-station-management",
    tags: [{ name: "react", color: "orange" }, { name: "MERN", color: "teal" }, { name: "node", color: "yellow" }, { name: "web", color: "pink" }],
  },
  {
    title: "Practice Projects",
    description: "Games like Sino Game and Tic-Tac-Toe using HTML, CSS, and JavaScript. I also experimented with replicating the Flipkart frontend and created TodoList applications. <a href='/' style='text-decoration: underline;'>more details</a>",
    image: practice,
    website: "https://www.linkedin.com/posts/yuvraj7000_webdevelopment-html-css-activity-7179427392661143552-IxBg?utm_source=share&utm_medium=member_desktop",
    github: "https://github.com/yuvraj7000",
    tags: [{ name: "web", color: "orange" }, { name: "HTML", color: "teal" }, { name: "CSS", color: "yellow" }, { name: "javascript", color: "pink" }],
  },
  
  
];


const ProjectsSection = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState("fade-in");
  const itemsPerPage = 3;

  const next = () => {
    if (index + itemsPerPage < projectData.length) {
      setAnimate("fade-out");
      setTimeout(() => {
        setIndex(index + itemsPerPage);
        setAnimate("fade-in");
      }, 500); 
    }
  };

  
  const back = () => {
    if (index - itemsPerPage >= 0) {
      setAnimate("fade-out");
      setTimeout(() => {
        setIndex(index - itemsPerPage);
        setAnimate("fade-in");
      }, 500); 
    }
  };

  useEffect(() => {
    setAnimate("fade-in"); 
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
          
          Back
        
        </button>
        <button
          onClick={next}
          disabled={index + itemsPerPage >= projectData.length}
          className={`flex items-center py-2 px-4 bg-gray-800 text-white rounded ${index + itemsPerPage >= projectData.length ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"}`}
        >
         
        
          Next
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;

