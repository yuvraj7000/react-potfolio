import React from "react";
import Header from "./components/Header";
import AboutSection from "./components/About";
import  TechSection from "./components/Tech";
import ProjectsSection from "./components/Project";
import Skillsection from "./components/Skill";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Reflection from "./components/Reflection";

const App = () => {
  return (
    // <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen text-white max-w-9xl">
     /* // <div className="bg-gradient-to-r from-blue-900 to-black min-h-screen text-white"> */


<div className="bg-gradient-to-r from-gray-500 via-gray-700 to-black min-h-screen text-white max-w-9xl">


      <Header />
      <AboutSection />
      <Skillsection/>
      < TechSection />
      <Reflection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
