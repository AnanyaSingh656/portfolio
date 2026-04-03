import React from 'react';
import '../styles/About.css';
import profilePic from '../assets/ananyapic.jpeg';

// importing specific icons from react-icons
// FaGraduationCap is the name of the icon, Fa = Font Awesome icon pack
import { FaGraduationCap, FaBook, FaPlane, FaMusic } from 'react-icons/fa';
import { GiSunflower } from 'react-icons/gi';
import { MdSportsMartialArts } from 'react-icons/md';
import { BsLightbulb } from 'react-icons/bs';
import { IoDiamondOutline } from 'react-icons/io5';

function About() {
  return (
    <section id="about" className="about section">

      <h2 className="section-title">About Me</h2>

      {/* top layout — photo left, intro right */}
      <div className="about-top">

        {/* LEFT — photo */}
        <div className="about-image-box">
          <img src={profilePic} alt="Ananya" className="about-photo" />
          {/* decorative soft blob behind photo — pure CSS */}
          <div className="about-image-blob"></div>
        </div>

        {/* RIGHT — short warm intro */}
        <div className="about-intro">

          <p className="about-tagline">
            Hey there! I'm <span>Ananya</span> — a curious mind, a
            relentless learner, and someone who finds joy in the little
            things.
          </p>

          <p className="about-para">
            I have a deep love for learning whether it's exploring new
            ideas, trying unique things, or simply expanding my perspective
            one page at a time.
          </p>

          <p className="about-para">
            When you don't find me buried in coursework or a college
            project, I'm probably curled up with a fantasy novel, deep
            into a TED talk, listening to a podcast, or researching
            healthier food "alternatives" to include into everyday life.
          </p>

          {/* quote card */}
          <div className="about-quote">
            <IoDiamondOutline className="quote-icon" />
            <p>
              "And when you want something, all the universe conspires
              in helping you to achieve it."
            </p>
            <span>— The Alchemist</span>
          </div>

        </div>
      </div>

      {/* bottom — info cards in a grid */}
      <div className="about-cards">

        <div className="about-card">
          {/* icon component — size and color set via className in CSS */}
          <FaGraduationCap className="card-icon" />
          <div>
            <h4>Currently Studying</h4>
            <p>
              Sophomore at VIT Vellore, pursuing B.Tech in CSE with a
              specialisation in AI & ML.
            </p>
          </div>
        </div>

        <div className="about-card">
          <MdSportsMartialArts className="card-icon" />
          <div>
            <h4>Beyond Academics</h4>
            <p>
              Public speaking, badminton, swimming, karate, painting and
              music keep me grounded and growing.
            </p>
          </div>
        </div>

        <div className="about-card">
          <FaPlane className="card-icon" />
          <div>
            <h4>Love for Travel</h4>
            <p>
              Exploring new places, soaking in different cultures, tasting
              cuisines and meeting people genuinely excites me.
            </p>
          </div>
        </div>

        <div className="about-card">
          <FaBook className="card-icon" />
          <div>
            <h4>Always A Reader</h4>
            <p>
              Self-development and fantasy novels are my go to. They really expand my thoughts and 
              keep my imagination alive. <br/>
              My best reads would be The Alchemist, The Monk Who Sold His Ferrari, I Want to Die but I Want to Eat Tteokbokki, 
              the Harry Potter series, the Percy Jackson and Heroes of Olympus series.
            </p>
          </div>
        </div>

        <div className="about-card">
          <GiSunflower className="card-icon" />
          <div>
            <h4>My Philosophy</h4>
            <p>
              Be inspired by sunflowers. Grow towards the light,
              and let the shadows fall behind.
            </p>
          </div>
        </div>

        <div className="about-card">
          <BsLightbulb className="card-icon" />
          <div>
            <h4>Let's Connect</h4>
            <p>
              If you love tech, innovation, building things, have a
              zest for life or would just like to have a good talk over a plate of momos
              I'd love to connect with you!
            </p>
          </div>
        </div>

      </div>

      <div className="about-resume">
        <a href="#" className="btn btn-primary">Download Resume</a>
      </div>

    </section>
  );
}

export default About;