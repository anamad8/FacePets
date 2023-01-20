import React, { useState } from "react";

import {useUserContext } from "../provider/userProvider";
import {BiHomeAlt , BiShapePolygon} from "react-icons/bi";
import { Link } from "react-router-dom";





export function SideBar(){
    const {datas}= useUserContext()

    const [state, setState]= useState("menuCollapsed")
    const cambiar=()=>{
        if(state == "menuCollapsed"){
         setState("menuExpanded")
         document.querySelector('body').classList.toggle('bodyExpanded')
         console.log(datas)
        }
        else{
            setState("menuCollapsed")
            document.querySelector('body').classList.toggle('bodyExpanded')
        }
    }
    if(!datas){
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
                <div id="profile">
                 <div id="photo"><img src={datas.image}/></div> 
                     
                   <></>
                </div>
                <div id="menuItems">
                    
               <div className="item">
                <Link to="/">
                        <a href="#">
                             <BiHomeAlt className="icon" />
                            <div className="title">
                                <span>Monedero</span>
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

