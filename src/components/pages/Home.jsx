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
        <div className='divTituloServicio' style={{marginTop:80}}><h2 className='tituloServicio'>Servicios</h2></div>
        <div class="container text-center" style={{marginTop:50}}>
          <div class="row row-cols-3">
            <div class="col">
              <img className='imgServicio' src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705284067/veterinaryProject/Sin-t%C3%ADtulo-1_ypstvn.png" alt="" />
              <p className='nombreServicio'>Clínica</p>
              <div className='contenedorDescripcion'>
                <p className='descripcionServicio'>Clínica Veterinaria Amigos de las Mascotas: Un hogar lejos del hogar para tus amigos de cuatro patas. Nuestro equipo de expertos veterinarios se dedica a proporcionar atención médica de alta calidad, desde chequeos rutinarios hasta cirugías especializadas. Con servicios que incluyen diagnósticos, tratamientos, vacunaciones, y cuidado preventivo, nos esforzamos por mantener a tus mascotas saludables y felices. ¡Ven y experimenta el cuidado compasivo que tus mascotas se merecen!</p>
              </div>
            </div>
            <div class="col">
              <img className='imgServicio' src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705284067/veterinaryProject/Sin-t%C3%ADtulo-1_ypstvn.png" alt="" />
              <p className='nombreServicio'>Cirugía General</p>
              <div className='contenedorDescripcion'>
                <p className='descripcionServicio'>Clínica Veterinaria Amigos de las Mascotas: Un hogar lejos del hogar para tus amigos de cuatro patas. Nuestro equipo de expertos veterinarios se dedica a proporcionar atención médica de alta calidad, desde chequeos rutinarios hasta cirugías especializadas. Con servicios que incluyen diagnósticos, tratamientos, vacunaciones, y cuidado preventivo, nos esforzamos por mantener a tus mascotas saludables y felices. ¡Ven y experimenta el cuidado compasivo que tus mascotas se merecen!</p>
              </div>
            </div>
            <div class="col">
              <img className='imgServicio' src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705284067/veterinaryProject/Sin-t%C3%ADtulo-1_ypstvn.png" alt="" />
              <p className='nombreServicio'>Ecografía</p>
              <div className='contenedorDescripcion'>
                <p className='descripcionServicio'>Clínica Veterinaria Amigos de las Mascotas: Un hogar lejos del hogar para tus amigos de cuatro patas. Nuestro equipo de expertos veterinarios se dedica a proporcionar atención médica de alta calidad, desde chequeos rutinarios hasta cirugías especializadas. Con servicios que incluyen diagnósticos, tratamientos, vacunaciones, y cuidado preventivo, nos esforzamos por mantener a tus mascotas saludables y felices. ¡Ven y experimenta el cuidado compasivo que tus mascotas se merecen!</p>
              </div>
            </div>
            <div class="col">
              <img className='imgServicio' src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705284067/veterinaryProject/Sin-t%C3%ADtulo-1_ypstvn.png" alt="" />
              <p className='nombreServicio'>Radiología</p>
              <div className='contenedorDescripcion'>
                <p className='descripcionServicio'>Clínica Veterinaria Amigos de las Mascotas: Un hogar lejos del hogar para tus amigos de cuatro patas. Nuestro equipo de expertos veterinarios se dedica a proporcionar atención médica de alta calidad, desde chequeos rutinarios hasta cirugías especializadas. Con servicios que incluyen diagnósticos, tratamientos, vacunaciones, y cuidado preventivo, nos esforzamos por mantener a tus mascotas saludables y felices. ¡Ven y experimenta el cuidado compasivo que tus mascotas se merecen!</p>
              </div>
            </div>
            <div class="col">
              <img className='imgServicio' src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705284067/veterinaryProject/Sin-t%C3%ADtulo-1_ypstvn.png" alt="" />
              <p className='nombreServicio'>Internación</p>
              <div className='contenedorDescripcion'>
                <p className='descripcionServicio'>Clínica Veterinaria Amigos de las Mascotas: Un hogar lejos del hogar para tus amigos de cuatro patas. Nuestro equipo de expertos veterinarios se dedica a proporcionar atención médica de alta calidad, desde chequeos rutinarios hasta cirugías especializadas. Con servicios que incluyen diagnósticos, tratamientos, vacunaciones, y cuidado preventivo, nos esforzamos por mantener a tus mascotas saludables y felices. ¡Ven y experimenta el cuidado compasivo que tus mascotas se merecen!</p>
              </div>
            </div>
            <div class="col">
              <img className='imgServicio' src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705284067/veterinaryProject/Sin-t%C3%ADtulo-1_ypstvn.png" alt="" />
              <p className='nombreServicio'>Laboratorio</p>
              <div className='contenedorDescripcion'>
                <p className='descripcionServicio'>Clínica Veterinaria Amigos de las Mascotas: Un hogar lejos del hogar para tus amigos de cuatro patas. Nuestro equipo de expertos veterinarios se dedica a proporcionar atención médica de alta calidad, desde chequeos rutinarios hasta cirugías especializadas. Con servicios que incluyen diagnósticos, tratamientos, vacunaciones, y cuidado preventivo, nos esforzamos por mantener a tus mascotas saludables y felices. ¡Ven y experimenta el cuidado compasivo que tus mascotas se merecen!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default Home
