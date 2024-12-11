import React, { useState } from "react";

const GestionParqueadero: React.FC = () => {
  const [tipoParqueadero, setTipoParqueadero] = useState("");
  const [vehiculos, setVehiculos] = useState("");
  const [cantidadParqueaderos, setCantidadParqueaderos] = useState(0);
  const [parqueaderos, setParqueaderos] = useState<boolean[]>([]);

  // Función para manejar el cambio en el campo de cantidad de parqueaderos
  const handleCantidadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cantidad = parseInt(event.target.value, 10);
    setCantidadParqueaderos(cantidad);

    // Generar una lista de parqueaderos (todos inicialmente libres)
    setParqueaderos(new Array(cantidad).fill(false));
  };

  // Función para manejar el cambio de estado de un parqueadero (marcar como ocupado o libre)
  const toggleParqueadero = (index: number) => {
    const updatedParqueaderos = [...parqueaderos];
    updatedParqueaderos[index] = !updatedParqueaderos[index]; // Cambiar estado
    setParqueaderos(updatedParqueaderos);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aquí podrías enviar los datos al backend o realizar alguna acción
    alert("Parqueadero gestionado exitosamente.");
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Gestión de Parqueaderos</h2>
      <form onSubmit={handleSubmit}>
        {/* Tipo de parqueadero */}
        <div className="mb-3">
          <label htmlFor="tipoParqueadero" className="form-label">
            Tipo de Parqueadero
          </label>
          <input
            type="text"
            className="form-control"
            id="tipoParqueadero"
            placeholder="Tipo de parqueadero"
            value={tipoParqueadero}
            onChange={(e) => setTipoParqueadero(e.target.value)}
          />
        </div>

        {/* Vehículos que ingresan */}
        <div className="mb-3">
          <label htmlFor="vehiculos" className="form-label">
            Vehículos que ingresan
          </label>
          <input
            type="text"
            className="form-control"
            id="vehiculos"
            placeholder="Ejemplo: Auto, Moto"
            value={vehiculos}
            onChange={(e) => setVehiculos(e.target.value)}
          />
        </div>

        {/* Cantidad de parqueaderos */}
        <div className="mb-3">
          <label htmlFor="cantidadParqueaderos" className="form-label">
            Cantidad de Parqueaderos
          </label>
          <input
            type="number"
            className="form-control"
            id="cantidadParqueaderos"
            placeholder="Cantidad de parqueaderos"
            value={cantidadParqueaderos}
            onChange={handleCantidadChange}
          />
        </div>

        {/* Otras referencias */}
        <div className="mb-3">
          <label htmlFor="referencia" className="form-label">
            Otra referencia sobre el parqueadero
          </label>
          <textarea
            className="form-control"
            id="referencia"
            rows={3}
          ></textarea>
        </div>

        {/* Mostrar casillas de parqueaderos */}
        <div className="mb-3">
          <h4>Parqueaderos:</h4>
          <div className="d-flex flex-wrap">
            {parqueaderos.map((ocupado, index) => (
              <div
                key={index}
                onClick={() => toggleParqueadero(index)}
                style={{
                  width: "60px",
                  height: "60px",
                  margin: "5px",
                  backgroundColor: ocupado ? "red" : "green",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default GestionParqueadero;
