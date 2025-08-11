import { useState } from 'react'

import './App.css'

import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Project from './components/Project'
import AboutMe from './components/AboutMe'
import FloatingDots from './components/FloatingDots'



function App() {

  const project_1 = {
    name: "Xunset Group",
    image: "./images/first-project.webp",
    description: "The website for the restaurant group XunsetGroup. It consists of a landing page with links to each section's respective pages, showing all relevant information while maintaining interactivity and accessibility.",
    link: "https://www.xunsetgroup.com",
    repo: "https://github.com/MeaBurro47/measures-lcdscreen.git",
    tech_1: "React",
    tech_1_icon: "./images/react.svg",
    tech_2: "CSS",
    tech_2_icon: "./images/css.svg",
  }

  const project_2 = {
    name: "LCD Measuring System",
    image: "./images/latest_image.webp",
    description: "A real-time temperature, humidity, and brightness meter, also featuring a stopwatch with alarm, all controlled via a remote.",
    link: "https://www.xunsetgroup.com",
    repo: "https://github.com/MeaBurro47/measures-lcdscreen.git",
    tech_1: "Arduino",
    tech_1_icon: "./images/arduino.svg",
    tech_2: "C++",
    tech_2_icon: "./images/cpp.svg",
  }

  const project_3 = {
    name: "Finance Manager",
    image: "./images/cuentas.webp",
    description: "An app developed in Python that manages a person's income and expenses, with the possibility to manage multiple users.",
    link: "https://www.xunsetgroup.com",
    repo: "https://github.com/MeaBurro47/measures-lcdscreen.git",
    tech_1: "Python",
    tech_1_icon: "./images/python.svg",
    tech_2: "TkInter",
    tech_2_icon: "./images/tkinter.svg",
  }


  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <Hero/>
        <section className="projects" id="pro">
          <h2><img className="title_img" id="projects_img" loading="lazy" alt="gear icon for the projects section" src="./images/projects.svg"/>Projects</h2>
          <Project project={project_1}/>
          <Project project={project_2}/>
          <Project project={project_3}/>
        </section>

        <section className="about_me" id="about">
          <AboutMe/>
        </section>

        <aside className="floating_dots">
          <FloatingDots/>
        </aside>

      </main>
    </>
  )
}

export default App
