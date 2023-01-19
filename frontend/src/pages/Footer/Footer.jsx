import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <div className="footer"> 
    <div className="">
    <div className="container">
      <div className="row text-white">
        <div className="col-md-3 col-sm-12">
          <h4 className="text-secondary">FacePets</h4>
          <p className="texto"> Llego la App ideal para tu mascota, aca podras subir sus momentos y recordarlos para siempre </p>
        </div>
        <div className="col-md-3 col-sm-12">
          <h4 className="text-secondary">¿Quienes somos?</h4>
          <p className="texto">Hola, somos un grupo desarrolladores Full Stack que estamos trabajando para DevPlace. Hemos desarrollamos la app ideal para tu mascota</p>
        </div>
        
        <div className="col-md-3 col-sm-12">
          <h4 className="text-secondary">LinkedIN´s</h4>
          <p className="link"><a href="https://www.linkedin.com/in/facundo-bustos-b86414251//" target="_blank">Facundo Bustos</a></p>
          <p className="link"><a href="https://www.linkedin.com/in/anabel-amad-/" target="_blank">Anabel Amad</a></p>
          <p className="link"><a href="https://www.linkedin.com/in/marcelo-diego-albano-6a453022b" target="_blank">Marcelo Albano</a></p>
          <p className="link"><a href="https://www.linkedin.com/in/rodolfo-nahuel-kubin-346b69253/" target="_blank">Nahuel Kubin</a></p>
        </div>
        <div className="col-md-3 col-sm-12">
          <h4 className="text-secondary">Derechos Reservados a DevPlace</h4>
          <p className="texto">Esta app fue desarrollada en conjunto con DevPlace y sus desarrolladores</p>
          
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
