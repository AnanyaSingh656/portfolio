// React must be imported to use JSX
import React from 'react';

// ../ means go up one folder (out of components/) then into styles/
import '../styles/Navbar.css';

function Navbar() {
  return (
    // <nav> is semantic HTML for navigation bars
    <nav className="navbar">

      {/* Logo / Your name on the left */}
      <div className="navbar-logo">
        Ananya Singh
      </div>

      {/* Navigation links on the right */}
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        {/* scrolls to id="home" on the SAME page when clicked 
        instead of going to a different page, thus no routing req */}

        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </nav>
  );
}

// Export so other files (like App.jsx) can import and use this component
export default Navbar;