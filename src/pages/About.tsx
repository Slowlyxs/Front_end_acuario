import React from 'react';

const About: React.FC = () => {
  const estadisticas = [
    { numero: '15+', texto: 'Años de experiencia', icono: '🏆' },
    { numero: '500+', texto: 'Especies disponibles', icono: '🐠' },
    { numero: '10k+', texto: 'Clientes satisfechos', icono: '😊' },
    { numero: '24/7', texto: 'Soporte técnico', icono: '🛠️' }
  ];

  const equipo = [
    {
      id: 1,
      nombre: 'Carlos Mendoza',
      puesto: 'Fundador & Acuarista Experto',
      experiencia: '20 años',
      especialidad: 'Peces tropicales y marinos',
      descripcion: 'Biólogo marino con pasión por la acuariofilia desde la infancia.'
    },
    {
      id: 2,
      nombre: 'María González',
      puesto: 'Especialista en Agua Dulce',
      experiencia: '12 años',
      especialidad: 'Peces de agua dulce y plantas',
      descripcion: 'Experta en ecosistemas de agua dulce y cuidado de plantas acuáticas.'
    },
    {
      id: 3,
      nombre: 'Roberto Silva',
      puesto: 'Técnico en Sistemas',
      experiencia: '8 años',
      especialidad: 'Equipos y filtración',
      descripcion: 'Especialista en sistemas de filtración y equipos de acuarios.'
    },
    {
      id: 4,
      nombre: 'Ana Herrera',
      puesto: 'Consultora de Cuidados',
      experiencia: '10 años',
      especialidad: 'Salud y nutrición',
      descripcion: 'Veterinaria especializada en peces ornamentales y su nutrición.'
    }
  ];

  const valores = [
    {
      icono: '🌊',
      titulo: 'Calidad Superior',
      descripcion: 'Seleccionamos solo los mejores peces de criadores certificados y proveedores confiables.'
    },
    {
      icono: '🔬',
      titulo: 'Conocimiento Experto',
      descripcion: 'Nuestro equipo cuenta con décadas de experiencia en acuariofilia y biología marina.'
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

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Somos una empresa familiar dedicada a la acuariofilia con más de 15 años de experiencia, 
            comprometida con brindar los mejores peces y el conocimiento necesario para crear ecosistemas acuáticos perfectos.
          </p>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {estadisticas.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{stat.icono}</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.numero}</div>
                <div className="text-gray-600">{stat.texto}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Todo comenzó en 2010 cuando Carlos Mendoza, un apasionado biólogo marino, decidió 
                  convertir su hobby en una misión: hacer que la acuariofilia sea accesible para todos.
                </p>
                <p>
                  Lo que inició como una pequeña tienda local ha crecido hasta convertirse en una 
                  referencia nacional en el mundo de los peces ornamentales, manteniendo siempre 
                  nuestros valores de calidad y servicio personalizado.
                </p>
                <p>
                  Hoy contamos con instalaciones modernas, un equipo de expertos y la confianza 
                  de miles de acuaristas que han encontrado en nosotros el socio perfecto para 
                  sus proyectos acuáticos.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                alt="Nuestras instalaciones"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{valor.icono}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{valor.titulo}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{valor.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Conoce a Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipo.map((miembro) => (
              <div key={miembro.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${miembro.id + 2}.jpg`}
                  alt={miembro.nombre}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{miembro.nombre}</h3>
                  <p className="text-blue-600 font-medium mb-2">{miembro.puesto}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><span className="font-medium">Experiencia:</span> {miembro.experiencia}</p>
                    <p><span className="font-medium">Especialidad:</span> {miembro.especialidad}</p>
                    <p className="text-xs leading-relaxed">{miembro.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestra Misión */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Nuestra Misión</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl leading-relaxed mb-8">
              Crear y mantener ecosistemas acuáticos saludables, brindando a nuestros clientes 
              no solo los mejores peces, sino también el conocimiento y soporte necesario para 
              que cada acuario sea una ventana al fascinante mundo submarino.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Excelencia</h3>
                <p className="text-sm opacity-90">En cada pez, cada consejo, cada servicio</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-2">Sostenibilidad</h3>
                <p className="text-sm opacity-90">Cuidando el medio ambiente acuático</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">❤️</div>
                <h3 className="text-xl font-semibold mb-2">Pasión</h3>
                <p className="text-sm opacity-90">Por los peces y nuestros clientes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Listo para comenzar tu aventura acuática?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Nuestro equipo está aquí para ayudarte a crear el acuario de tus sueños
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Contactar Expertos
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-colors">
              Ver Nuestros Peces
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;