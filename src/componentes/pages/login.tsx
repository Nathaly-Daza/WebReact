import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CrearCuenta: React.FC = () => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const handleCrearCuenta = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      usuario.trim() === '' ||
      email.trim() === '' ||
      contrasena.trim() === '' ||
      confirmarContrasena.trim() === ''
    ) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    if (contrasena !== confirmarContrasena) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    alert('Cuenta creada exitosamente');
    navigate('/'); // Redirige al Home después de crear la cuenta
  };

  

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Crear Cuenta</h2>

      <form onSubmit={handleCrearCuenta}>
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

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Introduce tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

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

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirmar contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirma tu contraseña"
            value={confirmarContrasena}
            onChange={(e) => setConfirmarContrasena(e.target.value)}
          />
        </div>

        <div className="d-grid gap-2 mb-3">
          <button type="submit" className="btn btn-primary">
            Crear Cuenta
          </button>
        </div>
      </form>

      <div className="text-center">
        <p>¿Ya tienes cuenta?</p>
        <button
                type="button"
                className="btn btn-link"
                onClick={() => navigate('/Auth')}
              >
                Volver al inicio de sesión
              </button>
      </div>
    </div>
  );
};

export default CrearCuenta;
