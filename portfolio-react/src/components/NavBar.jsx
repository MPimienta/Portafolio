import '../styles/navBar.css'


export default function NavBar(){
  return (
    <nav className="menu">
      <a className="menu__item" href="#present">Contacto</a>
      <a className="menu__item" href="#pro">Proyectos</a>
      <a className="menu__item" href="#about">Sobre mí</a>
    </nav> 
  );
}