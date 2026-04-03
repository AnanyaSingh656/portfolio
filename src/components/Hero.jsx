import React from 'react';
import '../styles/Hero.css';
import profilePic from '../assets/ananyapic.jpeg';

function Hero() {
  return (
    // id="home" is what navbar's href="#home" scrolls to
    <section id="home" className="hero section">

      {/* LEFT SIDE — all the text */}
      <div className="hero-text">

        {/* Intro*/}
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">Ananya Singh</h1>
        <h2 className="hero-role">Computer Science Student | Frontend Developer</h2>

        {/* Short bio*/}
        <p className="hero-bio">
          I'm a 2nd year Computer Science student studying at Vellore Institute of Technology, Tamil Nadu. 
          <br/>I have experience in frontend development and am passionate about creating beautiful and functional websites. 
          <br/>I'm currently looking for internship opportunities for Summer 2026.
        </p>

        {/* Two buttons side by side */}
        <div className="hero-buttons">
          {/* href="#projects" scrolls down to projects section */}
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>

      </div>

      {/* RIGHT SIDE — photo */}
      <div className="hero-image">
        <div className="hero-image-wrapper">
          <img src={profilePic} alt="Ananya"/>
        </div>
      </div>

    </section>
  );
}

export default Hero;