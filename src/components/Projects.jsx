import React from 'react';
import '../styles/Projects.css';
import { FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa';

// ── ADD YOUR PROJECTS HERE ──
// To add a new project later, just copy one object and fill in your details
// Leave github or demo as '' if DN have the link yet
const projectsData = [
  {
    title: 'Smart Hospital Management System',
    description:
      'A full-stack web application for managing hospital operations including patient registration, appointments, and dashboards. Built as a team project with 4 students.',
    contribution:
      'Built the frontend part of the landing page, login page and patient dashboard.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    github: 'https://github.com/your-repo-link',  // ← replace with real link
    demo: '',           // ← add live link if hosted, else leave ''
    status: 'Under Review',
  },
  {
    title: 'Smart Home Security System',
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
    title: 'Your Next Project',
    description:
      'This space is reserved for your upcoming project. Add the title, description, tech stack and links once it is ready!',
    contribution: '',
    tech: [],
    github: '',
    demo: '',
    status: 'Coming Soon',
  },
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