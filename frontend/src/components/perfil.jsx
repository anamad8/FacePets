import React, { useEffect, useState } from "react"
import { BsPencil, BsGenderFemale, BsGenderMale } from "react-icons/bs"
import { useUserContext } from "../provider/userProvider"



const Perfil=()=>{

const data = useUserContext()

let styles={
    backgroundImage: "url(" + data.imageBanner + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

return(
    <>
    <div className="flexContainer">
    <div className="containerProfile">
        <div className="profileImg" style={styles}>
            <BsPencil className="icon"/>
            <img src={data.image} alt='perfilImg' />
        </div>
        <div className="profileData">
        <h1 style={{
            display:'inline'
        }}>{data.petName}</h1>{data.gender ==0 ? <span> <BsGenderFemale/> </span>:<span> <BsGenderMale/></span>}
        <span className="profileAge"> Edad: {data.petAge}</span>
        <h1>{data.breed}</h1>
        </div>
        <div className="profileDesc">
            <p>{data.description}</p>
        </div>
    </div>
    </div>
    </>
)
}

export default Perfil