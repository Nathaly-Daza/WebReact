import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    // Validación de campos
    if (usuario.trim() === '' || contrasena.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }

    // Validación simple de usuario y contraseña
    if (usuario === 'admin' && contrasena === 'admin123') {
      alert('Inicio de sesión exitoso');
      navigate('/GestionParqueadero'); // Redirige al dashboard
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="container my-5">
      <div
        className="card-container"
        style={{
          backgroundImage: 'images/fondo1.webp',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '20px',
          borderRadius: '10px',
          maxWidth: '400px',
          margin: 'auto',
        }}
      >
        <h2 className="text-center mb-4">Iniciar Sesión</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="usuario" className="form-label">Nombre de usuario</label>
            <input
              type="text"
              className="form-control"
              id="usuario"
              placeholder="Introduce tu nombre de usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Introduce tu contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>

          <div className="d-grid gap-2 mb-3">
            <button type="submit" className="btn btn-primary">
              Iniciar Sesión
            </button>
          </div>
        </form>

        <div className="text-center">
          <p>¿No tienes cuenta?</p>
          <button
            type="button"
            className="btn btn-link"
            onClick={() => navigate('/CrearCuenta')}
          >
            Crear cuenta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
