import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Testimonio {
  _id: string;
  nombreCliente: string;
  rating: number;
  comentario: string;
  createdAt: string; // timestamp generado por mongoose con timestamps: true
}

const ResenasAdmin: React.FC = () => {
  const [testimonios, setTestimonios] = useState<Testimonio[]>([]);

  useEffect(() => {
    axios
      .get('https://acuario-backends.onrender.com/testimonios')
      .then((res) => setTestimonios(res.data))
      .catch((err) => console.error('Error al obtener reseñas:', err));
  }, []);

  const eliminarResena = (id: string) => {
    if (confirm('¿Estás seguro de eliminar esta reseña?')) {
      axios
        .delete(`https://acuario-backends.onrender.com/testimonios/${id}`)
        .then(() => setTestimonios((prev) => prev.filter((t) => t._id !== id)))
        .catch((err) => console.error('Error al eliminar reseña:', err));
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">📋 Reseñas de Clientes</h2>

      {testimonios.length === 0 ? (
        <p className="text-gray-600">No hay reseñas disponibles.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg shadow">
            <thead className="bg-indigo-100">
              <tr>
                <th className="py-3 px-4 text-left">Cliente</th>
                <th className="py-3 px-4 text-left">Comentario</th>
                <th className="py-3 px-4 text-center">⭐ Calificación</th>
                <th className="py-3 px-4 text-center">Fecha</th>
                <th className="py-3 px-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {testimonios.map((t) => (
                <tr key={t._id} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-4">{t.nombreCliente}</td>
                  <td className="py-3 px-4">{t.comentario}</td>
                  <td className="py-3 px-4 text-center">{t.rating} ⭐</td>
                  <td className="py-3 px-4 text-center">
                    {new Date(t.createdAt).toLocaleDateString('es-ES')}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => eliminarResena(t._id)}
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
