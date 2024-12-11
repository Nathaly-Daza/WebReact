import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            GUX
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#about-us"
                  onClick={(e) => {
                    e.preventDefault();
                    const aboutUsSection = document.getElementById("about-us");
                    aboutUsSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  ¿Quiénes somos?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/auth">
                  Regístrate o Inicia Sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
