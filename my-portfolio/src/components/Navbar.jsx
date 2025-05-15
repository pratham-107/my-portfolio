import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/dp.jpg";

const Navbar = () => {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar" data-aos="fade-down">
      <div className="navbar__logo">
        <img
          src={logo}
          alt="Pratham.dev Logo"
          style={{ height: "50px", cursor: "pointer" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>
      <ul className="navbar__links">
        <li>
          <a href="#hero" onClick={(e) => handleNavClick(e, "hero")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => handleNavClick(e, "skills")}>
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
