import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; // importing the component
import Hero from './components/Hero'
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Projects from './components/Projects';


// App function returns what gets shown on screen
function App(){
  return(
    <div className="App">
      <Navbar /> {/* using the Navbar component */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />

      <h1></h1>
    </div>
  );

}

export default App;