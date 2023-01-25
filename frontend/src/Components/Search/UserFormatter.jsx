import React from 'react'
import { Link } from 'react-router-dom';
import './Search.css';
import "react-toastify/dist/ReactToastify.css";

const UserFormatter = (props) => {


  return (

    <div className="card" key={props.index}>
        <Link to={"/profile/" + props.element.id}> <img src={props.element.image} alt="ProductImage" className="imageProduct" /> </Link>
        <div className="text">
            <h3>Nombre: {props.element.petName}</h3>
            <p>Edad:{props.element.petAge}</p>
            <p>Raza: {props.element.breed}</p>
        </div>
    </div>
  )
}

export default UserFormatter