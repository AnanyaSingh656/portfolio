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
  SiNodedotjs
} from 'react-icons/si';
import { VscTerminalCmd, VscVscode } from 'react-icons/vsc';
import { FaRobot, FaBrain, FaMobileAlt } from 'react-icons/fa';

import { HiLightBulb, HiFlag, HiKey, HiLink } from "react-icons/hi"; //for prob solving, leadership, teamwork, adaptability
import { AiFillAudio } from "react-icons/ai"; //for public speaking


// Each category is an object with a title, emoji, and array of skills
// Each skill has a name and an icon component
const skillCategories = [
  {
    title: 'Frontend Development',
    emoji: '🚀',
    skills: [
      { name: 'HTML',             icon: <SiHtml5 /> },
      { name: 'CSS',              icon: <SiCss /> },
      { name: 'JavaScript',   icon: <SiJavascript /> },
      { name: 'React.js',          icon: <SiReact /> },
      { name: 'Responsive Design', icon: <FaMobileAlt /> },
    ]
  },
  {
    title: 'Programming & Core CS',
    emoji: '⚙️',
    skills: [
      { name: 'Java',    icon: <SiOpenjdk /> },
      { name: 'C',       icon: <SiC /> },
      { name: 'C++',     icon: <SiCplusplus /> },
      { name: 'Python',  icon: <SiPython /> },
      { name: 'DSA',     icon: <VscTerminalCmd /> },
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
      { name: 'Git',            icon: <SiGit /> },
      { name: 'GitHub',         icon: <SiGithub /> },
      { name: 'VS Code',        icon: <VscVscode /> },
      { name: 'Figma',          icon: <SiFigma /> },
      { name: 'Jupyter',        icon: <SiJupyter /> },
      { name: 'Google Colab',   icon: <SiGooglecolab /> },
      { name: 'npm',            icon: <SiNpm /> },
    ]
  },
  {
    title: 'Currently Learning',
    emoji: '🌱',
    skills: [
      { name: 'Advanced React', icon: <SiReact /> },
      { name: 'Node.js',        icon: <SiNodedotjs /> },
      { name: 'PostgreSQL',     icon: <FaBrain /> },
    ]
  },
    {
    title: 'Soft Skills',
    emoji: '🧠',
    skills: [
      { name: 'Problem Solving',    icon: <HiLightBulb /> },
      { name: 'Public Speaking',    icon: <AiFillAudio /> },
      { name: 'Leadership',         icon: <HiFlag />  },
      { name: 'Teamwork',           icon: <HiLink /> },
      { name: 'Adaptability',       icon: <HiKey /> },
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