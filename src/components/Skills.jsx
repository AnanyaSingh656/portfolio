//import icons from react-icons, type on google react icons

import React from 'react';
import '../styles/Skills.css';

// react-icons used are:
// Si = Simple Icons (brand/tech logos like React, Python, Git)
// Fa = Font Awesome
import {
  SiHtml5, SiCss, SiJavascript, SiReact,
  SiPython, SiC, SiCplusplus, SiOpenjdk,
  SiGit, SiGithub, SiFigma,
  SiJupyter, SiGooglecolab, SiNpm,
  SiNodedotjs,
  SiExpress,       // new — Express.js icon
  SiPostgresql,    // new — PostgreSQL icon
  SiRender,        // new — Render icon
  SiVercel,        // new — Vercel icon
  SiNetlify,   // new — Netlify icon
} from 'react-icons/si';
import { VscTerminalCmd, VscVscode } from 'react-icons/vsc';
import { FaRobot, FaBrain, FaMobileAlt, FaServer, FaEnvelope } from 'react-icons/fa'; // new — FaServer for REST API
import { HiLightBulb, HiFlag, HiKey, HiLink } from "react-icons/hi";
import { AiFillAudio } from "react-icons/ai";


// Each category is an object with a title, emoji, and array of skills
// Each skill has a name and an icon component
const skillCategories = [
  {
    title: 'Frontend Development',
    emoji: '🚀',
    skills: [
      { name: 'HTML',              icon: <SiHtml5 /> },
      { name: 'CSS',               icon: <SiCss /> },
      { name: 'JavaScript',        icon: <SiJavascript /> },
      { name: 'React.js',          icon: <SiReact /> },
      { name: 'Responsive Design', icon: <FaMobileAlt /> },
    ]
  },
  {
    title: 'Programming & Core CS',
    emoji: '⚙️',
    skills: [
      { name: 'Java',   icon: <SiOpenjdk /> },
      { name: 'C',      icon: <SiC /> },
      { name: 'C++',    icon: <SiCplusplus /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'DSA',    icon: <VscTerminalCmd /> },
    ]
  },
  {
    title: 'AI / ML',
    emoji: '🤖',
    skills: [
      { name: 'Roboflow + YOLOv11', icon: <FaRobot /> },
      { name: 'Model Training',     icon: <FaBrain /> },
      { name: 'Model Evaluation',   icon: <FaBrain /> },
    ]
  },
  {
    title: 'Tools & Technologies',
    emoji: '🛠️',
    skills: [
      { name: 'Git',          icon: <SiGit /> },
      { name: 'GitHub',       icon: <SiGithub /> },
      { name: 'VS Code',      icon: <VscVscode /> },
      { name: 'Google Colab', icon: <SiGooglecolab /> },
      { name: 'Jupyter',      icon: <SiJupyter /> },
      { name: 'npm',          icon: <SiNpm /> }, // new — deployment tools learned from bulletin board project
      { name: 'Vercel',       icon: <SiVercel /> },
      { name: 'Render',       icon: <SiRender /> },
      { name: 'Netlify',  icon: <SiNetlify /> },  // new
      { name: 'EmailJS', icon: <FaEnvelope /> },  // envelope icon for EmailJS
      { name: 'Figma',        icon: <SiFigma /> },
    ]
  },
  {
    // new category — backend skills learned from bulletin board project
    title: 'Backend Development',
    emoji: '🖥️',
    skills: [
      { name: 'Node.js',    icon: <SiNodedotjs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'REST APIs',  icon: <FaServer /> },     // GET, POST, PATCH, DELETE
      { name: 'PostgreSQL', icon: <SiPostgresql /> }, // relational database
    ]
  },
  {
    title: 'Currently Strengthening/Learning',
    emoji: '🌱',
    skills: [
      { name: 'Advanced React', icon: <SiReact /> },
      { name: 'Node.js',    icon: <SiNodedotjs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'REST APIs',  icon: <FaServer /> },     // GET, POST, PATCH, DELETE
      { name: 'PostgreSQL', icon: <SiPostgresql /> }, // relational database
      { name: 'System Design', icon: <FaBrain /> },  // new next goal
    ]
  },
  {
    title: 'Soft Skills',
    emoji: '🧠',
    skills: [
      { name: 'Problem Solving', icon: <HiLightBulb /> },
      { name: 'Public Speaking', icon: <AiFillAudio /> },
      { name: 'Leadership',      icon: <HiFlag /> },
      { name: 'Teamwork',        icon: <HiLink /> },
      { name: 'Adaptability',    icon: <HiKey /> },
    ]
  },
];

function Skills() {
  return (
    <section id="skills" className="skills section">

      <h2 className="section-title">My Skills</h2><br/>
      <p className="section-subtitle">
        Technologies and tools I've worked with
      </p>

      {/* Loop over each category and render a card */}
      {/* .map() goes through every item in the array and returns JSX for each */}
      <div className="skills-grid">
        {skillCategories.map((category, index) => (

          // key prop is required by React when rendering lists
          // it helps React track which items changed
          <div className="skill-category-card" key={index}>

            <h3 className="category-title">
              <span>{category.emoji}</span> {category.title}
            </h3>

            {/* Inner grid of individual skill icons */}
            <div className="skill-icons-grid">
              {category.skills.map((skill, i) => (
                <div className="skill-icon-item" key={i}>
                  {/* icon is JSX stored in the object — renders directly */}
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;