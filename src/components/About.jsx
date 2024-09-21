import React from "react";
import "./about.css";
const AboutSection = () => {
  return (
    <section id="about" className="container mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 box-con">
        {/* <div className="absolute border-1 border-black aspect-square h-full box-out "><div className="box-in"></div></div> */}
          
          <img src="https://avatars.githubusercontent.com/u/120801567?v=4" alt="John Doe" className="rounded-full w-64 h-64 object-cover mx-auto" />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-3xl font-bold mb-4">About Me</h3>
          <p className="text-lg mb-6">I'm Yuvraj Yadav, a full-stack web developer specializing in the MERN stack. My expertise extends to ethical hacking, data structures and algorithms (DSA), Python, and Linux. I'm passionate about creating innovative solutions and continuously expanding my skill set in technology.</p>
          <button className="bg-yellow-400 text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-yellow-300 transition duration-300">View My Projects</button>
        </div>
      </div>
{/* 
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script><lottie-player src="https://lottie.host/7a698059-7dee-4c4c-ac39-264c2cc658b0/9YOOGOIi8w.json" background="##FFFFFF" speed="1" style="width: 300px; height: 300px" loop controls autoplay direction="1" mode="normal"></lottie-player> */}

    </section>
  );
};

export default AboutSection;
