import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About: React.FC = () => {
  // Estadísticas clave de la empresa, con íconos y texto explicativo
  const estadisticas = [
    { numero: '5+', texto: 'Años de experiencia', icono: '🏆' },
    { numero: '100+', texto: 'Especies disponibles', icono: '🐠' },
    { numero: '3k+', texto: 'Clientes satisfechos', icono: '😊' },
    { numero: '24/7', texto: 'Soporte técnico', icono: '🛠️' }
  ];

  // Estado local para almacenar el equipo de trabajo cargado desde el backend
  const [equipo, setEquipo] = useState<any[]>([]);

  // Valores y principios de la empresa para mostrar en cards
  const valores = [
    {
      icono: '🌊',
      titulo: 'Calidad Superior',
      descripcion: 'Seleccionamos solo los mejores peces de criadores certificados y proveedores confiables.'
    },
    {
      icono: '🔬',
      titulo: 'Conocimiento Experto',
      descripcion: 'Nuestro equipo cuenta con décadas de experiencia en acuariofilia y próximamente biología marina.'
    },
    {
      icono: '💚',
      titulo: 'Compromiso Ambiental',
      descripcion: 'Promovemos prácticas sostenibles y el cuidado responsable de ecosistemas acuáticos.'
    },
    {
      icono: '🤝',
      titulo: 'Servicio Personalizado',
      descripcion: 'Ofrecemos asesoría personalizada para cada cliente según sus necesidades específicas.'
    }
  ];

  // Hook useEffect para cargar datos del equipo desde un endpoint backend al montar el componente
  useEffect(() => {
    axios.get('https://acuario-backends.onrender.com/equipo')
      .then(res => setEquipo(res.data)) // Guarda el equipo recibido en estado local
      .catch(err => console.error('Error cargando equipo:', err)); // Manejo básico de errores
  }, []);

  return (
    <div className="bg-base-100 text-base-content">
      {/* Sección hero con fondo degradado azul y texto centrado blanco */}
      <section className="hero min-h-[60vh]  bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="hero-content text-center flex-col">
          <h1 className="text-5xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-xl max-w-3xl leading-relaxed">
            Somos una empresa que se dedica y tiene el enfoque en dar la mejor calidad de vida a nuestras mascotas acuáticas, brindando un servicio de calidad y asesoría personalizada para que cada cliente pueda disfrutar de la belleza y tranquilidad que solo un acuario puede ofrecer.
          </p>
        </div>
      </section>

      {/* Sección de estadísticas con DaisyUI - muestra íconos, títulos y números clave */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {estadisticas.map((stat, index) => (
            <div key={index} className="stat place-items-center">
              <div className="stat-figure text-4xl">{stat.icono}</div>
              <div className="stat-title">{stat.texto}</div>
              <div className="stat-value text-primary">{stat.numero}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección "Nuestra Historia" con texto explicativo y una imagen representativa */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Nuestra Historia</h2>
            <div className="space-y-4 leading-relaxed opacity-80">
              {/* Varios párrafos explicando los orígenes y evolución de la empresa */}
              <p>Todo comenzó en 2017 cuando Carlos Mendoza, un apasionado biólogo marino, decidió convertir su hobby en una misión: hacer que la acuariofilia sea accesible para todos.</p>
              <p>Lo que inició como una pequeña tienda local ha crecido hasta convertirse en una referencia nacional en el mundo de los peces ornamentales</p>
              <p>Con el tiempo, hemos ampliado nuestro catálogo, incorporando especies exóticas y ofreciendo</p>
              <p>asesoría especializada para ayudar a nuestros clientes a crear y mantener acuarios saludables y hermosos.</p>
              <p>Hoy contamos con instalaciones smodernas, un equipo de expertos y la confianza de miles de acuaristas.</p>
            </div>
          </div>
          <img
            src="/imagenes/Instalaciones.jpeg"
            className="w-full object-cover rounded-2xl shadow-lg"
            alt="Instalaciones"
          />
        </div>
      </section>

      {/* Sección de valores de la empresa, mostrados en cards con íconos */}
      <section className="py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <div key={index} className="card bg-base-100 shadow-md">
                <div className="card-body text-center">
                  <div className="text-4xl mb-2">{valor.icono}</div>
                  <h3 className="card-title justify-center">{valor.titulo}</h3>
                  <p className="text-sm">{valor.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección del equipo - muestra una card por cada miembro con foto y descripción */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Conoce a Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipo.length > 0 ? (
              equipo.map((miembro) => (
                <div key={miembro.id} className="card bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={miembro.foto || `https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${miembro.id + 2}.jpg`}
                      alt={miembro.nombre}
                      className="w-full h-48 object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title">{miembro.nombre}</h3>
                    <p className="text-primary">{miembro.puesto}</p>
                    <p className="text-sm"><strong>Experiencia:</strong> {miembro.experiencia}</p>
                    <p className="text-sm"><strong>Especialidad:</strong> {miembro.especialidad}</p>
                    <p className="text-xs opacity-80">{miembro.descripcion}</p>
                  </div>
                </div>
              ))
            ) : (
              // Mensaje de carga mientras se obtiene el equipo
              <p className="text-center text-gray-500">Cargando equipo...</p>
            )}
          </div>
        </div>
      </section>

      {/* Sección de misión con fondo degradado azul y tres valores resumidos con iconos */}
      <section className="hero bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="hero-content text-center flex-col max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Nuestra Misión</h2>
          <p className="text-xl leading-relaxed mb-8">
            Crear y mantener ecosistemas acuáticos saludables, brindando a nuestros clientes no solo los mejores peces, sino también el conocimiento brindado por nuestra amplia experiencia y soporte necesario.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="text-xl font-semibold mb-1">Excelencia</h3>
              <p className="text-sm opacity-90">En cada pez, consejo y servicio</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🌱</div>
              <h3 className="text-xl font-semibold mb-1">Sostenibilidad</h3>
              <p className="text-sm opacity-90">Cuidando el medio ambiente acuático</p>
            </div>
            <div>
              <div className="text-3xl mb-2">❤️</div>
              <h3 className="text-xl font-semibold mb-1">Pasión</h3>
              <p className="text-sm opacity-90">Por los peces y nuestros clientes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
