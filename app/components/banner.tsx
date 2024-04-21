import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const CategoriaDestacada: React.FC = ({}) => {
  const carouselImages = [
    '/imagenes/pc-banner-0.jpg',
    '/imagenes/pc-banner-1.jpg',
    '/imagenes/banner-teclado.jpg',
    '/imagenes/banner-audifonos.jpg',
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = activeIndex === 0;
    const newIndex = isFirstSlide ? carouselImages.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = activeIndex === carouselImages.length - 1;
    const newIndex = isLastSlide ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  // Automatic carousel change
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pb-4">
      <h3
        className="pb-2 text-center"
        style={{ color: 'white', fontSize: '3rem' }}
      >
        <span className="fancy">Productos</span> Destacados
      </h3>
      <div className="d-flex justify-content-center py-4">
        <div className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {carouselImages.map((src, index) => (
              <div
                key={src}
                className={`carousel-item ${
                  index === activeIndex ? 'active' : ''
                }`}
              >
                <Image
                  src={src}
                  alt={`Slide ${index}`}
                  layout="responsive"
                  width={900}
                  height={500}
                  className="banner-image"
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={goToPrevious}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={goToNext}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriaDestacada;
