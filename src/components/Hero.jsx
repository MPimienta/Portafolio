import '../styles/hero.css'


export default function Hero (){
  return ( 
    <section className="hero" id="present">
      <div className="presentation__intro">
        <img src="images/self.webp" alt="image of Mauricio" loading="lazy" id="self"/>
        <h1>Hi!, I'm Mauricio</h1>
      </div>
      <div className="presentation__info">
        <p>
          A Computer Engineer from Spain
        </p>
      </div>
      <div className="presentation__buttons" id="contact">
        <nav className="links">
          <a className="link" href="https://github.com/MPimienta" target="_blank">
            <img src="./images/github.svg" loading="lazy" alt="github logo" className="ico"/>Github
          </a>     
          <a className="link" href="https://www.linkedin.com/in/mauricio-pimienta-3838711a2/" target="_blank">
            <img src="./images/linkedin.svg" loading="lazy" alt="linkedin logo" className="ico"/>LinkedIn
          </a>
          <a className="link" href="mailto:mauriciopimienta.f@gmail.com" target="_blank">
            <img src="./images/gmail.svg" loading="lazy" alt="gmail logo" className="ico"/>mauriciopimienta.f@gmail.com
          </a>
        </nav>
      </div>
    </section>
  );
}