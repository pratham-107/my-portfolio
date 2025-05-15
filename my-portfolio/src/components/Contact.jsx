import React, { useState } from "react";
import "../styles/Contact.css";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! Thank you for contacting me.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <h2>Contact Me</h2>
      <form className="contact__form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="sr-only">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email" className="sr-only">
          Your Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message" className="sr-only">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
