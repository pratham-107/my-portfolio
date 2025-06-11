import React from "react";
import "../styles/Projects.css";

const projectsData = [
  {
    title: "CMETP",
    description:
      "CMETP is a full-stack web application built using the MERN stack that allows college students to create, manage, and track academic events in real-time. The platform features JWT-based authentication, an admin dashboard for event approvals, a calendar-integrated RSVP system, and a clean, responsive UI built with Bootstrap. Designed specifically for student communities, CMETP streamlines campus event coordination and enhances student engagement..",
    liveLink: "https://cmetp-frontend.vercel.app/",
    repoLink: "https://github.com/pratham-107/CMETP_frontend",
  },
  {
    title: "Note Sharing Platform",
    description:
      "NoteShare is a MERN stack web application that enables students to upload, browse, and download academic notes securely. The platform features user authentication, file uploads with metadata, and search/filter options for easy access to relevant material. Designed with Bootstrap for a responsive UI, NoteShare promotes peer-to-peer learning and improves resource sharing across student communities.",
    liveLink: "https://major-project-frontend-note-sharing.vercel.app/",
    repoLink:
      "https://github.com/pratham-107/major-project-frontend-note-sharing",
  },
  {
    title: "Habit Tracker App",
    description:
      "HabitSync is a React.js-based web application that helps users build and maintain daily habits through a clean and interactive interface. Users can add, update, and track habits, view streaks and progress, and receive visual feedback for consistency. Designed with Bootstrap and local storage/API integration, HabitSync supports goal-setting with a user-friendly experience tailored for productivity.",
    liveLink: "https://habit-tracker-app-lime.vercel.app/",
    repoLink: "https://github.com/pratham-107/habit-tracker-app",
  },
  {
    title: "Popx-App",
    description:
      "PopX Auth UI is a responsive login and signup interface built using React.js for the PopX app. It features clean form validation, error handling, and smooth user navigation. Designed with Bootstrap and custom styling, the interface focuses on user experience and accessibility, making onboarding seamless and intuitive.",
    liveLink: "https://popx-app-pi.vercel.app/",
    repoLink: "https://github.com/pratham-107/popx-app-signup-login",
  },
  {
    title: "Cognifyz Technology website",
    description:
      "Cognifyz Technology Website is a fully responsive static website built using HTML, CSS, and JavaScript to present the company's services, mission, and contact details. The site features smooth scrolling, interactive elements, and a clean, professional layout optimized for both desktop and mobile users.",
    liveLink: "https://cognifyz-site.vercel.app/",
    repoLink: "https://github.com/pratham-107/cognifyz-site",
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
