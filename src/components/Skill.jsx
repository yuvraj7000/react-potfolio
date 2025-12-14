import React from 'react';
import Lottie from "lottie-react";
import { techanimation } from '../assets/animation';
import leetcode from '../assets/leetcode.png';
import codechef from '../assets/codechef.png';
import { LuExternalLink } from "react-icons/lu";
import "./about.css";

const Skillsection = () => {
  return (
   <section id="skills" className="bg-gray-900 ">
      <div className="container mx-auto px-4">
       <div className="flex justify-center pt-20">
          <div className="dd">
            <p className="text-4xl font-bold mb-10 text-center anime">My Skills</p>
          </div>
        </div>

         <div className="container flex justify-between items-center bg-gray-900 skill-container">
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Fullstack Development Section */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl transition-transform hover:scale-[1.02]">
              <h3 className="text-2xl text-yellow-500 mb-6 font-semibold">Fullstack Development</h3>
              <div className="flex flex-col md:flex-row gap-8 text-gray-300">
                <div className="flex-1">
                  <div className="mb-4 border-l-2 border-yellow-500 pl-4">
                    <h4 className="text-xl font-medium mb-3">Web Development</h4>
                    <p className=" text-gray-400 leading-relaxed fonts">
                      Building responsive web applications with modern architecture and seamless user experiences.
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-4 border-l-2 border-yellow-500 pl-4">
                    <h4 className="text-xl font-medium mb-3">App Development</h4>
                    <p className=" text-gray-400 leading-relaxed fonts">
                      Creating cross-platform mobile apps with native performance and cloud integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Programming Section */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl transition-transform hover:scale-[1.02]">
              <h3 className="text-2xl text-yellow-500 mb-6 font-semibold">Programming</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a 
                  href="https://leetcode.com/u/yuvraj7000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-all"
                >
                  <img 
                    src={leetcode} 
                    alt="LeetCode" 
                    className="w-12 h-12 object-contain rounded-lg"
                  />
                  <div>
                    <p className="text-lg font-medium">LeetCode <LuExternalLink className="inline-block ml-2 mb-2" /></p>
                    <p className="text-sm text-gray-400 fonts">150+ Problems Solved</p>
                  </div>
                </a>
                <a 
                  href="https://www.codechef.com/users/yuvraj7000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-all"
                >
                  <img 
                    src={codechef} 
                    alt="CodeChef" 
                    className="w-12 h-12 object-contain rounded-lg"
                  />
                  <div>
                    <p className="text-lg font-medium">CodeChef <LuExternalLink className="inline-block ml-2 mb-2" /></p>
                    <p className="text-sm text-gray-400 fonts">1500+ Rating (2★)</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <Lottie 
              className="w-full max-w-xl" 
              animationData={techanimation}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skillsection;
