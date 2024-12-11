import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section
      id="about-us"
      style={{
        padding: "50px 15px",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
      }}
    >
      <div className="container">
        <h2>¿Quiénes somos?</h2>
        <p style={{ maxWidth: "800px", margin: "20px auto", fontSize: "18px" }}>
          Somos una aplicación diseñada para ayudarte a encontrar y reservar
          parqueaderos en cualquier lugar del mundo. Nuestra misión es hacer que
          estacionar sea más fácil, rápido y sin complicaciones, ya sea en tu
          ciudad o cuando estés de viaje. Ofrecemos una solución eficiente que te
          permite ahorrar tiempo y garantizar tu lugar con solo unos clics.
        </p>
        <p style={{ maxWidth: "800px", margin: "20px auto", fontSize: "18px" }}>
          Únete a miles de usuarios que ya están disfrutando de una experiencia
          de estacionamiento sin estrés. ¡Descubre la manera más inteligente de
          encontrar un lugar para estacionar!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
