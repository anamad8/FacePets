import React, { useState } from "react";

import {BiHomeAlt , BiShapePolygon} from "react-icons/bi";
import {ImProfile, ImUsers} from "react-icons/im";


import { Link } from "react-router-dom";
import { useDataContext } from "../../Context/DataContext";
import './sideBar.css';




export function SideBar(){

    const {datas, user} = useDataContext()
    const [state, setState]= useState("menuCollapsed")
    const cambiar=()=>{
        if(state == "menuCollapsed"){
         setState("menuExpanded")
        
         console.log(datas)
        }
        else{
            setState("menuCollapsed")
            
        }
    }
    
    let styles={
        backgroundImage: "url(" + datas.imageBanner + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }
      if(!user){
        return(
        <></>)
    }
    return(
        <>
         
            <div id="sidemenu" className={state} >
            <div id="menuHeader">
                 <div id="title"><span>{datas.name}</span></div> 
                <div id="menuBtn" onClick={cambiar}>
                    <div className="btn-hamburger"></div>
                    <div className="btn-hamburger"></div>
                    <div className="btn-hamburger"></div>
                </div>
                <div id="profile" style={styles}>
                 <div id="photo"><img src={datas.image}/></div> 
                     
                   <></>
                </div>
                <div id="menuItems">
                    
               <div className="item">
               <Link to="/">
                        <a href="#">
                             <BiHomeAlt className="icon" />
                            <div className="title">
                                <span>INICIO</span>
                                </div>
                        </a>
                        </Link>
                <Link to="/profile">
                        <a href="#">
                             <ImProfile className="icon" />
                            <div className="title">
                                <span>Perfil</span>
                                </div>
                        </a>
                        </Link>
                        <Link to="/AboutUs">
                        <a href="#">
                             <ImUsers className="icon" />
                            <div className="title">
                                <span>¿Quienes Somos?</span>
                                </div>
                        </a>
                        </Link>
                    </div>
                    
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default SideBar;