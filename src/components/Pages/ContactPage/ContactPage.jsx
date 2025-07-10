import React, { useState } from 'react';
import './ContactPage.css'; // Asegúrate de que esta línea esté presente

const ContactPage = () => {
  // 1. Estados para cada campo del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    curso: 'basico', // Valor por defecto del select
    tipo_consulta: '', // Valor por defecto para los radios
    comentario: '',
  });

  // Estado para el mensaje de estado del formulario
  const [formStatus, setFormStatus] = useState(null); // 'success', 'error', null

  // 2. Manejador de cambios para todos los inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'radio' ? checked ? value : prevData[name] : value,
    }));
  };

  // 3. Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto de recargar la página

    // Aquí iría la lógica para enviar los datos a un backend
    // Por ahora, solo mostraremos los datos en la consola y un mensaje al usuario
    console.log('Datos del formulario enviados:', formData);

    // Simulación de envío exitoso
    setFormStatus('success');
    // O para simular un error: setFormStatus('error');

    // Opcional: Limpiar el formulario después de un envío exitoso
     setFormData({
       nombre: '',
       email: '',
       telefono: '',
       curso: 'basico',
       tipo_consulta: '',
       comentario: '',
     });

    // Opcional: Resetear el estado del formulario después de un tiempo
    setTimeout(() => {
      setFormStatus(null);
    }, 5000); // El mensaje desaparece después de 5 segundos
  };

  return (
    <main>
      <section id="contact-form">
        <h2>Contáctanos</h2>
        <form onSubmit={handleSubmit}> {/* Asocia el manejador de envío */}
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              required
              value={formData.nombre} // Controla el valor con el estado
              onChange={handleChange} // Asocia el manejador de cambios
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="Tu teléfono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="curso">Curso de Interés</label>
            <select
              id="curso"
              name="curso"
              value={formData.curso}
              onChange={handleChange}
            >
              <option value="basico">Python Básico</option>
              <option value="intermedio">Python Intermedio</option>
              <option value="avanzado">Python Avanzado</option>
              <option value="experto">Python Experto</option>
              <option value="jovenes">Python para Jóvenes</option>
              <option value="adultos">Python para Adultos</option>
              <option value="web">Python para Desarrollo Web</option>
            </select>
          </div>
          <div className="form-group">
            <label>Tipo de Consulta</label>
            <div className="radio-group">
              <input
                type="radio"
                id="consulta"
                name="tipo_consulta"
                value="consulta"
                checked={formData.tipo_consulta === 'consulta'} // Controla el estado del radio
                onChange={handleChange}
              />
              <label htmlFor="consulta">Consulta</label>
              <input
                type="radio"
                id="sugerencia"
                name="tipo_consulta"
                value="sugerencia"
                checked={formData.tipo_consulta === 'sugerencia'}
                onChange={handleChange}
              />
              <label htmlFor="sugerencia">Sugerencia</label>
              <input
                type="radio"
                id="reclamo"
                name="tipo_consulta"
                value="reclamo"
                checked={formData.tipo_consulta === 'reclamo'}
                onChange={handleChange}
              />
              <label htmlFor="reclamo">Reclamo</label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="comentario">Comentario</label>
            <textarea
              id="comentario"
              name="comentario"
              rows="5"
              placeholder="Escribe tu comentario"
              required
              value={formData.comentario}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-buttons">
            <button type="submit">Enviar</button>
            <button type="reset" onClick={() => setFormData({ // Manejador para el botón de reset
              nombre: '', email: '', telefono: '', curso: 'basico', tipo_consulta: '', comentario: ''
            })}>Restablecer</button>
          </div>

          {/* Mensaje de estado del formulario */}
          {formStatus === 'success' && (
            <p style={{ color: 'green', marginTop: '1rem' }}>¡Mensaje enviado con éxito!</p>
          )}
          {formStatus === 'error' && (
            <p style={{ color: 'red', marginTop: '1rem' }}>Hubo un error al enviar el mensaje. Inténtalo de nuevo.</p>
          )}
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
