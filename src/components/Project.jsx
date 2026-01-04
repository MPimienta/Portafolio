import { Link } from 'react-router-dom';
import '../styles/project.css';

export default function Project({ project }) {
  const isInternalLink = project.link.startsWith('/');

  return (
    <div className="projects__item">
      <div className="img_container">
        <img className="project__image" loading="lazy" alt="project image" src={project.image} />
      </div>
      <div className="project__info">
        <h3>{project.name}</h3>
        <ul className="project__techs">
          <li className="tech">
            <img src={project.tech_1_icon} loading="lazy" alt="technology used image" className="ico" />{project.tech_1}
          </li>
          <li className="tech">
            <img src={project.tech_2_icon} loading="lazy" alt="technology used image" className="ico" />{project.tech_2}
          </li>
        </ul>
        <p className="project__description">{project.description}</p>
        <nav className="links">
          {isInternalLink ? (
            <Link className="link" to={project.link}>
              <img src="./images/link.svg" alt="image of a link" loading="lazy" className="ico" />Preview
            </Link>
          ) : (
            <a className="link" href={project.link} target="_blank" rel="noopener noreferrer">
              <img src="./images/link.svg" alt="image of a link" loading="lazy" className="ico" />Preview
            </a>
          )}
          <a className="link" href={project.repo}>
            <img src="./images/github.svg" alt="github logo" loading="lazy" className="ico" />Code
          </a>
        </nav>
      </div>
    </div>
  );
}