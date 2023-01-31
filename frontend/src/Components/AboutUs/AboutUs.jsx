import React from 'react'
import anabelamad from '../Img/anabelamad.png';
import marceloalbano from '../Img/marceloalbano.png';
import nahuelkubin from '../Img/nahuelkubin.png';
import facub from '../Img/facub.png';
import './AboutUsCards.css';

function AboutUs() {
  return (
    <> <div className='aboutus'><h1>¿Quienes somos?</h1>
      <p>¡Acá te contamos!</p>
    </div>
     <div className="contenedor">
      <div className="card">
        <div className="face front">
          <img src={facub} alt="" />
          <h3>Facundo Bustos</h3>
        </div>
        <div className="face back">
          <h3>Facundo Bustos</h3>
          <p>Hola, Yo soy Facundo! Pero la gente de confianza me dice memo. Vivo en mar del plata y tengo 26 años, me encanta la tecnologia, los videojuegos y claro tambien viajar. Estoy estudiando programación en CoderHouse, tambien en DevPlace y estoy inscripto en la UTN para este ciclo 2023. Si queres saber mas sobre mi te dejo mi LinkedIN</p>
          <a href="https://www.linkedin.com/in/facundo-bustos-b86414251/" target='_blank'>
          <div className="link">
            Acceder mi LinkedIN
          </div>
          </a>
        </div>
      </div>
      <div className="card">
        <div className="face front">
          <img src={anabelamad} alt="" />
          <h3>Anabel Amad</h3>
        </div>
        <div className="face back">
          <h3>Anabel Amad</h3>
          <p>Soy Full Stack Developer Jr, graduada en Teclab Instituto Técnico Superior. Donde desarrolle habilidades de gestionar, liderar trabajos en equipo, manejar nuevas herramientas digitales, mejorar procesos y la calidad del trabajo a través de la planificación.
Soy una persona dinámica, proactiva, con facilidad de adaptación a los diversos grupos de trabajos y necesidades de la empresa.</p>
          <a href="https://www.linkedin.com/in/anabel-amad-" target='_blank'>
          <div className="link">
            Acceder mi LinkedIN
          </div>
          </a>
        </div>
      </div>
      <div className="card">
        <div className="face front">
          <img src={marceloalbano} alt="" />
          <h3>Marcelo Albano </h3>
        </div>
        <div className="face back">
          <h3>Marcelo Albano</h3>
          <p>Hola, soy Marcelo Albano! Actualmente me encuentro cursando el Bootcamp de DEV-PLACE para ser un desarrollador FULLSTACK en JS. Anteriormente me recibí de Técnico en Programación en la EESTN°2. Además de la programación, me encantan los videojuegos, la música (tanto hacerla como escucharla), y leer. </p>         
            <a href="https://www.linkedin.com/in/marcelo-diego-albano-6a453022b" target='_blank'><div className="link">Acceder mi LinkedIN</div></a>
        </div>
      </div>
      <div className="card">
        <div className="face front">
          <img src={nahuelkubin} alt="" />
          <h3>Nahuel Kubin</h3>
        </div>
        <div className="face back">
          <h3>Nahuel Kubin</h3>
          <p>Hola! me llamo Nahuel Kubin, pero me dicen Kubo. Tengo 20 años y actualmente me encuentro cursando un BootCamp de Dev-Place y estudiando Ingenieria en Informatica. Me gusta todo lo que tenga que ver con la tecnologia y los avances tecnologicos. </p>         
            <a href="https://www.linkedin.com/in/rodolfo-nahuel-kubin-346b69253/"target='_blank'><div className="link">Acceder mi LinkedIN</div></a>          
        </div>
      </div>
    </div>

</>
  )
}

export default AboutUs


