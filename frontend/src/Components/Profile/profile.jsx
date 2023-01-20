import React, { useEffect, useState } from "react"
import { BsPencil, BsGenderFemale, BsGenderMale } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useDataContext } from "../../Context/DataContext"
import './profile.css'


const Perfil=()=>{



const {datas} = useDataContext()

let styles={
    backgroundImage: "url(" + datas.imageBanner + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

return(
    <>
    <div className="flexContainer">
    <div className="containerProfile">
        <div className="profileImg" style={styles}>
            <Link to="/editProfile"><BsPencil className="icon" /></Link>
            <img src={datas.image} alt='perfilImg' />
        </div>
        <div className="profileData">
        <h1 style={{
            display:'inline'
        }}>{datas.petName}</h1>{datas.gender ==0 ? <span> <BsGenderFemale/> </span>:<span> <BsGenderMale/></span>}
        <span className="profileAge"> Edad: {datas.petAge}</span>
        <h1>{datas.breed}</h1>
        </div>
        <div className="profileDesc">
            <p>{datas.description}</p>
        </div>
    </div>
    </div>
    </>
)
}

export default Perfil