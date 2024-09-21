import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects" className="container mx-auto py-20 px-4">
      <h3 className="text-3xl font-bold mb-12 text-center">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          title="E-commerce Platform"
          description="A full-stack e-commerce solution with user authentication, product management, and payment integration."
          image="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        />
        <ProjectCard 
          title="Task Management App"
          description="A collaborative task management tool with real-time updates and team communication features."
          image="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
        />
        <ProjectCard 
          title="Social Media Dashboard"
          description="An analytics dashboard for social media managers with data visualization and reporting tools."
          image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=815&q=80"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
