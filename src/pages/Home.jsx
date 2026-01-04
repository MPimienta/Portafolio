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
    link: "/project/lcd-measuring-system",
    repo: "https://github.com/MeaBurro47/measures-lcdscreen.git",
    techs: [
      { name: "Arduino", icon: "./images/arduino.svg" },
      { name: "C++", icon: "./images/cpp.svg" }
    ]
  }

  const project_3 = {
    name: "Telegram Quiz Bot",
    image: "./images/quiz_bot.webp",
    description: "An asynchronous trivia bot designed for the Telegram platform. It handles dynamic question sets using Pandas, manages persistent user scoring with SQL, and features an interactive interface based on inline keyboards.",
    link: "https://t.me/Questionary47_bot",
    repo: "https://github.com/MPimienta/Quiz-Bot.git",
    techs: [
      { name: "Python", icon: "./images/python.svg" },
      { name: "SQL", icon: "./images/sql.svg" }
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
