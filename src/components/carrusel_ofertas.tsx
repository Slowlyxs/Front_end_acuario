import React, { useState, useEffect, useRef } from 'react';

const images = [
  "https://i.pinimg.com/1200x/07/a4/b0/07a4b02ab24fe541fa3ede0a1d86feb9.jpg",
  "https://i.pinimg.com/1200x/87/88/31/8788311c8a52f6175c9fee6e04ab4ff4.jpg",
  "https://i.pinimg.com/1200x/e5/0a/67/e50a67b0988d0db168b17bf17d570207.jpg",
];

export const CarruselOfertas: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const startAutoplay = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Imagen actual */}
      <div
        className="overflow-hidden rounded-lg h-60 md:h-100"
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </div>

      {/* Botones prev/next */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/60 hover:bg-white rounded-full p-2 shadow"
        aria-label="Previous Slide"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/60 hover:bg-white rounded-full p-2 shadow"
        aria-label="Next Slide"
      >
        ❯
      </button>

      {/* Indicadores */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
