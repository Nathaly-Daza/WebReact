import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecuperarContrasena: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleRecover = () => {
    if (email.trim() === '') {
      window.alert('Por favor, ingrese su correo electrónico.');
      return;
    }
    window.alert(`Se ha enviado un código de recuperación a ${email}.`);
    navigate('/codigo'); // Redirige a una página de verificación de código
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Recuperar Contraseña</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Correo Electrónico */}
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
            {/* Botones */}
            <div className="d-grid gap-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleRecover}
              >
                Generar código de recuperación
              </button>
              <button
                type="button"
                className="btn btn-link"
                onClick={() => navigate('/Auth')}
              >
                Volver al inicio de sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecuperarContrasena;
