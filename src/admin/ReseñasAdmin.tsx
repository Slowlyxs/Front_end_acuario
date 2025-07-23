import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Reseña {
  _id: string;
  nombreCliente: string;
  mensaje: string;
  calificacion: number;
  fecha: string;
}

const ResenasAdmin: React.FC = () => {
  const [resenas, setResenas] = useState<Reseña[]>([]);

  useEffect(() => {
    axios
      .get('https://acuario-backends.onrender.com/resenas') // Ajusta si tu endpoint es otro
      .then((res) => setResenas(res.data))
      .catch((err) => console.error('Error al obtener reseñas:', err));
  }, []);

  const eliminarResena = (id: string) => {
    if (confirm('¿Estás seguro de eliminar esta reseña?')) {
      axios
        .delete(`https://acuario-backends.onrender.com/resenas/${id}`)
        .then(() => setResenas((prev) => prev.filter((r) => r._id !== id)))
        .catch((err) => console.error('Error al eliminar reseña:', err));
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">📋 Reseñas de Clientes</h2>

      {resenas.length === 0 ? (
        <p className="text-gray-600">No hay reseñas disponibles.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg shadow">
            <thead className="bg-indigo-100">
              <tr>
                <th className="py-3 px-4 text-left">Cliente</th>
                <th className="py-3 px-4 text-left">Mensaje</th>
                <th className="py-3 px-4 text-center">⭐ Calificación</th>
                <th className="py-3 px-4 text-center">Fecha</th>
                <th className="py-3 px-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {resenas.map((resena) => (
                <tr key={resena._id} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-4">{resena.nombreCliente}</td>
                  <td className="py-3 px-4">{resena.mensaje}</td>
                  <td className="py-3 px-4 text-center">{resena.calificacion} ⭐</td>
                  <td className="py-3 px-4 text-center">
                    {new Date(resena.fecha).toLocaleDateString('es-ES')}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => eliminarResena(resena._id)}
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

export default ResenasAdmin;
