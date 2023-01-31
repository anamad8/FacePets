import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Search.css';
import "react-toastify/dist/ReactToastify.css";

const UserFormatter = (props) => {

  const [btnSeguir, setBtnSeguir] = useState(true);

  const handleClick = () =>{
    setBtnSeguir(!btnSeguir)
    console.log(btnSeguir)
    let btn =  document.querySelector(".btn-seguir")
    if (btnSeguir === true) {
      btn.innerText ='Dejar de seguir'
    }else{
      btn.innerText ='Seguir'
    }
  }


  return (

    <div className="card-user" key={props.index}>
        <Link to={"/profile/" + props.element.id}> <img src={props.element.image} alt="ProductImage" className="imageProduct" /> </Link>
        <div className="text">
            <h3>Nombre: {props.element.petName}</h3>
            <p>Edad:{props.element.petAge}</p>
            <p>Raza: {props.element.breed}</p>
        </div>
        {/* <div className='seguir'>
          <button className='btn-seguir' onClick={handleClick}>Seguir</button>
        </div> */}
    </div>
  )
}

export default UserFormatter