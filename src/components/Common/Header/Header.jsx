import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-content"> {/* 'class' cambia a 'className' */}
        <div className="logo"> {/* 'class' cambia a 'className' */}
          <img src="/img/logo-alfadev.png" alt="AlfaDev Logo" /> {/* <img /> debe cerrarse correctamente */}
          <h1>AlfaDev</h1>
        </div>
      </div>
      <nav>
        <ul>
          {/* Los enlaces deben usar las rutas de React Router Dom, no los .html */}
          <li><a href="/">Inicio</a></li> {/* Cambiado de index.html a / */}
          <li><a href="/alumnos">Alumnos</a></li> {/* Cambiado de alumnos.html a /alumnos */}
          <li><a href="/cursos">Cursos</a></li> {/* Cambiado de cursos.html a /cursos */}
          <li><a href="/contacto">Contacto</a></li> {/* Cambiado de contacto.html a /contacto */}
          <li><a href="/nosotros">Quienes Somos</a></li> {/* Cambiado de contacto.html a /contacto */}
        </ul>
      </nav>    
    </header>
  );
};

export default Header;