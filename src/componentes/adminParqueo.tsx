import React from "react";
import { useNavigate } from "react-router-dom";

const AdminParqueadero: React.FC = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/GestionParqueadero"); // Redirige a la página de gestión de parqueadero
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h2>¿Eres un administrador de parqueaderos?</h2>
          <p>
            Administra y gestiona el parqueadero de manera eficiente. En esta
            sección, podrás visualizar, agregar o editar los espacios de
            estacionamiento, además de gestionar las reservas.
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleRedirect}
          >
            Gestionar Parqueadero
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminParqueadero;
