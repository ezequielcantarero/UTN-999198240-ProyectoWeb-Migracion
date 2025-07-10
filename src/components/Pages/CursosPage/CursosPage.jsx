import React from 'react';
import './CursosPage.css'; // Asegúrate de que esta línea esté presente

const CursosPage = () => {
  // Manejador de clic para "Ver Detalles"
  const handleVerDetalles = (cursoNombre) => {
    // Aquí puedes implementar la lógica para mostrar un modal,
    // navegar a una página de detalles, o lo que tu diseño original hiciera.
    alert(`Has hecho clic en "Ver Detalles" para el curso: ${cursoNombre}`);
    console.log(`Ver Detalles del curso: ${cursoNombre}`);
  };

  return (
    <main>
      <section id="cursos-disponibles">
        <h2>Nuestros Cursos</h2>

        <div className="curso-categoria">
          <h3>Por Dificultad</h3>
          <div className="cursos-galeria">
            <div className="curso-item" data-dificultad="basico">
              <img src="/img/curso-basico.png" alt="Python Básico" />
              <h4>Python Básico para Principiantes</h4>
              <p>Ideal para quienes dan sus primeros pasos en programación.</p>
              <a href="#" onClick={(e) => { e.preventDefault(); handleVerDetalles('Python Básico'); }}>Ver Detalles</a> {/* Asocia el manejador de clic */}
            </div>
            <div className="curso-item" data-dificultad="intermedio">
              <img src="/img/curso-intermedio.png" alt="Python Intermedio" />
              <h4>Python Intermedio: POO y Estructuras</h4>
              <p>Profundiza en la programación orientada a objetos y el manejo de datos.</p>
              <a href="#" onClick={(e) => { e.preventDefault(); handleVerDetalles('Python Intermedio'); }}>Ver Detalles</a>
            </div>
            <div className="curso-item" data-dificultad="avanzado">
              <img src="/img/curso-avanzado.png" alt="Python Avanzado" />
              <h4>Python Avanzado: Frameworks y Ciencia de Datos</h4>
              <p>Domina Django, Flask, Pandas y más herramientas avanzadas.</p>
              <a href="#" onClick={(e) => { e.preventDefault(); handleVerDetalles('Python Avanzado'); }}>Ver Detalles</a>
            </div>
            <div className="curso-item" data-dificultad="avanzado">
              <img src="/img/curso-experto.png" alt="Python Experto" />
              <h4>Python Experto: Optimización y Despliegue</h4>
              <p>Aprende técnicas de optimización y cómo desplegar tus aplicaciones.</p>
              <a href="#" onClick={(e) => { e.preventDefault(); handleVerDetalles('Python Experto'); }}>Ver Detalles</a>
            </div>
          </div>
        </div>

        <div className="curso-categoria">
          <h3>Por Edad</h3>
          <div className="cursos-galeria">
            <div className="curso-item" data-edad="jovenes">
              <img src="/img/python-jovenes.png" alt="Python para Jóvenes" />
              <h4>Python para Jóvenes (12-16 años)</h4>
              <p>Curso introductorio y divertido para jóvenes programadores.</p>
              <a href="#" onClick={(e) => { e.preventDefault(); handleVerDetalles('Python para Jóvenes'); }}>Ver Detalles</a>
            </div>
            <div className="curso-item" data-edad="adultos">
              <img src="/img/python-adultos.png" alt="Python para Adultos" />
              <h4>Python para Adultos</h4>
              <p>Curso completo adaptado a las necesidades de los adultos.</p>
              <a href="#" onClick={(e) => { e.preventDefault(); handleVerDetalles('Python para Adultos'); }}>Ver Detalles</a>
            </div>
          </div>
        </div>

        <div className="curso-categoria">
          <h3>Por Área de Interés</h3>
          <div className="cursos-galeria">
            <div className="curso-item" data-area="web">
              <img src="/img/python-web.png" alt="Python para Desarrollo Web" />
              <h4>Python para Desarrollo Web</h4>
              <p>Aprende a construir aplicaciones web robustas con Python.</p>
              <a href="#" onClick={(e) => { e.preventDefault(); handleVerDetalles('Python para Desarrollo Web'); }}>Ver Detalles</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CursosPage;
