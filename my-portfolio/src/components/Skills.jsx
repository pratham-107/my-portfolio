import React from "react";
import "../styles/Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills" id="skills" data-aos="fade-up">
      <h2>Skills</h2>

      <div className="skills-group">
        <h3>Frontend</h3>
        <div className="skills__grid">
          <div className="skill-card html">
            <FaHtml5 />
            <span>HTML</span>
            <div className="progress-bar">
              <div style={{ width: "95%" }}></div>
            </div>
          </div>
          <div className="skill-card css">
            <FaCss3Alt />
            <span>CSS</span>
            <div className="progress-bar">
              <div style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="skill-card js">
            <FaJs />
            <span>JavaScript</span>
            <div className="progress-bar">
              <div style={{ width: "85%" }}></div>
            </div>
          </div>
          <div className="skill-card react">
            <FaReact />
            <span>React</span>
            <div className="progress-bar">
              <div style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-group">
        <h3>Backend & Tools</h3>
        <div className="skills__grid">
          <div className="skill-card node">
            <FaNode />
            <span>Node.js</span>
            <div className="progress-bar">
              <div style={{ width: "75%" }}></div>
            </div>
          </div>
          <div className="skill-card mongo">
            <SiMongodb />
            <span>MongoDB</span>
            <div className="progress-bar">
              <div style={{ width: "70%" }}></div>
            </div>
          </div>
          <div className="skill-card github">
            <FaGithub />
            <span>Git & GitHub</span>
            <div className="progress-bar">
              <div style={{ width: "85%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
