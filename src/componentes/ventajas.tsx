import React from "react";

const Advantages: React.FC = () => {
  const advantages = [
    {
      title: "Reserva en segundos",
      description: "Encuentra y reserva un parqueadero en tiempo real, sin complicaciones.",
      icon: "⏱️",
    },
    {
      title: "Ahorra tiempo",
      description: "Olvídate de buscar un lugar para estacionar durante horas. Garantiza tu lugar antes de llegar.",
      icon: "🚗",
    },
    {
      title: "Cobertura mundial",
      description: "Encuentra parqueaderos en cualquier lugar del mundo con nuestra amplia red.",
      icon: "🌍",
    },
    {
      title: "Seguridad garantizada",
      description: "Todos los parqueaderos están verificados para ofrecer la máxima seguridad.",
      icon: "🔒",
    },
  ];

  return (
    <section
      id="advantages"
      style={{
        backgroundColor: "#f0f8ff", // Azul pastel claro
        padding: "50px 15px",
      }}
    >
      <div className="container">
        <h2 className="text-center mb-5">Ventajas de nuestra plataforma</h2>
        <div className="row">
          {advantages.map((advantage, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="card h-100 text-center">
                <div
                  className="card-body"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "50px",
                      marginBottom: "20px",
                    }}
                  >
                    {advantage.icon}
                  </div>
                  <h5 className="card-title">{advantage.title}</h5>
                  <p className="card-text">{advantage.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
