import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <main>
      {/* Aquí irá todo el contenido de tu archivo index.html original,
          excepto el <header> y el <footer> que ya están en sus componentes */}
      <section id="hero">
        {/* La ruta de la imagen se ajusta para la carpeta 'public' de React */}
        <img src="/img/python-code.png" alt="Aprende Python" />
        <h1>Bienvenido al Curso de Python</h1>
        <p>Descubre el mundo de la programación con el lenguaje más popular.</p>
      </section>

      <section id="intro">
        <h2>¿Por qué Python?</h2>
        <p>Python es un lenguaje de programación de alto nivel, fácil de aprender y con una sintaxis clara. Es utilizado en desarrollo web, ciencia de datos, inteligencia artificial y mucho más.</p>
      </section>
      {/* Aquí puedes empezar a pegar secciones de tu index.html */}
    </main>
  );
};

export default HomePage;