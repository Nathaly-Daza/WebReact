import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">© 2024 GUX - Parqueo. Todos los derechos reservados.</p>
        <p>
          <a href="/privacidad" className="text-white text-decoration-none">
            Política de Privacidad
          </a>{" "}
          |{" "}
          <a href="/terminos" className="text-white text-decoration-none">
            Términos y Condiciones
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
