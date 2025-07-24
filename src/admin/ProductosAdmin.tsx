import React, { useEffect, useState } from "react";
import axios from "axios";

const categorias = [
  { label: "Peces ornamentales", value: "Peces ornamentales" },
  { label: "Peces exóticos", value: "Peces exoticos" },
  { label: "Plantas", value: "plantas" },
  { label: "Comida de peces", value: "Comida de peces" },
];

const API_URL = "https://acuario-backends.onrender.com/productos";

const ProductosAdmin = () => {
  const [productos, setProductos] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    categoria: "",
    stock: "",
    imagenUrl: "",
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  const fetchProductos = async () => {
    try {
      const res = await axios.get(API_URL);
      setProductos(res.data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  const resetForm = () => {
    setFormData({
      nombre: "",
      precio: "",
      descripcion: "",
      categoria: "",
      stock: "",
      imagenUrl: "",
    });
    setEditingId(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...formData,
      precio: parseFloat(formData.precio),
      stock: parseInt(formData.stock),
    };

    console.log("Payload a enviar:", payload);

    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, payload);
      } else {
        await axios.post(API_URL, payload);
      }
      resetForm();
      fetchProductos();
    } catch (error: any) {
      console.error("Error al guardar producto:", error);
      if (error.response && error.response.data) {
        console.error("Error backend:", error.response.data);
        alert("Error backend: " + JSON.stringify(error.response.data));
      } else {
        alert("Error desconocido al guardar producto.");
      }
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchProductos();
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      alert("Error al eliminar producto");
    }
  };

  const handleEdit = (prod: any) => {
    setFormData({
      nombre: prod.nombre,
      precio: prod.precio.toString(),
      descripcion: prod.descripcion,
      categoria: prod.categoria,
      stock: prod.stock.toString(),
      imagenUrl: prod.imagenUrl || "",
    });
    setEditingId(prod.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Función auxiliar para formatear precio
  const formatPrecio = (precio: any) => {
    const num = Number(precio);
    return isNaN(num) ? precio : num.toFixed(2);
  };

  return (
    <div className="p-8 ml-64">
      <h2 className="text-2xl font-bold mb-4">
        {editingId ? "Editar Producto" : "Crear Producto"}
      </h2>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mb-8 bg-white p-6 rounded shadow">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="input input-bordered"
          required
        />
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={formData.precio}
          onChange={handleChange}
          className="input input-bordered"
          required
          step="0.01"
          min="0"
        />
        <input
          type="text"
          name="descripcion"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={handleChange}
          className="input input-bordered"
          required
        />
        <select
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
          className="select select-bordered"
          required
        >
          <option value="">Selecciona categoría</option>
          {categorias.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          className="input input-bordered"
          required
          min="0"
        />
        <input
          type="text"
          name="imagenUrl"
          placeholder="URL de Imagen"
          value={formData.imagenUrl}
          onChange={handleChange}
          className="input input-bordered"
        />
        <button type="submit" className="btn btn-primary col-span-2">
          {editingId ? "Guardar Cambios" : "Crear Producto"}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={resetForm}
            className="btn btn-secondary col-span-2"
          >
            Cancelar Edición
          </button>
        )}
      </form>

      {/* Tabla de productos */}
      <div className="overflow-x-auto bg-white p-4 rounded shadow">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.length > 0 ? (
              productos.map((prod: any) => (
                <tr key={prod.id}>
                  <td>{prod.nombre}</td>
                  <td>${formatPrecio(prod.precio)}</td>
                  <td>{prod.categoria}</td>
                  <td>{prod.stock}</td>
                  <td className="flex gap-2">
                    <button
                      onClick={() => handleEdit(prod)}
                      className="btn btn-sm btn-warning text-white"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(prod.id)}
                      className="btn btn-sm btn-error text-white"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center text-gray-500">
                  No hay productos registrados
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductosAdmin;
