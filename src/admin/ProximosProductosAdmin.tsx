import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Producto {
  _id?: string;
  nombre: string;
  descripcion: string;
  fechaLlegada: string;
  imagen: string;
  categoria: string;
}

const categorias = [
  'Peces ornamentales',
  'Peces exoticos',
  'plantas',
  'Comida de peces',
];

const apiURL = 'https://acuario-backends.onrender.com/proximos-productos';

const ProximosProductosAdmin: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);

  // Formulario: control para crear o editar
  const [formData, setFormData] = useState<Producto>({
    nombre: '',
    descripcion: '',
    fechaLlegada: '',
    imagen: '',
    categoria: categorias[0],
  });

  // Estado para controlar si estamos editando (id) o creando (null)
  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = () => {
    setLoading(true);
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
  };

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
      year: 'numeric',
    });
  };

  // Cambios en inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Enviar formulario para crear o editar
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editId) {
      // Editar
      axios
        .put(`${apiURL}/${editId}`, formData)
        .then(() => {
          fetchProductos();
          resetForm();
        })
        .catch((err) => {
          console.error('Error al editar producto:', err);
        });
    } else {
      // Crear
      axios
        .post(apiURL, formData)
        .then(() => {
          fetchProductos();
          resetForm();
        })
        .catch((err) => {
          console.error('Error al crear producto:', err);
        });
    }
  };

  // Cargar datos en el formulario para editar
  const cargarParaEditar = (producto: Producto) => {
    setEditId(producto._id || null);
    setFormData({
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      fechaLlegada: producto.fechaLlegada,
      imagen: producto.imagen,
      categoria: producto.categoria,
    });
  };

  const resetForm = () => {
    setEditId(null);
    setFormData({
      nombre: '',
      descripcion: '',
      fechaLlegada: '',
      imagen: '',
      categoria: categorias[0],
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">📦 Próximos Productos</h2>

      {/* Formulario Crear / Editar */}
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded shadow-md max-w-xl">
        <h3 className="text-xl font-semibold mb-4">{editId ? 'Editar Producto' : 'Crear Producto'}</h3>

        <label className="block mb-2">
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="input input-bordered w-full mt-1"
          />
        </label>

        <label className="block mb-2">
          Descripción:
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            required
            className="textarea textarea-bordered w-full mt-1"
          />
        </label>

        <label className="block mb-2">
          Fecha Llegada:
          <input
            type="date"
            name="fechaLlegada"
            value={formData.fechaLlegada.slice(0,10)} // para que solo tome yyyy-mm-dd
            onChange={handleChange}
            required
            className="input input-bordered w-full mt-1"
          />
        </label>

        <label className="block mb-2">
          Imagen URL:
          <input
            type="text"
            name="imagen"
            value={formData.imagen}
            onChange={handleChange}
            placeholder="https://..."
            className="input input-bordered w-full mt-1"
          />
        </label>

        <label className="block mb-4">
          Categoría:
          <select
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            className="select select-bordered w-full mt-1"
            required
          >
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>

        <div className="flex gap-4">
          <button type="submit" className="btn btn-primary">
            {editId ? 'Actualizar' : 'Crear'}
          </button>
          {editId && (
            <button
              type="button"
              onClick={resetForm}
              className="btn btn-secondary"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      {/* Tabla de productos */}
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
                  <td className="py-3 px-4 text-center space-x-2">
                    <button
                      onClick={() => cargarParaEditar(producto)}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => eliminarProducto(producto._id!)}
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
