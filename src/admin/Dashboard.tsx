import { Link } from "react-router-dom";
import SidebarAdmin from './SidebarAdmin'; // Asegúrate que la ruta sea correcta

const Dashboard = () => {
    return (
        <div className="flex">
            {/* Sidebar fijo */}
            <SidebarAdmin />

            {/* Contenido principal con margen izquierdo para no quedar oculto */}
            <main className="p-8 ml-60 flex-1">
                <h1 className="text-3xl font-bold mb-6">Bienvenido al Panel de Administración</h1>
                <p className="text-gray-600 mb-8">Desde aquí puedes gestionar todos los recursos de tu sitio.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link to="productos" className="bg-white shadow-lg rounded-xl p-6 hover:bg-blue-100 transition-all">
                        <h2 className="text-xl font-semibold mb-2">🛒 Gestionar Productos</h2>
                        <p>Agrega, edita o elimina los productos del catálogo.</p>
                    </Link>

                    <Link to="/admin/proximos-productos" className="bg-white shadow-lg rounded-xl p-6 hover:bg-green-100 transition-all">
                        <h2 className="text-xl font-semibold mb-2">📦 Próximos Productos</h2>
                        <p>Administra los productos que se lanzarán próximamente.</p>
                    </Link>

                    <Link to="/admin/reseñasadmin" className="bg-white shadow-lg rounded-xl p-6 hover:bg-yellow-100 transition-all">
                        <h2 className="text-xl font-semibold mb-2">✍️ Reseñas</h2>
                        <p>Visualiza o elimina reseñas de los usuarios.</p>
                    </Link>

                    <Link to="/admin/NuestroequipoAdmin" className="bg-white shadow-lg rounded-xl p-6 hover:bg-yellow-100 transition-all">
                        <h2 className="text-xl font-semibold mb-2">👥 Nuestro Equipo</h2>
                        <p>Visualiza o elimina reseñas de los usuarios.</p>
                    </Link>

                </div>
            </main>
        </div>
    );
};

export default Dashboard;
