import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"; // Importing icons for website and GitHub links
import "./project.css";
const ProjectCard = ({ title, description, image, website, github, tags }) => (
  <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out max-w-sm mx-auto ">

    <div className="overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition duration-300 transform hover:scale-110"
      />
    </div>


    <div className="p-6">
      <h4 className="text-2xl font-bold mb-3 text-white">{title}</h4>
      <p className="mb-6 text-gray-400" dangerouslySetInnerHTML={{ __html: description }}></p>


      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`tag`}
            style={{
              
              color: `${tag.color}`,
            }}
          >
            #{tag.name}
          </span>
        ))}
      </div>

     
      <div className="flex items-center space-x-4">
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full font-bold shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
        >
          <FaExternalLinkAlt className="mr-2" /> Website
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full font-bold shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
        >
          <FaGithub className="mr-2" /> GitHub
        </a>
  
      </div>
    </div>
  </div>
);

export default ProjectCard;
