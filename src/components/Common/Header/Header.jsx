import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import useToggle from '../../../hooks/useToggle';

const Header = ({ appTitle }) => {
  // Usa el custom hook useToggle para manejar el estado del menú móvil
  // isMenuOpen será true/false, y toggleMenu alternará su valor
  const [isMenuOpen, toggleMenu] = useToggle(false);

  return (

    <header>
      <div className="header-content">
        <div className="logo">
          <img src="/img/logo-alfadev.png" alt="AlfaDev Logo" />
          <h1>{appTitle}</h1> {/* Usa la prop aquí */}
        </div>

        {/* Botón para el menú móvil - visible solo en pantallas pequeñas con CSS */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? (
            <i className="fas fa-times"></i> // Icono de cerrar (X) si el menú está abierto
          ) : (
            <i className="fas fa-bars"></i> // Icono de hamburguesa si el menú está cerrado
          )}
        </button>

        {/* La navegación. La clase 'menu-open' se añade si isMenuOpen es true */}
        <nav className={isMenuOpen ? 'menu-open' : ''}>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/alumnos">Alumnos</a></li>
            <li><a href="/cursos">Cursos</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/quien-somos">Quiénes Somos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// Define los propTypes para el componente Header
Header.propTypes = {
  // 'appTitle' debe ser un string y es una prop requerida
  appTitle: PropTypes.string.isRequired,
};

// Define valores por defecto para las props (opcional, pero buena práctica)
Header.defaultProps = {
  appTitle: 'AlfaDev', // Si no se pasa appTitle, usará 'AlfaDev'
};

export default Header;