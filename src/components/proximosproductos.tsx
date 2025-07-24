import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Calificacion from './calificacion';

interface ProximoProducto {
  _id: string;
  nombre: string;
  descripcion?: string;
  imagen?: string;
  categoria?: string;
  fechaLlegada?: string;
}

export const ProximosProductos: React.FC = () => {
  const [productos, setProductos] = useState<ProximoProducto[]>([]);

  useEffect(() => {
    axios
      .get('https://acuario-backends.onrender.com/proximos-productos')
      .then(res => setProductos(res.data))
      .catch(err => console.error('Error al obtener los productos:', err));
  }, []);

  const destacados = productos.slice(0, 1); // 1 destacado
  const izquierda = productos.slice(1, 3);   // 2 izquierda
  const derecha = productos.slice(3, 5);     // 2 derecha

  return (
    <div className="container mx-auto px-6 py-12 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Próximos productos</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* Columna Izquierda */}
        <div className="space-y-6">
          {izquierda.map(p => (
            <CardProducto key={p._id} producto={p} />
          ))}
        </div>

        {/* Producto Destacado */}
        <div className="lg:col-span-2">
          {destacados.map(p => (
            <CardDestacado key={p._id} producto={p} />
          ))}
        </div>

        {/* Columna Derecha */}
        <div className="space-y-6">
          {derecha.map(p => (
            <CardProducto key={p._id} producto={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CardProducto = ({ producto }: { producto: ProximoProducto }) => (
  <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <figure>
      <img
        src={producto.imagen || 'https://via.placeholder.com/400x200?text=Sin+Imagen'}
        alt={producto.nombre}
        className="w-full h-48 object-cover"
      />
    </figure>
    <div className="card-body p-4">
      <h2 className="card-title text-lg">{producto.nombre}</h2>
      <div className="mb-2">
        <Calificacion rating={4} /> {/* Valor fijo o puedes agregarlo en el schema */}
      </div>
      <p className="text-gray-600 text-sm mb-4">{producto.descripcion}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary btn-sm">Ver Detalles</button>
      </div>
    </div>
  </div>
);

const CardDestacado = ({ producto }: { producto: ProximoProducto }) => (
  <div className="card bg-base-100 shadow-xl h-full">
    <div className="card-body p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="badge badge-warning">Producto destacado</span>
        <div className="flex space-x-2">
          <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">♥</span>
          </div>
          <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">★</span>
          </div>
          <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">🛒</span>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-4">{producto.nombre}</h2>
      <div className="mb-4">
        <Calificacion rating={5} />
      </div>

      <figure className="bg-gray-100 rounded-2xl p-6 mb-6">
        <img
          src={producto.imagen || 'https://via.placeholder.com/600x300?text=Sin+Imagen'}
          alt={producto.nombre}
          className="w-full h-64 object-cover rounded-lg"
        />
      </figure>

      <p className="text-gray-600 mb-6 text-lg">{producto.descripcion}</p>

      <div className="card-actions justify-center">
        <button className="btn btn-primary btn-lg w-full">Ver colección destacada</button>
      </div>
    </div>
  </div>
);
