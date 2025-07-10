import { useState, useCallback } from 'react';

/**
 * Custom Hook para manejar un estado booleano de activación/desactivación (toggle).
 * @param {boolean} initialState - El estado inicial del toggle (por defecto, false).
 * @returns {[boolean, () => void]} - Un array con el estado actual y la función para alternarlo.
 */
const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  // useCallback memoriza la función 'toggle' para que no se re-cree en cada render.
  // Esto es una buena práctica para optimizar el rendimiento de los componentes hijos
  // que podrían depender de esta función.
  const toggle = useCallback(() => setState(prev => !prev), []);

  return [state, toggle];
};

export default useToggle;
