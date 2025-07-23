import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Galeria_peces from './pages/galeria_peces';
import Contacto from './pages/contacto';
import Proximamente from './pages/proximamente';
import LoginPage from './pages/LoginPage';
import Dashboard from './admin/Dashboard';
import ProductosAdmin from './admin/ProductosAdmin';
import ProximosProductosAdmin from './admin/ProximosProductosAdmin';
import ResenasAdmin from './admin/ReseñasAdmin';

import { ProtectedAdminRoute } from './components/ProtectedRoute'; // Asegúrate que exista

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/galeria_peces" element={<Galeria_peces />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/proximamente" element={<Proximamente />} />
      <Route path="/LoginPage" element={<LoginPage />} />

      {/* 🔐 Rutas protegidas para Admin */}
      <Route
        path="/admin"
        element={
          <ProtectedAdminRoute>
            <Dashboard />
          </ProtectedAdminRoute>
        }
      />
      <Route
        path="/admin/productos"
        element={
          <ProtectedAdminRoute>
            <ProductosAdmin />
          </ProtectedAdminRoute>
        }
      />
      <Route
        path="/admin/proximos-productos"
        element={
          <ProtectedAdminRoute>
            <ProximosProductosAdmin />
          </ProtectedAdminRoute>
        }
      />
      <Route
        path="/admin/ReseñasAdmin"
        element={
          <ProtectedAdminRoute>
            <ResenasAdmin />
          </ProtectedAdminRoute>
        }
      />
    </Routes>
  );
}
