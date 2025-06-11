import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../styles/Hero.css";
import logo from "../assets/image.gif";

const Hero = () => {
  return (
    <section id="hero" className="hero-section" data-aos="fade-up">
      <div className="hero-content">
        <h1>Hello, I'm Pratham Singh</h1>
        <p className="tagline">
          Web Developer | React.js Enthusiast | Problem Solver
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
        <div className="social-icons">
          <a
            href="https://github.com/pratham-107"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pratham-singh-9190492bb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="hero-image" data-aos="fade-left">
        <img src={logo} alt="Pratham Singh" />
      </div>
    </section>
  );
};

export default Hero;
