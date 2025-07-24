import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pencil, Trash2, Plus } from 'lucide-react';

interface MiembroEquipo {
  id: number;
  nombre: string;
  puesto: string;
  experiencia: string;
  especialidad: string;
  descripcion: string;
  foto?: string;
}

const NuestroEquipoAdmin: React.FC = () => {
  const [equipo, setEquipo] = useState<MiembroEquipo[]>([]);
  const [editando, setEditando] = useState<number | null>(null);
  const [form, setForm] = useState<Partial<MiembroEquipo>>({});
  const [creando, setCreando] = useState(false); // para mostrar formulario creación

  useEffect(() => {
    obtenerEquipo();
  }, []);

  const obtenerEquipo = async () => {
    try {
      const res = await axios.get('https://acuario-backends.onrender.com/equipo');
      setEquipo(res.data);
    } catch (error) {
      console.error('Error al obtener equipo:', error);
    }
  };

  const eliminarMiembro = async (id: number) => {
    try {
      await axios.delete(`https://acuario-backends.onrender.com/equipo/${id}`);
      obtenerEquipo(); // Actualiza lista
    } catch (error) {
      console.error('Error al eliminar miembro:', error);
    }
  };

  const iniciarEdicion = (miembro: MiembroEquipo) => {
    setEditando(miembro.id);
    setForm({ ...miembro });
    setCreando(false);
  };

  const cancelarEdicion = () => {
    setEditando(null);
    setForm({});
    setCreando(false);
  };

  const guardarCambios = async () => {
    try {
      if (editando !== null) {
        // Editar existente
        await axios.put(`https://acuario-backends.onrender.com/equipo/${editando}`, form);
      } else if (creando) {
        // Crear nuevo
        await axios.post('https://acuario-backends.onrender.com/equipo', form);
      }
      cancelarEdicion();
      obtenerEquipo();
    } catch (error) {
      console.error('Error al guardar miembro:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Gestión de Equipo de Trabajo</h1>

      {/* Botón para crear nuevo */}
      {!creando && editando === null && (
        <div className="mb-6 text-center">
          <button
            className="btn btn-primary btn-outline flex items-center mx-auto gap-2"
            onClick={() => {
              setCreando(true);
              setForm({});
              setEditando(null);
            }}
          >
            <Plus className="w-5 h-5" /> Agregar Nuevo Miembro
          </button>
        </div>
      )}

      {/* Formulario para crear o editar */}
      {(creando || editando !== null) && (
        <div className="card bg-base-100 shadow-md p-6 mb-8 max-w-lg mx-auto">
          <input
            name="nombre"
            value={form.nombre || ''}
            onChange={handleChange}
            className="input input-bordered mb-2 w-full"
            placeholder="Nombre"
          />
          <input
            name="puesto"
            value={form.puesto || ''}
            onChange={handleChange}
            className="input input-bordered mb-2 w-full"
            placeholder="Puesto"
          />
          <input
            name="experiencia"
            value={form.experiencia || ''}
            onChange={handleChange}
            className="input input-bordered mb-2 w-full"
            placeholder="Experiencia"
          />
          <input
            name="especialidad"
            value={form.especialidad || ''}
            onChange={handleChange}
            className="input input-bordered mb-2 w-full"
            placeholder="Especialidad"
          />
          <textarea
            name="descripcion"
            value={form.descripcion || ''}
            onChange={handleChange}
            className="textarea textarea-bordered mb-2 w-full"
            placeholder="Descripción"
          />
          <input
            name="foto"
            value={form.foto || ''}
            onChange={handleChange}
            className="input input-bordered mb-4 w-full"
            placeholder="URL de la Foto"
          />

          <div className="flex gap-2 justify-end">
            <button className="btn btn-success btn-sm" onClick={guardarCambios}>
              {creando ? 'Crear' : 'Guardar'}
            </button>
            <button className="btn btn-warning btn-sm" onClick={cancelarEdicion}>
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Lista de miembros */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipo.map((miembro) => (
          <div key={miembro.id} className="card bg-base-100 shadow-md p-4">
            {editando === miembro.id ? null : (
              <>
                <img
                  src={miembro.foto || `https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${miembro.id + 2}.jpg`}
                  alt={miembro.nombre}
                  className="rounded-xl w-full h-40 object-cover mb-2"
                />
                <h2 className="font-bold text-lg">{miembro.nombre}</h2>
                <p className="text-primary">{miembro.puesto}</p>
                <p className="text-sm"><strong>Experiencia:</strong> {miembro.experiencia}</p>
                <p className="text-sm"><strong>Especialidad:</strong> {miembro.especialidad}</p>
                <p className="text-xs opacity-80 mb-3">{miembro.descripcion}</p>
                <div className="flex gap-2">
                  <button className="btn btn-sm btn-outline btn-info" onClick={() => iniciarEdicion(miembro)}>
                    <Pencil className="w-4 h-4" /> Editar
                  </button>
                  <button className="btn btn-sm btn-outline btn-error" onClick={() => eliminarMiembro(miembro.id)}>
                    <Trash2 className="w-4 h-4" /> Eliminar
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NuestroEquipoAdmin;
    