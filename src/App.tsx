import './App.css'
import AppRoutes from './AppRoutes';
import { Link } from 'react-router-dom';
import { Piedepagina } from './components/Piedepagina';
import ThemeToggle from './components/temapagina';

function App() {
  return (
    <>
      <nav>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            {/* Menú hamburguesa solo visible en móvil */}
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              {/* Menú desplegable en móvil */}
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to="/galeria_peces">Productos</Link></li>
                <li><Link to="/proximamente">¡Próximamente!</Link></li>
                <li><Link to="/About">¡Sobre nosotros!</Link></li>
                <li><Link to="/contacto">Reseñas</Link></li>
                <li><Link to="/LoginPage">Logear</Link></li>
              </ul>
            </div>

            {/* Logo */}
            <Link to="/" className="inline-block rounded-full overflow-hidden hover:opacity-80 transition">
              <img
                src="/imagenes/DulcevidaFondo1.png"
                alt="Dulce Vida"
                className="h-30 w-30 object-cover rounded-full"
              />
            </Link>
          </div>

          {/* Menú visible solo en pantallas grandes */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><Link to="/galeria_peces">Productos</Link></li>
              <li><Link to="/proximamente">¡Próximamente!</Link></li>
              <li><Link to="/About">¡Sobre nosotros!</Link></li>
              <li><Link to="/contacto">Reseñas</Link></li>
            </ul>
          </div>

          <div className="navbar-end hidden lg:flex">
            <Link to="/LoginPage" className="btn btn-ghost text-xl">Logear</Link>
          </div>

          <ThemeToggle />
        </div>
      </nav>

      <AppRoutes />
      <Piedepagina />
    </>
  );
}

export default App;
