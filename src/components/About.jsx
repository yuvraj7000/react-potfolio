import React from 'react';

import "./about.css";
const AboutSection = () => {

  
  

  return (
    <section id="about" className="container mx-auto py-10 px-4 about">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 box-con">
        {/* <div className="absolute border-1 border-black aspect-square h-full box-out "><div className="box-in"></div></div> */}
          
          <img src="https://avatars.githubusercontent.com/u/120801567?v=4" alt="Yuvraj Yadav" className="rounded-full w-64 h-64 object-cover mx-auto" />
        </div>
        <div className="md:w-1/2">
        <div className="dd"><p className={`text-3xl font-bold mb-4 animee`}>
      About Me
    </p></div>
          <p className="text-lg mb-6 para">"B.Tech graduate in Artificial Intelligence and Data Science with experience in full-stack development, data engineering, and machine learning. Built scalable applications using React, Node.js, and Spring Boot, along with data pipelines and machine learning models for real-world use cases. Solved 500+ Data Structures and Algorithms (DSA) problems, achieved a 1600+ CodeChef rating, and actively exploring Generative AI and Large Language Model (LLM) systems."</p>
          <button className="bg-yellow-400 text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-yellow-300 transition duration-300" ><a href='#projects'>Projects</a></button>
          {/* <button className="bg-yellow-400 text-gray-900 mx-2 py-2 px-6 rounded-full font-bold hover:bg-yellow-300 transition duration-300"><a href='https://drive.google.com/file/d/1LJZx5lf345CmrHPXUrgHn51C54x3Yslw/view?usp=sharing'>Resume</a></button> */}
        </div>
      </div>


    </section>
  );
};

export default AboutSection;
