import React from 'react';
import PropTypes from 'prop-types'; // Importamos PropTypes para la validación de props
import './Card.css'; // Importamos los estilos específicos de la Card

/**
 * Componente reutilizable para mostrar una tarjeta de contenido (alumno o curso).
 * Recibe props para el contenido dinámico de la tarjeta.
 */
const Card = ({ imageUrl, title, description, linkUrl, linkText, onClick }) => {
  return (
    // Usamos la clase 'card-item' para los estilos de la tarjeta.
    // Esta clase contendrá los estilos que antes estaban en .curso-item o .card
    <div className="card-item">
      {/* La imagen de la tarjeta */}
      <img src={imageUrl} alt={title} />
      {/* Título de la tarjeta */}
      <h4>{title}</h4>
      {/* Descripción de la tarjeta */}
      <p>{description}</p>
      {/* Enlace de la tarjeta, con un manejador de clic opcional */}
      <a href={linkUrl} onClick={onClick}>
        {linkText}
      </a>
    </div>
  );
};

// Definición de PropTypes para validar las props que recibe el componente Card
Card.propTypes = {
  imageUrl: PropTypes.string.isRequired, // URL de la imagen, debe ser un string y es requerido
  title: PropTypes.string.isRequired,    // Título de la tarjeta, debe ser un string y es requerido
  description: PropTypes.string.isRequired, // Descripción de la tarjeta, debe ser un string y es requerido
  linkUrl: PropTypes.string,             // URL del enlace, es un string opcional
  linkText: PropTypes.string,            // Texto del enlace, es un string opcional
  onClick: PropTypes.func,               // Función de clic opcional para el enlace
};

// Valores por defecto para las props opcionales
Card.defaultProps = {
  linkUrl: '#',      // Por defecto, el enlace apunta a '#'
  linkText: 'Ver Detalles', // Texto por defecto para el enlace
  onClick: (e) => e.preventDefault(), // Por defecto, previene la navegación si no hay onClick
};

export default Card;
