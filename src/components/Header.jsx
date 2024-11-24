
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; 
import "./about.css";
const Header = () => {
  return (
    <header className="container mx-auto py-8 px-4 head">
      
      <nav className="flex justify-between items-center">
      
        <h1 className=" signature">Yuvraj Yadav</h1>
       
        <ul className="flex space-x-6 font-medium font-poppins ">
          {/* <li>
            <a href="#about" className="hover:text-yellow-300 transition duration-300">
              About
            </a>
          </li> */}
          <li>
            <a href="#skills" className="hover:text-yellow-300 transition duration-300 font-mono">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-300 transition duration-300 font-mono">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-300 transition duration-300 font-mono">
              Contact
            </a>
          </li>
        </ul>
        

      </nav>
      
      <div className="text-center mt-20 flex items-center justify-center flex-col">

        <h1 className="h1">
         <span style={{
            color: ''
          }}>Yuvraj</span>
         <span style={{
            color: '#FFD700'
          }}>&thinsp;Yadav</span>
        </h1>

        <div className="flex space-x-4">
          <a href="https://github.com/yuvraj7000" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-yellow-300 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/yuvraj7000" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-yellow-300 transition duration-300" />
          </a>
          <a href="mailto:yuvraj7000raju@gmail.com">
            <FaEnvelope className="text-2xl hover:text-yellow-300 transition duration-300" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
