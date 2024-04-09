import React from 'react';
import '../css/home.css'; // Import your CSS file for Home styling

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="welcome-message">
        Welcome to My Corner of the Web!
      </h1>
      <div className="intro-section">
        <p className="intro-text">
          Greetings! I'm Angel Umwiza, a Software Engineer with a passion for Management.
        </p>
        <p className="intro-text">
          This website is my digital canvas, where I paint my journey, showcase my projects,
          and share insights into the exciting world of Technology.
        </p>
        <p className="intro-text">
          Whether you're here to explore my portfolio, dive into my blog, or simply say hello,
          I'm delighted to have you here. Let's embark on a digital journey together,
          where creativity meets innovation and ideas come to life.
        </p>
        <p className="intro-text">
          Feel free to roam around, discover what inspires me, and let's connect to create something extraordinary!
        </p>
      </div>
    </div>
  );
}

export default Home;
