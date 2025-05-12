import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./project.css";

const ProjectCard = ({ title, description, image, website, github, tags }) => (
  <div className="group bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 relative h-full flex flex-col">

    {/* Image Section with Gradient Overlay */}
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <h3 className="absolute bottom-0 left-0 right-0 text-2xl font-bold text-white p-4">
        {title}
      </h3>
    </div>

    {/* Content Section */}
    <div className="p-5 flex flex-col flex-grow">
      {/* Description */}
      <div 
        className="mb-4 text-gray-400 leading-relaxed flex-grow des"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((tag, index) => (
          <span
            key={index}
            className=" font-medium px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: `${tag.color}20`,
              color: tag.color,
              border: `1px solid ${tag.color}40`
            }}
          >
            {tag.name}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-auto">
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 text-sm font-medium text-blue-400 hover:text-white border border-blue-400/40 hover:border-blue-400 rounded-lg transition-all hover:bg-blue-400/10"
        >
          <FaExternalLinkAlt className="flex-shrink-0" />
          <span>Live Demo</span>
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white border border-gray-600 hover:border-gray-400 rounded-lg transition-all hover:bg-gray-800"
        >
          <FaGithub className="flex-shrink-0" />
          <span>Code</span>
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;