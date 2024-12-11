import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (usuario.trim() === "" || contrasena.trim() === "") {
      window.alert("Por favor, complete ambos campos.");
      return;
    }
    window.alert("Inicio de sesión exitoso");
    navigate("/"); // Redirige al home después de iniciar sesión
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Iniciar Sesión</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleLogin}>
            {/* Nombre de usuario */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Nombre de usuario
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Introduce tu nombre de usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>
            {/* Contraseña */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Introduce tu contraseña"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
              />
            </div>
            {/* Olvidó su contraseña */}
            <div className="mb-3 text-end">
              <button
                type="button"
                className="btn btn-link"
                onClick={() => navigate("/recuperarContrasena")}
              >
                ¿Olvidó su contraseña?
              </button>
            </div>
            <div className="mb-3 text-end">
              <button
                type="button"
                className="btn btn-link"
                onClick={() => navigate("/GestionParqueadero")}
              >
                ¿Eres administrador?
              </button>
            </div>
            {/* Botón para iniciar sesión */}
            <div className="d-grid gap-2 mb-3">
              <button type="submit" className="btn btn-primary">
                Iniciar Sesión
              </button>
            </div>
          </form>
          {/* Botón para crear una cuenta */}
          <div className="text-center">
            <p>¿No tienes cuenta?</p>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => navigate("/CrearCuenta")} // Redirige a la página de creación de cuenta
            >
              Crear una cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
