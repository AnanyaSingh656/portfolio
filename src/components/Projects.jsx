import React from 'react';
import '../styles/Projects.css';
import { FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa';

// ── ADD YOUR PROJECTS HERE ──
// To add a new project later, just copy one object and fill in your details
// Leave github or demo as '' if DN have the link yet
//Status: Completed, In Progress, Under Review, Coming Soon
const projectsData = [
{
    title: 'Community Bulletin Board',
    description:
      'A full-stack web application that allows users to post their thoughts or view community announcements. Features include CRUD operations for posts, and a responsive design with storage in a database. Similar to a mini Reddit or a notice board.',
    contribution: 'Built as an individual project. Developed the frontend, backend, and database integration.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/AnanyaSingh656/Bulletin-board',
    demo: 'https://bulletin-board-jade-eight.vercel.app/',
    status: 'Completed',
  },

  {
    title: 'Smart Hospital Management System',
    description:
      'A full-stack web application for managing hospital operations with patient and doctor login and dashboard features. Includes user authentication and data management. Built as a team project with 4 students.',
    contribution:
      'Built the frontend part of the landing page, login page and patient dashboard page.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js','REST APIs', 'PostgreSQL'],
    github: 'https://github.com/Seshrut/HMS',  // replace with real link
    demo: '',           // ← add live link if hosted, else leave ''
    status: 'Under Review',
  },


  {
    title: 'Home Security System',
    description:
      'An IoT-based home security system using ESP32 microcontroller that detects intrusions and sends instant SMS alerts to the homeowner.',
    contribution:
      'Did soldering of SIM800L module and buckconvertor with jumper wires. Worked with assembling of hardware components. Built as a team of 4 students.',
    tech: ['ESP32', 'C++', 'SIM800L', 'IoT'],
    github: '',         // ← add when ready
    demo: '',
    status: 'In Progress',
  },
  {
    title: 'Drones Decoded',
    description:
      'Developed and deployed a live website for a college hackathon organized by the Vinnovate VIT student chapter under the theme "Drones Decoded". The platform was used for event participation and submissions, integrating Google Forms and QR codes for seamless user access. Built in a team of 2 students.',
    contribution: 'Designing frontend, integrate Google Forms and QR code generation for participant management. Deployed using Vercel.',
    tech: ['HTML', 'CSS','React', 'Google Forms'],
    github: 'https://github.com/AnanyaSingh656/drones-decoded',
    demo: 'https://drones-decoded.vercel.app/',
    status: 'Completed',
  },

  // {
  //   title: 'My Next Project',
  //   description:
  //     'This space is reserved for my upcoming project. Add the title, description, tech stack and links once it is ready!',
  //   contribution: '',
  //   tech: [],
  //   github: '',
  //   demo: '',
  //   status: 'Coming Soon',
  // },
  
];

function Projects() {
  return (
    <section id="projects" className="projects section">

      <h2 className="section-title">Projects</h2><br/>
      <p className="section-subtitle">Things I've built and am building currently</p>

      <div className="projects-grid">

        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>

            {/* status badge — top right */}
            <span className={`project-status ${project.status === 'Completed' ? 'completed' : project.status === 'In Progress' ? 'inprogress' : 'comingsoon'}`}>
              {project.status}
            </span>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            {/* only show contribution if it exists */}
            {project.contribution && (
              <p className="project-contribution">
                <span>My Role: </span>{project.contribution}
              </p>
            )}

            {/* tech stack chips */}
            {project.tech.length > 0 && (
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span className="tech-chip" key={i}>{t}</span>
                ))}
              </div>
            )}

            {/* links — only show if link exists */}
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                  <FaGithub /> GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="project-link demo">
                  <FaExternalLinkSquareAlt /> Live Demo
                </a>
              )}
              {/* if no links yet, show a placeholder message */}
              {!project.github && !project.demo && project.status !== 'Completed' && (
                <span className="project-link-placeholder">🔗 Links coming soon</span>
              )}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;