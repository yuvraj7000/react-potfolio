import { reflectionanimation } from "../assets/animation";
import Lottie from "lottie-react";
import ReflectionCard from "./ReflectionCard";
import "./reflection.css";
import { useState } from "react";

export default function Reflection() {
  const [selectedReflection, setSelectedReflection] = useState(null);

  const reflections = [
    {
      title: "E-commerce Platform",
      content:
        "A full-stack e-commerce solution with user authentication, product management, and payment integration. A full-stack e-commerce solution with user authentication, product management, and payment integration.full-stack e-commerce solution with user authentication, product management, and payment integration. A full-stack e-commerce solution with user authentication, product management, and payment integration",
    },
    {
      title: "Project Management App",
      content:
        "A tool to help teams manage projects, track progress, and collaborate effectively. It includes features such as task assignment, deadlines, and real-time communication.",
    },
    {
      title: "Portfolio Website",
      content:
        "A personal portfolio website to showcase my projects, skills, and experience. Built with React and Tailwind CSS, the site is fully responsive and includes animations.",
    },
  ];

  return (
    <section id="reflections" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
      <div className="flex justify-center">
          <div className="dd">
            <p className="text-4xl font-bold mb-10 text-center anime">Reflections</p>
          </div>
        </div>
        <div className="reflection-container">
          {/* Reflection Cards Section */}
          <div className="reflection-left">
            {reflections.map((reflection, index) => (
              <ReflectionCard
                key={index}
                title={reflection.title}
                content={reflection.content}
                onReadMore={() => setSelectedReflection(reflection)}
                onReadLess={() => setSelectedReflection(null)} // Restore animation when 'Read Less' is clicked
              />
            ))}
          </div>
          {/* Animation Section */}
          <div className="reflection-right">
            {selectedReflection ? (
              <div className="bg-gray-800 p-6  shadow-lg  text-white right-text">
                <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
                  {selectedReflection.title}
                </h2>
                <p className="text-gray-300 mb-6">
                  {selectedReflection.content}
                </p>
              </div>
            ) : (
              <Lottie className="w-64 h-64 md:w-96 md:h-96 right-animation" animationData={reflectionanimation} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
