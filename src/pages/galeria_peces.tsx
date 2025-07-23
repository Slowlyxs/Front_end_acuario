import React, { useState, useEffect } from 'react';
import axios from 'axios';

const categorias = [
  'Todos nuestros productos',
  'Peces ornamentales',
  'Peces exoticos',
  'plantas',
  'Comida de peces',
];

const Galeria_peces: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos nuestros productos');
  const [peces, setPeces] = useState<any[]>([]);

  useEffect(() => {
    axios.get('https://acuario-backends.onrender.com/productos')
      .then(res => {
        const mapped = res.data.map((p: any) => ({
          id: p.id,
          name: p.nombre,
          price: p.precio !== undefined && p.precio !== null ? Number(p.precio) : 0,
          description: p.descripcion,
          category: p.categoria,
          stock: p.stock,
          image: p.imagenUrl,
        }));
        setPeces(mapped);
      })
      .catch(err => console.error('Error cargando productos:', err));
  }, []);

  const filteredPeces = selectedCategory === 'Todos nuestros productos'
    ? peces
    : peces.filter(pez => pez.category === selectedCategory);

  const handleBuyClick = (pez: any) => {
    alert(`¡Agregaste ${pez.name} al carrito por $${pez.price.toFixed(2)}!`);
  };

  return (
    <div className="p-4">
      {/* Barra de categorías */}
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap gap-3">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            type="button"
            onClick={() => setSelectedCategory(categoria)}
            className={`${
              selectedCategory === categoria
                ? 'text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:hover:bg-blue-600'
                : 'text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600'
            } rounded-full text-base font-medium px-5 py-2.5 text-center transition-colors`}
          >
            {categoria}
          </button>
        ))}
      </div>

      {/* Galería de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPeces.length > 0 ? (
          filteredPeces.map((pez) => (
            <div
              key={pez.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src={
                    pez.image ||
                    `https://flowbite.s3.amazonaws.com/docs/gallery/square/image${pez.id === 1 ? '' : `-${pez.id}`}.jpg`
                  }
                  alt={pez.name}
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">
                  ${typeof pez.price === 'number' ? pez.price.toFixed(2) : '0.00'}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">{pez.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{pez.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded">
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
          ))
        ) : (
          <div className="text-center py-8 col-span-full">
            <p className="text-gray-500 dark:text-gray-400 text-lg">No hay productos disponibles en esta categoría.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Galeria_peces;
