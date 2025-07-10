import React from 'react';
import './AlumnosPage.css';
import Card from '../../Common/Card/Card';

const alumnosDestacados = [
  {
    id: 1,
    imageUrl: '/img/alumno1.png',
    title: 'Juan Pérez',
    description: 'Excelente desempeño en el curso de Python Intermedio.',
    linkText: 'Ver Perfil', // Texto del enlace específico para alumnos
    linkUrl: '#', // Puedes cambiar esto a una ruta de perfil real si la tuvieras
  },
  {
    id: 2,
    imageUrl: '/img/alumno2.png',
    title: 'María García',
    description: 'Proyecto final sobresaliente utilizando Django.',
    linkText: 'Ver Perfil',
    linkUrl: '#',
  },
];

const AlumnosPage = () => {
  return (
    <main>
      <section id="alumnos-destacados">
        <h2>Alumnos Destacados</h2>
        <div className="cards-container"> {/* 'class' cambia a 'className' */}
          <div className="card"> {/* 'class' cambia a 'className' */}
            {alumnosDestacados.map((alumno) => (
            <Card
              key={alumno.id} // Es crucial usar una 'key' única al mapear listas en React
              imageUrl={alumno.imageUrl}
              title={alumno.title}
              description={alumno.description}
              linkText={alumno.linkText}
              linkUrl={alumno.linkUrl}
            />
          ))}
          
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
