import './App.css'
import AppRoutes from './AppRoutes';
import { Link } from 'react-router-dom';
import { Piedepagina } from './components/Piedepagina';
import AquariumHero from './components/AquiariumHero';
import Carrusel from './components/carrusel';
import ThemeToggle from './components/temapagina';
import { CarruselOfertas } from './components/carrusel_ofertas';
import { ProductCards } from './components/cards';
import { ProximosProductos } from './components/proximosproductos';





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
              <li><a>Item 1</a></li>
              <li><a>Item 2 </a></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      <AppRoutes />
      <Carrusel />
      <ProductCards />
      <CarruselOfertas />
      <ProximosProductos />
      <Piedepagina />

    </>
  );
}

export default App;