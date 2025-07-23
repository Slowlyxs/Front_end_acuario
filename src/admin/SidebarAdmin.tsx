import { Link } from 'react-router-dom';

const SidebarAdmin = () => {
  return (
    <div className="h-screen bg-base-200 w-60 p-4 shadow-lg fixed">
      <h2 className="text-2xl font-bold mb-6">Panel Admin</h2>
      <ul className="menu">
        <li><Link to="/admin">Inicio</Link></li>
        <li><Link to="/admin/productos">Productos</Link></li>
        <li><Link to="/admin/proximos-productos">Próximos Productos</Link></li>
        <li><Link to="/admin/contactos">Contactos</Link></li>
      </ul>
    </div>
  );
};

export default SidebarAdmin;
