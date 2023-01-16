import React, { useEffect, useState } from "react"
import { useUserContext } from "../provider/userProvider"



const Perfil=()=>{

const data = useUserContext()



return(
    <>
    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        <h1>{data.name}</h1>
        <h1> {data.petName}</h1>
        <img src={data.image}></img>
        
    </>
)
}

export default Perfil