import React from "react";

const Header = () => {
  return (
    <header className="container mx-auto py-8 px-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Yuvraj Yadav</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-yellow-300 transition duration-300">About</a></li>
          <li><a href="#skills" className="hover:text-yellow-300 transition duration-300">Skills</a></li>
          <li><a href="#projects" className="hover:text-yellow-300 transition duration-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-300 transition duration-300">Contact</a></li>
        </ul>
      </nav>
      <div className="text-center mt-20">
        <h2 className="text-5xl font-bold mb-4">Full Stack Developer</h2>
        <p className="text-xl">Turning ideas into reality through code</p>
      </div>
    </header>
  );
};

export default Header;
