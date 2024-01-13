import React, { useEffect } from 'react'
import "../pages/Home.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);
  return (
    <div>
      <div style={{marginTop:10}}> 
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705094002/veterinaryProject/Imagen_Portada2_bik8hr.bmp" className="d-block w-100" alt=""></img>
            </div>
            <div className="carousel-item">
              <img src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705094006/veterinaryProject/Imagen_Portada1_sguany.bmp" className="d-block w-100" alt=""></img>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div>
        <img style={{maxWidth:1349}} src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705118915/veterinaryProject/wave1_wqqsgk.png" alt="" />
        <div data-aos="fade-left">
          <p className="introVet" style={{marginTop: -400}}>Bienvenidos a **Veterinaria Santa María**, su hogar para el cuidado integral de mascotas. Nos enorgullece ser la clínica veterinaria de elección para los dueños de mascotas locales que buscan un servicio excepcional y atención compasiva para sus queridos compañeros.</p>
          <p className="introVet" style={{marginTop: 40}}>Ofrecemos una variedad de servicios, desde chequeos de rutina y vacunaciones, hasta cirugías de emergencia y tratamientos especializados. Nuestro equipo de profesionales capacitados y apasionados está listo para atender las necesidades de su mascota con el mayor cuidado y atención.</p>
          <p className="introVet" style={{marginTop: 40}}>Visítenos hoy y descubra por qué somos la clínica veterinaria número uno en Santa María. ¡Esperamos tener la oportunidad de conocer a su mascota y darle la bienvenida a nuestra familia de Veterinaria Santa María!</p>
        </div>
      </div>
      <div>
        <h1>aca van los iconos</h1>
      </div>
    </div>
  );
}; 

export default Home
