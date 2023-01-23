import React from 'react'
import ana from '../Img/ana.jpeg';
import marce from '../Img/marce.jpeg';
import nahue from '../Img/nahue.jpeg';
import facu1 from '../Img/facu1.jpeg';
import './AboutUsCards.css';



function AboutUs() {

  return (
    
    <> 
     
     <div className="contenedor">
      <div className="card">
        <div className="face front">
          <img src={facu1} alt="" />
          <h3>Facundo Bustos</h3>
        </div>
        <div className="face back">
          <h3>Facundo Bustos</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores repellendus necessitatibus recusandae in? Suscipit explicabo sequi accusantium nemo repudiandae, dicta voluptatum totam iste commodi ad quasi, incidunt rerum ex laudantium.</p>
          <div className="link">
            <a href="https://www.linkedin.com/in/facundo-bustos-b86414251/" target='_blank'>Acceder al LinkedIN</a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="face front">
          <img src={ana} alt="" />
          <h3>Anabel Amad</h3>
        </div>
        <div className="face back">
          <h3>Anabel Amad</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores repellendus necessitatibus recusandae in? Suscipit explicabo sequi accusantium nemo repudiandae, dicta voluptatum totam iste commodi ad quasi, incidunt rerum ex laudantium.</p>
          <div className="link">
            <a href="https://www.linkedin.com/in/anabel-amad-" target='_blank'>Acceder al LinkedIN</a>
          </div>

        </div>
      </div>
      <div className="card">
        <div className="face front">
          <img src={marce} alt="" />
          <h3>Marcelo Albano </h3>
        </div>
        <div className="face back">
          <h3>Anabel Albano</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores repellendus necessitatibus recusandae in? Suscipit explicabo sequi accusantium nemo repudiandae, dicta voluptatum totam iste commodi ad quasi, incidunt rerum ex laudantium.</p>
          <div className="link">
            <a href="https://www.linkedin.com/in/marcelo-diego-albano-6a453022b" target='_blank'>Acceder al LinkedIN</a>
          </div>

        </div>
      </div>
      <div className="card">
        <div className="face front">
          <img src={nahue} alt="" />
          <h3>Nahuel Kubin</h3>
        </div>
        <div className="face back">
          <h3>Nahuel Kubin</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores repellendus necessitatibus recusandae in? Suscipit explicabo sequi accusantium nemo repudiandae, dicta voluptatum totam iste commodi ad quasi, incidunt rerum ex laudantium.</p>
          <div className="link">
            <a href="https://www.linkedin.com/in/rodolfo-nahuel-kubin-346b69253/"target='_blank'>Acceder al LinkedIN</a>
          </div>

        </div>
      </div>


    </div>
</>



  )
}

export default AboutUs


