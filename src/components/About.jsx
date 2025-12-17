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
          <p className="text-lg mb-6 para">"I’m a Full-Stack Web Developer with expertise in the MERN stack, Django, and PostgreSQL, currently pursuing a B.Tech in Artificial Intelligence and Data Science at MITS Gwalior. I build scalable web applications and intuitive mobile apps using React Native. With a solid foundation in Data Structures and Algorithms (C++), I’m also skilled in Linux, and my interests extend to Machine Learning and Data Science. I'm passionate about solving real-world problems through technology and constantly pushing my boundaries as a developer."</p>
          <button className="bg-yellow-400 text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-yellow-300 transition duration-300" ><a href='#projects'>Projects</a></button>
          <button className="bg-yellow-400 text-gray-900 mx-2 py-2 px-6 rounded-full font-bold hover:bg-yellow-300 transition duration-300"><a href='https://drive.google.com/file/d/1LJZx5lf345CmrHPXUrgHn51C54x3Yslw/view?usp=sharing'>Resume</a></button>
        </div>
      </div>


    </section>
  );
};

export default AboutSection;
