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
        <div className="container text-center" style={{marginTop:50}}>
          <div className="row row-cols-3">
            <div className="col">
              <div>
              <img className='imgServicio' src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705284067/veterinaryProject/Sin-t%C3%ADtulo-1_ypstvn.png" alt="" />
              </div>
              <p className='nombreServicio'>Clínica</p>
              <div className='contenedorDescripcion'>
                <p className='descripcionServicio'>Nuestra <strong>clínica</strong> veterinaria ofrece una amplia gama de servicios para mantener a tus amigos peludos en la mejor salud posible. Contamos con un equipo de veterinarios altamente capacitados y amantes de los animales, dedicados a brindar el más alto nivel de atención. Ofrecemos servicios de diagnóstico avanzados, tratamientos médicos y quirúrgicos, vacunaciones, y un servicio de urgencias disponible las 24 horas. Además, proporcionamos asesoramiento nutricional y comportamental para ayudarte a entender y cuidar mejor a tus mascotas.</p>
              </div>
            </div>
            <div className="col">
              <img className='imgServicio' src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705284067/veterinaryProject/Sin-t%C3%ADtulo-1_ypstvn.png" alt="" />
              <p className='nombreServicio'>Cirugía General</p>
              <div className='contenedorDescripcion'>
                <p className='descripcionServicio'>Nuestro equipo de <strong>cirugía general</strong> está dedicado a proporcionar atención quirúrgica de alta calidad y personalizada. Contamos con cirujanos altamente capacitados y experimentados, comprometidos con la excelencia en el cuidado del paciente. Ofrecemos una amplia gama de procedimientos quirúrgicos, desde cirugías mínimamente invasivas hasta operaciones complejas. Nuestro objetivo es asegurar que cada paciente reciba el tratamiento más adecuado y efectivo para su condición específica.</p>
              </div>
            </div>
            <div className="col">
              <img className='imgServicio' src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705284067/veterinaryProject/Sin-t%C3%ADtulo-1_ypstvn.png" alt="" />
              <p className='nombreServicio'>Ecografía</p>
              <div className='contenedorDescripcion'>
                <p className='descripcionServicio'>Nuestro servicio de <strong>ecografía</strong> está comprometido con la excelencia en el diagnóstico por imagen. Contamos con un equipo de profesionales altamente capacitados y tecnología de última generación para proporcionar imágenes claras y precisas. Ofrecemos una amplia gama de exámenes de ecografía, incluyendo ecografías abdominales, obstétricas, musculoesqueléticas, entre otras. Nuestro objetivo es proporcionar un diagnóstico preciso que ayude a guiar el tratamiento y el cuidado del paciente.</p>
              </div>
            </div>
            <div className="col">
              <img className='imgServicio' src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705284067/veterinaryProject/Sin-t%C3%ADtulo-1_ypstvn.png" alt="" />
              <p className='nombreServicio'>Radiología</p>
              <div className='contenedorDescripcion'>
                <p className='descripcionServicio'>Nuestro servicio de <strong>radiología</strong> se dedica a proporcionar diagnósticos precisos y seguros a través de la imagenología. Contamos con un equipo de radiólogos altamente capacitados y tecnología avanzada para asegurar la calidad y precisión de nuestras imágenes. Ofrecemos una variedad de exámenes de radiología, incluyendo rayos X, tomografías computarizadas (TC), resonancias magnéticas (RM), entre otros. Nuestro objetivo es proporcionar un diagnóstico claro y preciso que permita a tu médico determinar el mejor plan de tratamiento para ti.</p>
              </div>
            </div>
            <div className="col">
              <img className='imgServicio' src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705284067/veterinaryProject/Sin-t%C3%ADtulo-1_ypstvn.png" alt="" />
              <p className='nombreServicio'>Internación</p>
              <div className='contenedorDescripcion'>
                <p className='descripcionServicio'>Nuestro servicio de <strong>internación</strong> está dedicado a proporcionar atención médica integral y personalizada. Contamos con un equipo de profesionales de la salud altamente capacitados y comprometidos con el bienestar de nuestros pacientes. Ofrecemos habitaciones cómodas y bien equipadas para asegurar que tu estancia sea lo más agradable posible. Nuestro personal de enfermería está disponible las 24 horas del día para atender tus necesidades y asegurar tu comodidad.</p>
              </div>
            </div>
            <div className="col">
              <img className='imgServicio' src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705284067/veterinaryProject/Sin-t%C3%ADtulo-1_ypstvn.png" alt="" />
              <p className='nombreServicio'>Laboratorio</p>
              <div className='contenedorDescripcion'>
                <p className='descripcionServicio'>Nuestro servicio de <strong>laboratorio</strong> está comprometido con proporcionar resultados precisos y confiables. Contamos con un equipo de profesionales altamente capacitados y tecnología de vanguardia para asegurar la calidad de nuestros análisis. Ofrecemos una amplia gama de pruebas de laboratorio, incluyendo análisis de sangre, pruebas de orina, biopsias, entre otros. Nuestro objetivo es proporcionar resultados rápidos y precisos que ayuden a tu médico a determinar el mejor plan de tratamiento para ti.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginTop: 100}}>
        <div className="container text-center">
          <div className="row row-cols-4">
            <div className="col">
              <img className="imagenesMuestra" src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705345996/veterinaryProject/8_ged25s.jpg" alt="" />
            </div>
            <div className="col">
              <img className="imagenesMuestra" src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705345996/veterinaryProject/7_lsfefc.jpg" alt="" />
            </div>
            <div className="col">
              <img className="imagenesMuestra" src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705345996/veterinaryProject/5_qqfck8.jpg" alt="" />
            </div>
            <div className="col">
              <img className="imagenesMuestra" src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705345996/veterinaryProject/6_boi2fb.jpg" alt="" />
            </div>
            <div className="col">
              <img className="imagenesMuestra" src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705345996/veterinaryProject/6_boi2fb.jpg" alt="" />
            </div>
            <div className="col">
              <img className="imagenesMuestra" src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705345995/veterinaryProject/1_evlqvw.jpg" alt="" />
            </div>
            <div className="col">
              <img className="imagenesMuestra" src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705345995/veterinaryProject/3_w1r0xh.jpg" alt="" />
            </div>
            <div className="col">
              <img className="imagenesMuestra" src="https://res.cloudinary.com/dhdhzwlz9/image/upload/v1705345995/veterinaryProject/2_yssoao.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default Home
