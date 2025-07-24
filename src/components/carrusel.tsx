import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";


const images = [
  "https://i.pinimg.com/736x/cd/84/88/cd848842c35771686ecf0b5ae7b21efc.jpg",
  "https://i.pinimg.com/1200x/98/74/b5/9874b51abe0b22f2d2a3e9f74cb6bd21.jpg",
  "https://i.pinimg.com/1200x/19/d2/f5/19d2f5e702f353dc055a365bf4970f81.jpg",
  "https://i.pinimg.com/736x/c5/69/91/c5699167a1c63a369acaa47b91be9169.jpg",
  "https://i.pinimg.com/736x/f5/4f/aa/f54faacab3066f9e5736d1d7a4dd0dd1.jpg",
  "https://i.pinimg.com/1200x/f0/f4/f8/f0f4f8f22d58052cd22d0b20d6a530be.jpg",
  "https://i.pinimg.com/736x/2a/ca/36/2aca363f25dd48481575e12300c39f0c.jpg",
  "https://i.pinimg.com/736x/cc/02/6e/cc026ee2a1b2a086913a38a6b56534cf.jpg",
  "https://i.pinimg.com/736x/07/ef/31/07ef319aa42ca6f0f3f8d13108b260d1.jpg",
  "https://i.pinimg.com/736x/fb/97/23/fb97232127da6a4c1efde9f3506425f4.jpg",
  "https://i.pinimg.com/1200x/66/35/20/663520ee3b985d96c0e9bf157c4c9008.jpg",
  "https://i.pinimg.com/1200x/43/6d/52/436d521df1c472c628f3565c3e577d47.jpg",
];

const Carrusel: React.FC = () => {
  return (
    <div className="w-full py-10 overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        Galería de Peces Ornamentales disponibles
      </h2>
      <Swiper
        modules={[Autoplay, FreeMode]}
        loop={true}
        freeMode={true}
        grabCursor={true}
        speed={10000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        slidesPerView="auto"
        spaceBetween={30}
        className="w-full"
      >
        {images.map((img, i) => (
          <SwiperSlide
            key={i}
            className="!w-40 !h-40 flex justify-center items-center"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-indigo-200 shadow-md hover:scale-105 transition-transform duration-300">
              <img
                src={img}
                alt={`img-${i}`}
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrusel;
