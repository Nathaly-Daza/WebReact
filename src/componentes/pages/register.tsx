import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CrearCuenta: React.FC = () => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [documento, setDocumento] = useState('');
  const [telefono, setTelefono] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [rol, setRol] = useState('cliente'); // Valor predeterminado

  const handleCrearCuenta = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      nombre.trim() === '' ||
      apellido.trim() === '' ||
      correo.trim() === '' ||
      documento.trim() === '' ||
      telefono.trim() === '' ||
      usuario.trim() === '' ||
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
    <div className="container-fluid my-5">
      <div className="row justify-content-center">
        {/* Card de Crear Cuenta */}
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="text-center mb-4">Crear Cuenta</h2>

              <form onSubmit={handleCrearCuenta}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Introduce tu nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="apellido" className="form-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellido"
                    placeholder="Introduce tu apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
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
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="documento" className="form-label">
                    Documento
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="documento"
                    placeholder="Introduce tu documento"
                    value={documento}
                    onChange={(e) => setDocumento(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label">
                    Teléfono
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="telefono"
                    placeholder="Introduce tu teléfono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="usuario" className="form-label">
                    Nombre de usuario
                  </label>
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

                <div className="mb-3">
                  <label htmlFor="rol" className="form-label">
                    Rol
                  </label>
                  <select
                    id="rol"
                    className="form-control"
                    value={rol}
                    onChange={(e) => setRol(e.target.value)}
                  >
                    <option value="cliente">Cliente</option>
                    <option value="administrador">Administrador</option>
                    <option value="soporte">Soporte</option>
                    <option value="supervisor">Supervisor</option>
                  </select>
                </div>

                <div className="d-grid gap-2 mb-3">
                  <button type="submit" className="btn btn-primary">
                    Crear Cuenta
                  </button>
                </div>
              </form>

              <div className="text-center">
                <p>Serás parte de la gran familia GUX</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card de Beneficios del Administrador */}
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="text-center mb-4">Beneficios del Administrador</h3>
              <ul>
                <li><strong>Gestión de parqueaderos:</strong> Control total sobre la disponibilidad de los espacios de parqueo.</li>
                <li><strong>Visibilidad de estadísticas:</strong> Acceso a reportes detallados sobre el uso y rentabilidad del parqueadero.</li>
                <li><strong>Optimización de ingresos:</strong> Maximización del rendimiento del parqueadero con herramientas de administración eficientes.</li>
                <li><strong>Control de pagos:</strong> Gestión completa de las transacciones de pago y emisión de facturas.</li>
              </ul>

              <div className="d-grid gap-2 mt-4">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => navigate('/login')}
                >
                  Iniciar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearCuenta;
