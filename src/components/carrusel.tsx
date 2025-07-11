import React, { useState } from "react";

const Carrusel: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    [
      "https://i.pinimg.com/736x/cd/84/88/cd848842c35771686ecf0b5ae7b21efc.jpg",
      "https://i.pinimg.com/1200x/98/74/b5/9874b51abe0b22f2d2a3e9f74cb6bd21.jpg",
      "https://i.pinimg.com/1200x/19/d2/f5/19d2f5e702f353dc055a365bf4970f81.jpg",
    ],
    [
      "https://i.pinimg.com/736x/c5/69/91/c5699167a1c63a369acaa47b91be9169.jpg",
      "https://i.pinimg.com/736x/f5/4f/aa/f54faacab3066f9e5736d1d7a4dd0dd1.jpg",
      "https://i.pinimg.com/1200x/f0/f4/f8/f0f4f8f22d58052cd22d0b20d6a530be.jpg",
    ],
    [
      "https://i.pinimg.com/736x/2a/ca/36/2aca363f25dd48481575e12300c39f0c.jpg",
      "https://i.pinimg.com/736x/cc/02/6e/cc026ee2a1b2a086913a38a6b56534cf.jpg",
      "https://i.pinimg.com/736x/07/ef/31/07ef319aa42ca6f0f3f8d13108b260d1.jpg",
    ],
    [
      "https://i.pinimg.com/736x/fb/97/23/fb97232127da6a4c1efde9f3506425f4.jpg",
      "https://i.pinimg.com/1200x/66/35/20/663520ee3b985d96c0e9bf157c4c9008.jpg",
      "https://i.pinimg.com/1200x/43/6d/52/436d521df1c472c628f3565c3e577d47.jpg",
    ],
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = (e?: React.MouseEvent) => {
    if (e && (e.target as HTMLElement).closest(".modal-content")) return;
    setSelectedImage(null);
  };

  return (
    <div className="w-full px-4 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Galería de Peces Ornamentales Dulce Vida!
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((column, colIdx) => (
            <div key={colIdx} className="grid gap-4">
              {column.map((src, idx) => (
                <div
                  key={idx}
                  className="relative group cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => openModal(src)}
                >
                  <img
                    className="h-48 w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    src={src}
                    alt={`Pez ornamental ${colIdx + 1}-${idx + 1}`}
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/300x200?text=No+disponible";
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              className="relative max-w-4xl max-h-full modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Imagen ampliada"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-opacity duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrusel;
