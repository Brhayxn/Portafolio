import { useState, useEffect } from 'react';

export default function ImageGalleryModal({ images, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Resetear al índice 0 cuando se abra el modal
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  // Manejar navegación con teclado
  useEffect(() => {
    if (!isOpen || !images || images.length === 0) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images, onClose]);

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen || !images || images.length === 0) return null;

  return (
    <div className="image-gallery-modal-overlay" onClick={onClose}>
      <div className="image-gallery-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="image-gallery-close-btn" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>
        
        <div className="image-gallery-container">
          <button
            className="image-gallery-nav-btn image-gallery-prev"
            onClick={handlePrevious}
            aria-label="Imagen anterior"
          >
            ‹
          </button>

          <div className="image-gallery-image-wrapper">
            <img
              src={images[currentIndex]}
              alt={`Imagen ${currentIndex + 1} de ${images.length}`}
              className="image-gallery-image"
            />
          </div>

          <button
            className="image-gallery-nav-btn image-gallery-next"
            onClick={handleNext}
            aria-label="Imagen siguiente"
          >
            ›
          </button>
        </div>

        <div className="image-gallery-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}

