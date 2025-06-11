import React from "react";
import "../styles/About.css";
import aboutGif from "../assets/about-animation.gif"; // adjust the path accordingly

const About = () => {
  return (
    <section className="about" id="about" data-aos="fade-up">
      <h2>About Me</h2>
      <div className="about-content">
        {/* GIF first on the left */}
        <div className="about-gif">
          <img src={aboutGif} alt="About me animation" />
        </div>

        {/* Text second on the right */}
        <div className="about-text">
          <p>
            I am Pratham Singh, a dedicated and passionate web developer with
            expertise in building modern and responsive websites using React.js,
            Node.js, and other web technologies. I focus on writing clean,
            maintainable code and delivering user-friendly digital experiences.
          </p>
          <p>
            I enjoy solving complex problems, learning new technologies, and
            continuously improving my skills. When I’m not coding, I love
            exploring UI/UX design trends and contributing to open-source
            projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
