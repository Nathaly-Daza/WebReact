import React from "react";

const Carousel: React.FC = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Primera imagen */}
        <div className="carousel-item active">
          <img
            src="https://via.placeholder.com/1200x400.png?text=Imagen+1"
            className="d-block w-100"
            alt="Primera imagen"
          />
        </div>
        {/* Segunda imagen */}
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/1200x400.png?text=Imagen+2"
            className="d-block w-100"
            alt="Segunda imagen"
          />
        </div>
        {/* Tercera imagen */}
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/1200x400.png?text=Imagen+3"
            className="d-block w-100"
            alt="Tercera imagen"
          />
        </div>
      </div>
      {/* Botones de control */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};

export default Carousel;
