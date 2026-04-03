import React from 'react';
import '../styles/Education.css';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';
import { MdImportContacts } from "react-icons/md";

// education data as an array of objects  (same pattern as Skills
// keeping data separate from JSX makes it easy to update later
const educationData = [
  {
    icon: <FaGraduationCap />,
    institution: 'Vellore Institute of Technology, Vellore',
    degree: 'B.Tech. in CSE with specialisation in AI & ML',
    grade: 'CGPA: 9.02, SGPA: 9.22 (3rd Sem)',
    year: '2024 to 2028 (Pursuing)',
    type: 'university',   // used to give different card styling
  },
  {
    icon: <MdImportContacts />,
    institution: 'Suryadatta Public School, Pune',
    degree: '12th Standard — Science',
    grade: '82.33%',
    year: '2024 (Completed)',
    type: 'school',
  },
  {
    icon: <FaSchool />,
    institution: 'Symbiosis Secondary School, Pune',
    degree: '10th Standard',
    grade: '96.60%',
    year: '2022 (Completed)',
    type: 'school',
  },
];

function Education() {
  return (
    <section id="education" className="education section">

      <h2 className="section-title">Education</h2><br/>
      <p className="section-subtitle">My academic journey so far:</p>

      {/* vertical timeline container */}
      <div className="education-timeline">

        {educationData.map((edu, index) => (
          <div className="timeline-item" key={index}>

            {/* the vertical line + circle dot on the left */}
            <div className="timeline-left">
              <div className={`timeline-icon ${edu.type}`}>
                {edu.icon}
              </div>
              {/* don't show the line after the last item */}
              {index !== educationData.length - 1 && (
                <div className="timeline-line"></div>
              )}
            </div>

            {/* the card on the right */}
            <div className={`timeline-card ${edu.type}`}>

              <div className="timeline-card-header">
                <h3 className="institution-name">{edu.institution}</h3>
              </div>

              <p className="degree-name">{edu.degree}</p>

              <div className="timeline-card-footer">
                <span className="edu-grade"> {edu.grade}</span>
                <span className="edu-year"> {edu.year}</span>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Education;