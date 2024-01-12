import React from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import "../navbar/Navbar.css"

const Navbar = () => {
  return (
    <div>
      <div style={{display:"flex", justifyContent: "space-around", marginTop:10, marginBottom:10}}>
        <div className="datosContainer">
          <h4 className="datosNavbar2">Tel: (011)4451-1111 y (011)4692-2222</h4>
          <h4 className="datosNavbar2">Whatsapp: +54 9 11 2233 4455</h4>
          <h4 className="datosNavbar2">veterinaria@gmail.com</h4>
        </div>
        <div className="datosContainer">
          <h4 className="datosNavbar">Dirección</h4>
          <h4 className="datosNavbar2">Avenida siempre viva 1234</h4>
          <h4 className="datosNavbar2">San Miguel-Buenos Aires</h4>
        </div>
        <div className="atencionNavbarContainer" style={{display:"flex", alignItems:"center"}}>
          <h4 className="atencionNavbar">Atención las 24hs</h4>
        </div>
      </div>
      <div>
        <div>
          <nav className="navbar navbar-expand-lg myClass">
            <div className="container-fluid ">
              <img style={{width:90, height:80}} src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705007748/veterinaryProject/Logo1_qrp9ji.png" alt="" />
              <div className="collapse navbar-collapse" id="navbarNav"  >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Pricing
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
