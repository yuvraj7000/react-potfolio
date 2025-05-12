
import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import "./project.css";
import codecraftImage from "../assets/codecraft.png";
import blogwaveImage from "../assets/blogwave.png";
import codedeckImage from "../assets/codedeck.png";
import practice from "../assets/practice.jpg";
import har from "../assets/har.png";
import ecop from "../assets/ecop.png";
import linkup from "../assets/linkup.png";
import kisanbandhu from "../assets/kisanbandhu.png";

const projectData = [  
  {
  title: "Kisan Bandhu",
  description: "A farmer assistance mobile app offering plant disease detection, mandi price updates, weather forecasts, crop insights, and access to government/private schemes. </br> [ APP || Node Backend || Web Control Pannel || 1K+ ⬇ on ApkPure || <a href='https://blogwave.yuvrajyadav.tech/blog/681ad0827f3b1c5a03935ebe' style='text-decoration: underline;'>more details</a> ]",
  image: kisanbandhu,
  website: "https://apkpure.net/kisan-bandhu/com.AgriNext.KisanBandhu",
  github: "https://github.com/yuvraj7000/Farming-app",
  tags: [
    { name: "React Native", color: "orange" },
    { name: "Expo", color: "purple" },
    { name: "PostgreSQL", color: "pink" },
    { name: "Notifications", color: "yellow" },
  ],
}
,
  {
  title: "LinkUp",
  description: "A professional networking platform to share posts, build connections, chat privately, explore jobs, and more — all from a single dashboard. </br> Guest login -> User: guest || Password: guest123 || <a href='https://blogwave.yuvrajyadav.tech/blog/6821a3e837f5542208f0529b' style='text-decoration: underline;'>more details</a>",
  image: linkup,
  website: "https://linkup.yuvrajyadav.tech",
  github: "https://github.com/yuvraj7000/LinkUp-for-professionals-",
  tags: [
    { name: "MERN", color: "teal" },
    { name: "Socket.io", color: "orange" },
    { name: "JWT", color: "pink" },
    { name: "Real-time", color: "yellow" }
  ],
},
  {
    title: "BlogWave",
    description: "A full-stack blogging platform with all essential features and a user dashboard for content management. </br> Guest login -> User: guest || Password: guest123 || <a href='https://blogwave.yuvrajyadav.tech/blog/6818d4557f3b1c5a03935dcd' style='text-decoration: underline;'>more details</a>",
    image: blogwaveImage,
    website: "https://blogwave.yuvrajyadav.tech",
    github: "https://github.com/yuvraj7000/bloging-website-backend",
    tags: [{ name: "MERN", color: "orange" }, { name: "Cloud", color: "green" }, { name: "JWT", color: "pink" }, { name: "REST API", color: "teal" }],
  },
  {
    title: "CodeDeck",
    description: " A platform to sell programming courses and templates with an admin panel, add-to-cart, and dark mode. || admin login -> Email: admin@gmail.com || Password: admin123",
    image: codedeckImage,
    website: "https://codedeck.yuvrajyadav.tech",
    github: "https://github.com/yuvraj7000/online-course-template",
    tags: [{ name: "MERN", color: "pink" }, { name: "Stripe", color: "yellow" }, { name: "NodeMailer", color: "green" }, { name: "Cloud", color: "orange" }],
  },
  {
    title: "HAR Model",
    description: "Human Action Recognition, a CNN-based model to classify human activities into 15 categories and deployed it in a Flask app for real-time predictions with 85% accuracy.",
    image: har,
    website: "https://github.com/yuvraj7000/web-implementation-human-action-recognization",
    github: "https://github.com/yuvraj7000/human-action-recognition-model",
    tags: [{ name: "CNN", color: "orange" }, { name: "Flask", color: "teal" }, { name: "ML", color: "yellow" }, { name: "DataScience", color: "pink" }],
  },
  {
    title: "CodeCraft",
    description: "An online code editor that supports multiple programming languages.  Enabled real-time code execution by integrating an external API.",
    image: codecraftImage,
    website: "https://codecraft.yuvrajyadav.tech",
    github: "https://github.com/yuvraj7000/web-code-editor",
    tags: [{ name: "React", color: "orange" }, { name: "API", color: "teal" }, { name: "Axios", color: "pink" }, { name: "Code", color: "green" }],
  },
  {
    title: "eCopStation",
    description: "Built an FIR management portal for police stations using the MERN stack, streamlining case record tracking and improving efficiency. || All Passwords = 'ecop'",
    image: ecop,
    website: "https://ecop.yuvrajyadav.tech/",
    github: "https://github.com/yuvraj7000/police-station-management",
    tags: [{ name: "React", color: "orange" }, { name: "MERN", color: "teal" }, { name: "Node", color: "yellow" }, { name: "Web Portal", color: "pink" }],
  },
  {
    title: "Practice Projects",
    description: "Games like Sino Game and Tic-Tac-Toe using HTML, CSS, and JavaScript. I also experimented with replicating the Flipkart frontend and created TodoList applications.",
    image: practice,
    website: "https://www.linkedin.com/posts/yuvraj7000_webdevelopment-html-css-activity-7179427392661143552-IxBg?utm_source=share&utm_medium=member_desktop",
    github: "https://github.com/yuvraj7000",
    tags: [{ name: "React", color: "yellow" }, { name: "Redux", color: "orange" }, { name: "CSS", color: "teal" }, { name: "JavaScript", color: "pink" }],
  },
  
  
];


const ProjectsSection = () => {
  return (
    <section id="projects" className="container mx-auto py-20 px-4">
      <div className="flex justify-center">
        <div className="dd">
          <p className="text-4xl font-bold mb-16 text-center anime">Projects</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            image={project.image}
            website={project.website}
            github={project.github}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
