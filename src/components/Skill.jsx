import React from 'react';
import Lottie from "lottie-react";
import { techanimation } from '../assets/animation';

const Skillsection = () => {
  return (
    <section id="contact" className="bg-gray-900 ">
      <div className="container mx-auto px-4">
      <h3 className="text-3xl font-bold  text-center skill-name pt-20 pb-1">My Skills</h3>
    
    <div className="container flex justify-between items-center bg-gray-900 skill-container">
     
      <div className=" skill-bar">
    
        <div className="mb-6">
          <p className="text-2xl text-yellow-500 mb-2 ">FRONTEND/DESIGN</p>
          <div className="bg-gray-200 rounded-full h-4">
            <div className="bg-blue-400 h-4 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <span className="text-gray-500 ml-2">75%</span>
        </div>
        <div className="mb-6">
          <p className="text-2xl text-yellow-500 mb-2">BACKEND</p>
          <div className="bg-gray-200 rounded-full h-4 ">
            <div className="bg-blue-400 h-4 rounded-full" style={{ width: '85%' }}></div>
          </div>
          <span className="text-gray-500 ml-2">85%</span>
        </div>
        <div className="mb-6">
          <p className="text-2xl text-yellow-500 mb-2">PROGRAMMING</p>
          <div className="bg-gray-200 rounded-full h-4">
            <div className="bg-blue-400 h-4 rounded-full" style={{ width: '85%' }}></div>
          </div>
          <span className="text-gray-500 ml-2">85%</span>
        </div>
      </div>


      <div className="w-1/2 flex justify-center animation-container ">
        <Lottie className='svg-skill'  animationData={techanimation}/>
      </div>
    </div>
    </div>
    </section>
 
  );
};

export default Skillsection;
