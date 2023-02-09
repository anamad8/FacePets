import React from 'react'
import '../../CSS/style.css'
import img from '../Img/img-login-register.png';

function MovingBanner() {
  return (
    <div className='moving-img'>
        <img src={img} />
        <p>Crea una página para compartir las historia de tu mascota.</p>
    </div>
  )
}

export default MovingBanner