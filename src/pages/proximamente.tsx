import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Pez {
  _id: string;
  nombre: string;
  descripcion: string;
  fechaLlegada: string;
  imagen: string;
  categoria: string;
}

const ProximamentePorLlegar: React.FC = () => {
  const [pecesProximos, setPecesProximos] = useState<Pez[]>([]);

  useEffect(() => {
    axios.get('https://acuario-backends.onrender.com/proximos-productos')
      .then(res => setPecesProximos(res.data))
      .catch(err => console.error('Error al obtener productos:', err));
  }, []);

  const formatearFecha = (fecha: string) => {
    const date = new Date(fecha);
    return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const getDiasRestantes = (fecha: string) => {
    const hoy = new Date();
    const llegada = new Date(fecha);
    return Math.ceil((llegada.getTime() - hoy.getTime()) / (1000 * 3600 * 24));
  };

  const getRarezaColor = (categoria: string) => {
    switch (categoria) {
      case 'Limitado': return 'bg-green-100 text-green-800';
      case 'Raro': return 'bg-yellow-100 text-yellow-800';
      case 'Muy Raro': return 'bg-orange-100 text-orange-800';
      case 'Extremadamente Raro': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleNotificarme = (pez: Pez) => {
    const mensaje = `¡Hola! Estoy interesado en el producto "${pez.nombre}" que llegará el ${formatearFecha(pez.fechaLlegada)}. ¿Me puedes notificar cuando esté disponible?`;
    const telefono = '593969796517'; // Reemplaza por tu número en formato internacional (sin +)
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="py-8 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">🐠 Próximamente por Llegar</h2>
          <p className="text-xl text-gray-600">Reserva tu lugar en la lista de espera</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pecesProximos.map((pez) => (
            <div key={pez._id} className="bg-white rounded-xl shadow-lg hover:scale-105 transition-all">
              <div className="relative">
                <img className="w-full h-56 object-cover" src={pez.imagen || 'https://via.placeholder.com/300'} alt={pez.nombre} />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="bg-blue-600 px-3 py-1 rounded-full text-sm mb-2">PRÓXIMAMENTE</div>
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getRarezaColor(pez.categoria)}`}>
                    {pez.categoria}
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1">
                  <span className="text-xs font-bold text-gray-800">
                    {getDiasRestantes(pez.fechaLlegada)} días
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pez.nombre}</h3>
                <p className="text-gray-600 mb-3">{pez.descripcion}</p>
                <div className="mb-4 text-sm text-gray-700">
                  <strong>Fecha estimada:</strong> {formatearFecha(pez.fechaLlegada)}
                </div>
                <button
                  onClick={() => handleNotificarme(pez)}
                  className="w-full bg-gradient-to-r from-green-600 to-lime-600 text-white py-2 px-4 rounded-lg hover:opacity-90 transition"
                >
                  🔔 Notificarme cuando llegue (WhatsApp)
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProximamentePorLlegar;
