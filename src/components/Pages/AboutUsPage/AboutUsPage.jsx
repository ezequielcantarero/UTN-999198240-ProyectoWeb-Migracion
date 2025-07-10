import React from 'react';
import './AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <main>
      <section className="about-hero">
        <h1 className="about-title">Nuestra Historia en AlfaDev</h1>
        <p className="about-subtitle">Impulsando el futuro a través de la educación en programación.</p>
        <img src="/img/about-us-hero.jpg" alt="Equipo AlfaDev" className="about-hero-image" />
      </section>

      <section className="mission-vision">
        <div className="container">
          <h2>Nuestra Misión</h2>
          <p>En AlfaDev, nuestra misión es democratizar el acceso a la educación de calidad en programación, capacitando a individuos de todas las edades y niveles para que dominen Python y transformen sus carreras y vidas.</p>

          <h2>Nuestra Visión</h2>
          <p>Ser la plataforma líder en formación de Python, reconocida por nuestra excelencia académica, innovación pedagógica y el éxito de nuestros alumnos en el mundo tecnológico.</p>
        </div>
      </section>

      <section className="our-values">
        <div className="container">
          <h2>Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Innovación</h3>
              <p>Estamos en constante búsqueda de las mejores metodologías y tecnologías para ofrecer una educación de vanguardia.</p>
            </div>
            <div className="value-item">
              <h3>Excelencia</h3>
              <p>Comprometidos con la calidad en cada curso y en cada interacción con nuestros estudiantes.</p>
            </div>
            <div className="value-item">
              <h3>Accesibilidad</h3>
              <p>Creemos que la programación es para todos, y trabajamos para eliminar barreras en el aprendizaje.</p>
            </div>
            <div className="value-item">
              <h3>Comunidad</h3>
              <p>Fomentamos un ambiente de colaboración y apoyo mutuo entre alumnos y profesores.</p>
            </div>
          </div>
        </div>
      </section>

      {/*<section className="our-team">
        <div className="container">
          <h2>Nuestro Equipo</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="/img/team-member1.jpg" alt="Miembro del Equipo 1" className="team-photo" />
              <h3>Dr. Alejandro Gómez</h3>
              <p>Fundador y CEO</p>
              <p>Experto en Inteligencia Artificial y Machine Learning con más de 15 años de experiencia.</p>
            </div>
            <div className="team-member">
              <img src="/img/team-member2.jpg" alt="Miembro del Equipo 2" className="team-photo" />
              <h3>Lic. Sofía Ramos</h3>
              <p>Directora Académica</p>
              <p>Especialista en desarrollo web con Python y educadora apasionada.</p>
            </div> 
          </div>
        </div>
      </section>*/}
    </main>
  );
};

export default AboutUsPage;