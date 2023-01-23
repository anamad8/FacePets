import React from 'react'
import anabelamad from '../Img/anabelamad.png';
import marceloalbano from '../Img/marceloalbano.png';
import nahuelkubin from '../Img/nahuelkubin.png';
import facub from '../Img/facub.png';
import './AboutUsCards.css';

function AboutUs() {
  return (
    <> <div className='aboutus'><h1>¿Quienes somos?</h1>
      <p>¡Aca te contamos!</p>
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
          <div className="link">
            <a href="https://www.linkedin.com/in/facundo-bustos-b86414251/" target='_blank'>Acceder mi LinkedIN</a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="face front">
          <img src={anabelamad} alt="" />
          <h3>Anabel Amad</h3>
        </div>
        <div className="face back">
          <h3>Anabel Amad</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores repellendus necessitatibus recusandae in? Suscipit explicabo sequi accusantium nemo repudiandae, dicta voluptatum totam iste commodi ad quasi, incidunt rerum ex laudantium.</p>
          <div className="link">
            <a href="https://www.linkedin.com/in/anabel-amad-" target='_blank'>Acceder mi LinkedIN</a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="face front">
          <img src={marceloalbano} alt="" />
          <h3>Marcelo Albano </h3>
        </div>
        <div className="face back">
          <h3>Marcelo Albano</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores repellendus necessitatibus recusandae in? Suscipit explicabo sequi accusantium nemo repudiandae, dicta voluptatum totam iste commodi ad quasi, incidunt rerum ex laudantium.</p>
          <div className="link">
            <a href="https://www.linkedin.com/in/marcelo-diego-albano-6a453022b" target='_blank'>Acceder mi LinkedIN</a>
          </div>

        </div>
      </div>
      <div className="card">
        <div className="face front">
          <img src={nahuelkubin} alt="" />
          <h3>Nahuel Kubin</h3>
        </div>
        <div className="face back">
          <h3>Nahuel Kubin</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores repellendus necessitatibus recusandae in? Suscipit explicabo sequi accusantium nemo repudiandae, dicta voluptatum totam iste commodi ad quasi, incidunt rerum ex laudantium.</p>
          <div className="link">
            <a href="https://www.linkedin.com/in/rodolfo-nahuel-kubin-346b69253/"target='_blank'>Acceder mi LinkedIN</a>
          </div>
        </div>
      </div>
    </div>
</>
  )
}

export default AboutUs


