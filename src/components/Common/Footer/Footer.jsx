import React from 'react';
import './Footer.css'; // Asegúrate de que esta línea esté presente

const Footer = () => {
  // Función que se ejecuta cuando se hace clic en un icono de red social
  const handleSocialClick = (e, platform) => {
    e.preventDefault(); // Previene el comportamiento por defecto del enlace (navegar a #)
    console.log(`¡Has hecho clic en el icono de ${platform}!`);
    // Aquí podrías añadir lógica más avanzada, como:
    // - Abrir la URL real de la red social en una nueva pestaña (window.open('URL', '_blank'))
    // - Enviar un evento de análisis (ej. Google Analytics)
    // - Mostrar un mensaje al usuario
  };

  return (
    <footer>
      <div className="social-icons">
        {/* Adjuntamos el manejador de eventos onClick a cada enlace */}
        <a href="#" onClick={(e) => handleSocialClick(e, 'Facebook')}>
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" onClick={(e) => handleSocialClick(e, 'Twitter')}>
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" onClick={(e) => handleSocialClick(e, 'LinkedIn')}>
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" onClick={(e) => handleSocialClick(e, 'Instagram')}>
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p>&copy; 2025 AlfaDev</p>
    </footer>
  );
};

export default Footer;
