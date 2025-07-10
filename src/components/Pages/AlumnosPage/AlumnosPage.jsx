import React from 'react';
import './AlumnosPage.css';

const AlumnosPage = () => {
  return (
    <main>
      <section id="alumnos-destacados">
        <h2>Alumnos Destacados</h2>
        <div className="cards-container"> {/* 'class' cambia a 'className' */}
          <div className="card"> {/* 'class' cambia a 'className' */}
            {/* Ruta de imagen ajustada para la carpeta 'public' de React */}
            <img src="/img/alumno1.png" alt="Alumno 1" /> {/* Etiqueta <img> auto-cerrada */}
            <h3>Juan Pérez</h3>
            <p>Excelente desempeño en el curso de Python Intermedio.</p>
          </div>
          <div className="card"> {/* 'class' cambia a 'className' */}
            {/* Ruta de imagen ajustada para la carpeta 'public' de React */}
            <img src="/img/alumno2.png" alt="Alumno 2" /> {/* Etiqueta <img> auto-cerrada */}
            <h3>María García</h3>
            <p>Proyecto final sobresaliente utilizando Django.</p>
          </div>
        </div>
      </section>

      <section id="testimonios">
        <h2>Testimonios</h2>
        <blockquote>
          "El curso de Python me abrió las puertas al mundo del desarrollo web. ¡Muy recomendado!"
          <cite>- Carlos López</cite>
        </blockquote>
      </section>
    </main>
  );
};

export default AlumnosPage;
