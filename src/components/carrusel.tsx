import React, { useState } from "react";

const Carrusel: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        [
            "https://i.pinimg.com/736x/cd/84/88/cd848842c35771686ecf0b5ae7b21efc.jpg",
            "https://i.pinimg.com/1200x/98/74/b5/9874b51abe0b22f2d2a3e9f74cb6bd21.jpg",
            "https://i.pinimg.com/1200x/19/d2/f5/19d2f5e702f353dc055a365bf4970f81.jpg"
        ],
        [
            "https://i.pinimg.com/736x/c5/69/91/c5699167a1c63a369acaa47b91be9169.jpg",
            "https://i.pinimg.com/736x/f5/4f/aa/f54faacab3066f9e5736d1d7a4dd0dd1.jpg",
            "https://i.pinimg.com/1200x/f0/f4/f8/f0f4f8f22d58052cd22d0b20d6a530be.jpg"
        ],
        [
            "https://i.pinimg.com/736x/2a/ca/36/2aca363f25dd48481575e12300c39f0c.jpg",
            "https://i.pinimg.com/736x/cc/02/6e/cc026ee2a1b2a086913a38a6b56534cf.jpg",
            "https://i.pinimg.com/736x/07/ef/31/07ef319aa42ca6f0f3f8d13108b260d1.jpg"
        ],
        [
            "https://i.pinimg.com/736x/fb/97/23/fb97232127da6a4c1efde9f3506425f4.jpg",
            "https://i.pinimg.com/1200x/66/35/20/663520ee3b985d96c0e9bf157c4c9008.jpg",
            "https://i.pinimg.com/1200x/43/6d/52/436d521df1c472c628f3565c3e577d47.jpg"
        ]
    ];

    const openModal = (imageSrc: string) => {
        setSelectedImage(imageSrc);
    };

    const closeModal = (e?: React.MouseEvent) => {
        // Evita cerrar el modal si se hace click sobre la imagen o el botón de cerrar
        if (e && (e.target as HTMLElement).closest('.modal-content')) return;
        setSelectedImage(null);
    };

    return (
        <div className="w-full px-4 py-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Galería de Peces Ornamentales
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((column, columnIndex) => (
                        <div key={columnIndex} className="grid gap-4">
                            {column.map((imageSrc, imageIndex) => (
                                <div
                                    key={imageIndex}
                                    className="relative group cursor-pointer overflow-hidden rounded-lg"
                                    onClick={() => openModal(imageSrc)}
                                >
                                    <img
                                        className="h-48 w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                                        src={imageSrc}
                                        alt={`Pez ornamental ${columnIndex + 1}-${imageIndex + 1}`}
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                                        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Modal para imagen ampliada */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
                        onClick={closeModal}
                    >
                        <div className="relative max-w-4xl max-h-full modal-content" onClick={e => e.stopPropagation()}>
                            <img
                                src={selectedImage}
                                alt="Imagen ampliada"
                                className="max-w-full max-h-full object-contain rounded-lg"
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-opacity duration-200"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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