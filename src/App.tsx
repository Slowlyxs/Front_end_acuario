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
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
            </div>
            <Link to="/" className="btn btn-ghost text-xl">Dulce Vida</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <Link to="/galeria_peces" className="btn btn-ghost text-xl">Productos</Link>
              <Link to="/proximamente" className="btn btn-ghost text-xl">¡Proximamente!</Link>
              <Link to="/About" className="btn btn-ghost text-xl">¡Sobre nosotros!</Link>
              <Link to="/contacto" className="btn btn-ghost text-xl">Contacto</Link>

            </ul>
          </div>
          <div className="navbar-end">
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