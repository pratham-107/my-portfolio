import React from "react";
import "../styles/Projects.css";

const projectsData = [
  {
    title: "Portfolio Website",
    description: "A clean and professional portfolio built with React and AOS animations.",
    liveLink: "https://pratham-portfolio.netlify.app/",
    repoLink: "https://github.com/pratham/portfolio",
  },
  {
    title: "E-commerce Store",
    description: "A responsive e-commerce site with React, Redux, and payment integration.",
    liveLink: "https://ecommerce-store.netlify.app/",
    repoLink: "https://github.com/pratham/ecommerce-store",
  },
  {
    title: "Chat Application",
    description: "Real-time chat app using React and Socket.io.",
    liveLink: "https://chat-app-pratham.netlify.app/",
    repoLink: "https://github.com/pratham/chat-app",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects" data-aos="fade-up">
      <h2>Projects</h2>

      <div className="projects__list">
        {projectsData.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project__buttons">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--live"
              >
                Live Preview
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--repo"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
