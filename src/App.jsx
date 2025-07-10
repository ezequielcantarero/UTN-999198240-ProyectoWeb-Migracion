import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';
import HomePage from './components/Pages/HomePage/HomePage';
import AlumnosPage from './components/Pages/AlumnosPage/AlumnosPage';
import CursosPage from './components/Pages/CursosPage/CursosPage';
import ContactPage from './components/Pages/ContactPage/ContactPage';
import AboutUsPage from './components/Pages/AboutUsPage/AboutUsPage';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage'; // Para manejar rutas no encontradas

function App() {
  return (
    <Router>
      <Header appTitle="AlfaDev"/> {/* El Header se mostrará en todas las páginas */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/nosotros" element={<AboutUsPage />} />
        <Route path="/alumnos" element={<AlumnosPage />} />
        <Route path="/cursos" element={<CursosPage />} />
        {/* Ruta para el error 404 - cualquier otra ruta */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer /> {/* El Footer se mostrará en todas las páginas */}
    </Router>
  );
}

export default App;