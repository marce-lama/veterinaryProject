import React from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import "../navbar/Navbar.css"

const Navbar = () => {
  return (
    <div>
      <div>
        <div style={{display:"flex", alignItems: "center", opacity: 0.7, height:60}}>
          <div> <PhoneIcon /></div>
          <div><h4>1122334455</h4></div>
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
