import React from 'react';
import '../styles/Achievements.css';
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';
import { GiDiamondTrophy } from 'react-icons/gi';

// each achievement has an icon, title, description and year
const achievementsData = [
  {
    icon: <FaTrophy />,
    title: 'Women Techie of the Year 2025-26',
    description: 'Received award from Vellore Institute of Technology, Vellore for my contributions in the STEM field.',
    year: '2026',
    color: 'gold',
  },
  {
    icon: <FaStar />,
    title: 'Cent Percent Attendance Award',
    description: 'Recognised for 100% attendance for the year 2024-25 at Vellore Institute of Technology, Vellore.',
    year: '2025',
    color: 'pink',
  },
  {
    icon: <GiDiamondTrophy />,
    title: 'Smart India Hackathon 2025 — Round 2',
    description: 'Selected for the 2nd round of SIH 2025. Built NivaranAI — a crowdsourced civic issue reporting and resolution platform.',
    year: '2025',
    color: 'gold',
  },
  {
    icon: <FaMedal />,
    title: 'Maharashtra Government Scholarship',
    description: 'Received a scholarship of ₹25,000 by the Government of Maharashtra for merit in academic performance in Standard 12th.',
    year: '2024',
    color: 'pink',
  },
  {
    icon: <FaMedal />,
    title: 'INSPIRE Award — DST Government of India',
    description: 'Received a scholarship of ₹10,000 under the INSPIRE Awards Scheme by the Department of Science and Technology, Ministry of Science and Technology, Government of India.',
    year: '2022',
    color: 'pink',
  },
  {
    icon: <FaTrophy />,
    title: 'Best Outgoing Child Award',
    description: 'Received this award as a passing out student of the 2022 batch from Symbiosis Secondary School.',
    year: '2022',
    color: 'gold',
  },
];

function Achievements() {
  return (
    <section id="achievements" className="achievements section">

      <h2 className="section-title">Achievements</h2><br/>
      <p className="section-subtitle">Some of the milestones achieved</p>

      {/* simple grid of cards */}
      <div className="achievements-grid">

        {achievementsData.map((item, index) => (
          <div className={`achievement-card ${item.color}`} key={index}>

            {/* icon in a circle at the top */}
            <div className={`achievement-icon ${item.color}`}>
              {item.icon}
            </div>

            {/* year badge */}
            <span className="achievement-year">{item.year}</span>

            <h3 className="achievement-title">{item.title}</h3>
            <p className="achievement-desc">{item.description}</p>

          </div>
        ))}

        <p className="section-subtitle">(Counting many more to come...)</p>

      </div>
    </section>
  );
}

export default Achievements;