import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Producto {
  _id: string;
  nombre: string;
  descripcion: string;
  fechaLlegada: string;
  imagen: string;
  categoria: string;
}

const ProximosProductosAdmin: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);

  const apiURL = 'https://acuario-backends.onrender.com/proximos-productos';

  useEffect(() => {
    axios
      .get(apiURL)
      .then((res) => {
        setProductos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al obtener productos:', err);
        setLoading(false);
      });
  }, []);

  const eliminarProducto = (id: string) => {
    if (confirm('¿Deseas eliminar este producto?')) {
      axios
        .delete(`${apiURL}/${id}`)
        .then(() => {
          setProductos((prev) => prev.filter((p) => p._id !== id));
        })
        .catch((err) => {
          console.error('Error al eliminar producto:', err);
        });
    }
  };

  const formatearFecha = (fecha: string) => {
    return new Date(fecha).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">📦 Próximos Productos</h2>

      {loading ? (
        <p className="text-gray-600">Cargando productos...</p>
      ) : productos.length === 0 ? (
        <p className="text-gray-500">No hay productos próximos por llegar.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg shadow">
            <thead className="bg-indigo-100">
              <tr>
                <th className="py-3 px-4 text-left">Imagen</th>
                <th className="py-3 px-4 text-left">Nombre</th>
                <th className="py-3 px-4 text-left">Descripción</th>
                <th className="py-3 px-4 text-center">Fecha Llegada</th>
                <th className="py-3 px-4 text-center">Categoría</th>
                <th className="py-3 px-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr key={producto._id} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <img
                      src={producto.imagen || 'https://via.placeholder.com/80'}
                      alt={producto.nombre}
                      className="w-20 h-20 object-cover rounded"
                    />
                  </td>
                  <td className="py-3 px-4">{producto.nombre}</td>
                  <td className="py-3 px-4 text-sm">{producto.descripcion}</td>
                  <td className="py-3 px-4 text-center">{formatearFecha(producto.fechaLlegada)}</td>
                  <td className="py-3 px-4 text-center">{producto.categoria}</td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => eliminarProducto(producto._id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProximosProductosAdmin;
