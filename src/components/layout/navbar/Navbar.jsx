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
          <nav className="navbar navbar-expand-lg myClass">
            <div className="container-fluid ">
              <div className="collapse navbar-collapse" id="navbarNav"  >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                      HOME
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      SERVICIOS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      CUERPO MEDICO
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      CONSEJOS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      CONTACTO
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
