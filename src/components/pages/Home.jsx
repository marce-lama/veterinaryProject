import React from 'react'

const Home = () => {
  return (
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
  );
}; 

export default Home
