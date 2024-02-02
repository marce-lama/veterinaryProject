import React from "react";
import "../navbar/Navbar.css"

const Navbar = () => {
  return (
    <div>
      <div style={{alignItems: "center", display:"flex", justifyContent: "space-around", marginTop:10, marginBottom:10}}>
        <div className="datosContainer">
          <h4 className="datosNavbar2">Tel: (011)4451-1111 y (011)4692-2222</h4>
          <h4 className="datosNavbar2">Whatsapp: +54 9 11 2233 4455</h4>
          <h4 className="datosNavbar2">veterinaria@gmail.com</h4>
        </div>
        <div className="datosContainer">
          <img src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705699090/veterinaryProject/Logo2_lom2jl.png" alt="" />
        </div>
        <div className="atencionNavbarContainer" style={{alignItems: "center"}}>
          <h4 className="atencionNavbar">Atención las 24hs</h4>
          <h4 className="datosNavbar">Dirección</h4>
          <h4 className="datosNavbar2">Avenida siempre viva 1234</h4>
          <h4 className="datosNavbar2">San Miguel-Buenos Aires</h4>
        </div>
      </div>
      <div>
        <div>
          <nav class="navbar navbar-expand-lg bg-body-tertiary myClass">
            <div class="container-fluid justify-content-center">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div class="navbar-nav myClass2">
                  <a class="nav-link myClass3" href="#">HOME</a>
                  <a class="nav-link myClass3" href="#">SERVICIOS</a>
                  <a class="nav-link myClass3" href="#">CUERPO MEDICO</a>
                  <a class="nav-link myClass3" href="#">CONSEJOS</a>
                  <a class="nav-link myClass3" href="#">CONTACTO</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
