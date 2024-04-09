// About.js
import React from 'react';
import angelImage from '../assets/ang.jpg';
import '../css/About.css'; // Import your external CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-header">About Me</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello there! I'm Angel Umwiza, a passionate Software Engineer and Product Manager dedicated to leveraging technology for positive impact.
          </p>
          <p>
            With a background in full-stack development, agile methodologies, and UI/UX design, I thrive in creating innovative solutions that solve real-world problems.
          </p>
          <p>
            My journey in the tech industry has taught me valuable lessons in teamwork, leadership, and continuous learning. I'm always exploring new technologies and seeking opportunities to grow both personally and professionally.
          </p>
          <p>
            Outside of work, you'll find me exploring new hobbies, reading about emerging trends in tech, and enjoying quality time with friends and family.
          </p>
        </div>
        <div className="about-image">
          <img src={angelImage} alt="Angel Umwiza" />
        </div>
      </div>
    </div>
  );
}

export default About;
