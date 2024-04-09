// Contact.js
import React from 'react';
import '../css/Contact.css'; // Import your external CSS for styling

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (you can add form handling logic)
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <div className="contact-item">
          <span>Email:</span>
          <a href="mailto:angelumwiza21@gmail.com">angelumwiza21@gmail.com</a>
        </div>
        <div className="contact-item">
          <span>LinkedIn:</span>
          <a href="www.linkedin.com/in/angel-umwiza-27b137277" target="_blank" rel="noopener noreferrer">AngelUmwiza</a>
        </div>
        <div className="contact-item">
          <span>CV:</span>
          <a href="https://docs.google.com/document/d/150u15JwtQiZTB1ISHcnu9V97riIs-Z0Q2NuC_l_Ilnk/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Checkout my CV</a>
        </div>
        <div className="contact-item">
          <span>GitHub:</span>
          <a href="https://github.com/An5gel" target="_blank" rel="noopener noreferrer">An5gel</a>
        </div>
      </div>
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
