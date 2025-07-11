import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Galeria_peces from './pages/galeria_peces';
import Contacto from './pages/contacto';
import Proximamente from './pages/proximamente'; // Capitalized
import LoginPage from './pages/LoginPage';

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />  
        <Route path="/galeria_peces" element={<Galeria_peces/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/proximamente" element={<Proximamente/>} /> {/* Capitalized */}
        <Route path= "/LoginPage" element={<LoginPage />} /> {/* Capitaized */}
        {/* Add other routes as needed */}  
    </Routes>
  );
}