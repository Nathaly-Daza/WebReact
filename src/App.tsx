import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./componentes/header";
import Footer from "./componentes/footer";
import Carousel from "./componentes/carrusel";
import AboutUs from "./componentes/nosotros";
import Advantages from "./componentes/ventajas";
import AuthPage from "./componentes/pages/authPage";
import AdminParqueadero from "./componentes/adminParqueo";
import Login from "./componentes/pages/login";
import CrearCuenta from "./componentes/pages/register";
import GestionParqueo from "./componentes/pages/gestionParqueo";


const App: React.FC = () => {
  return (
    <div>
    <Header />
    <Routes>
      {/* Ruta para la página principal */}
      <Route
        path="/"
        element={
          <>
            <Carousel />
            <AboutUs />
            <Advantages />
            <AdminParqueadero />
          </>
        }
      />
      {/* Ruta para la página de autenticación */}
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/GestionParqueadero" element={<GestionParqueo />} />
      <Route path="/CrearCuenta" element={<CrearCuenta />} />
  

    </Routes>
    <Footer />
  </div>
);
};

export default App;
