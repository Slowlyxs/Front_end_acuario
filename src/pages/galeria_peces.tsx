import React, { useState } from 'react';

const Galeria_peces: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All categories');

  // Datos de los peces con precios y descripciones
  const peces = [
    { id: 1, name: 'Pez Ángel', price: 45.99, description: 'Hermoso pez tropical de agua dulce', category: 'Tropicales' },
  ];

  const categorias = ['Todos nuestros productos', 'Peces Ornamentales', 'Peces exóticos', 'Peceras', 'Plantas de Agua Dulce'];

  const handleBuyClick = (pez: any) => {
    alert(`¡Agregaste ${pez.name} al carrito por $${pez.price}!`);
  };

  const filteredPeces = selectedCategory === 'All categories' 
    ? peces 
    : peces.filter(pez => pez.category === selectedCategory);

  return (
    <div className="p-4">
      {/* Botones de categorías */}
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {categorias.map((categoria) => (
          <button 
            key={categoria}
            type="button" 
            onClick={() => setSelectedCategory(categoria)}
            className={`${
              selectedCategory === categoria 
                ? 'text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300'
                : 'text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 dark:text-white dark:focus:ring-gray-800'
            } rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 transition-colors`}
          >
            {categoria}
          </button>
        ))}
      </div>

      {/* Galería de peces */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPeces.map((pez) => (
          <div key={pez.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                className="w-full h-48 object-cover"
                src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image${pez.id === 1 ? '' : `-${pez.id}`}.jpg`}
                alt={pez.name}
              />
              <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">
                ${pez.price}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800 mb-2">{pez.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{pez.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                  {pez.category}
                </span>
                <button 
                  onClick={() => handleBuyClick(pez)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mensaje si no hay peces en la categoría */}
      {filteredPeces.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No hay peces disponibles en esta categoría.</p>
        </div>
      )}
    </div>
  );
};

export default Galeria_peces;