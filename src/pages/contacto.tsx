import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Definición de la interfaz para cada reseña
interface Reseña {
  id: number;
  nombreCliente: string;
  rating: number;
  comentario: string;
}

const Resenas: React.FC = () => {
  // Estados para almacenar las reseñas, formulario y manejo de errores y carga
  const [resenas, setResenas] = useState<Reseña[]>([]);
  const [nombreCliente, setNombreCliente] = useState('');
  const [rating, setRating] = useState(5);
  const [comentario, setComentario] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const API_URL = 'https://acuario-backends.onrender.com/testimonios'; // Endpoint para obtener y enviar reseñas

  // useEffect para cargar las reseñas del backend al montar el componente
  useEffect(() => {
    axios.get(API_URL)
      .then(res => setResenas(res.data)) // Guarda las reseñas recibidas
      .catch(err => {
        console.error('Error al cargar reseñas:', err);
        setError('Error cargando reseñas, intenta más tarde.');
      });
  }, []);

  // Validación básica del formulario antes de enviar
  const validarFormulario = () => {
    if (!nombreCliente.trim() || !comentario.trim()) {
      setError('Por favor completa todos los campos.');
      return false;
    }
    if (rating < 1 || rating > 5) {
      setError('El rating debe ser entre 1 y 5.');
      return false;
    }
    setError('');
    return true;
  };

  // Maneja el envío del formulario para agregar una nueva reseña
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    setLoading(true);
    try {
      const nuevo = { nombreCliente, rating, comentario };

      // POST para enviar la nueva reseña al backend
      const { data } = await axios.post(API_URL, nuevo);

      // Actualiza la lista de reseñas agregando la nueva al inicio
      setResenas(prev => [data, ...prev]);

      // Limpia el formulario y error
      setNombreCliente('');
      setRating(5);
      setComentario('');
      setError('');
    } catch (err) {
      console.error('Error enviando reseña:', err);
      setError('Error enviando reseña, intenta más tarde.');
    } finally {
      setLoading(false);
    }
  };

  // Función para renderizar estrellas amarillas según el rating (1-5)
  const renderStars = (num: number) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < num ? 'text-yellow-400' : 'text-gray-300'}>★</span>
    ));
  };

  return (
    <section className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Reseñas de Nuestros Clientes</h2>

      {/* Formulario controlado para enviar nueva reseña */}
      <form onSubmit={handleSubmit} className="mb-10 space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Nombre del Cliente</label>
          <input
            type="text"
            value={nombreCliente}
            onChange={e => setNombreCliente(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Rating</label>
          <select
            value={rating}
            onChange={e => setRating(parseInt(e.target.value))}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            {[1,2,3,4,5].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Comentario</label>
          <textarea
            value={comentario}
            onChange={e => setComentario(e.target.value)}
            rows={4}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Escribe tu reseña aquí..."
            required
          />
        </div>

        {/* Mostrar error si hay */}
        {error && <p className="text-red-600">{error}</p>}

        {/* Botón de envío con estado loading */}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Enviando...' : 'Enviar Reseña'}
        </button>
      </form>

      {/* Listado de reseñas obtenidas */}
      <div>
        {resenas.length === 0 ? (
          <p className="text-center text-gray-500">No hay reseñas todavía.</p>
        ) : (
          resenas.map(r => (
            <div key={r.id} className="border-b border-gray-300 py-4">
              <h4 className="font-semibold">{r.nombreCliente}</h4>
              <div className="text-yellow-400">{renderStars(r.rating)}</div>
              <p className="mt-2">{r.comentario}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Resenas;
