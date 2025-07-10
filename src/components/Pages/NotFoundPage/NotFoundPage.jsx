import React from 'react';

const NotFoundPage = () => {
  return (
    <main style={{ textAlign: 'center', padding: '50px' }}>
      <h2>404 - Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <p>
        <a href="/">Volver a la página principal</a>
      </p>
    </main>
  );
};

export default NotFoundPage;