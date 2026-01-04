import { useState } from 'react'
import '../App.css'

import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Project from '../components/Project'
import AboutMe from '../components/AboutMe'
import FloatingDots from '../components/FloatingDots'

function Home() {

  const project_1 = {
    name: "Xunset Group",
    image: "./images/first-project.webp",
    description: "The website for the restaurant group XunsetGroup. It consists of a landing page with links to each section's respective pages, showing all relevant information while maintaining interactivity and accessibility.",
    link: "https://www.xunsetgroup.com",
    repo: "https://github.com/MeaBurro47/measures-lcdscreen.git",
    techs: [
      { name: "React", icon: "./images/react.svg" },
      { name: "CSS", icon: "./images/css.svg" }
    ]
  }

  const project_2 = {
    name: "LCD Measuring System",
    image: "./images/latest_image.webp",
    description: "A real-time temperature, humidity, and brightness meter, also featuring a stopwatch with alarm, all controlled via a remote.",
    link: "/project/lcd-measuring-system", // Updated link
    repo: "https://github.com/MeaBurro47/measures-lcdscreen.git",
    techs: [
      { name: "Arduino", icon: "./images/arduino.svg" },
      { name: "C++", icon: "./images/cpp.svg" }
    ]
  }

  const project_3 = {
    name: "Finance Manager",
    image: "./images/cuentas.webp",
    description: "An app developed in Python that manages a person's income and expenses, with the possibility to manage multiple users.",
    link: "https://www.xunsetgroup.com",
    repo: "https://github.com/MeaBurro47/measures-lcdscreen.git",
    techs: [
      { name: "Python", icon: "./images/python.svg" },
    ]
  }


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <section className="projects" id="pro">
          <h2><img className="title_img" id="projects_img" loading="lazy" alt="gear icon for the projects section" src="./images/projects.svg" />Projects</h2>
          <Project project={project_1} />
          <Project project={project_2} />
          <Project project={project_3} />
        </section>

        <section className="about_me" id="about">
          <AboutMe />
        </section>

        <aside className="floating_dots">
          <FloatingDots />
        </aside>

      </main>
    </>
  )
}

export default Home
