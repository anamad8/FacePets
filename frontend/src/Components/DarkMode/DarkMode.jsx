import React, { useState, useContext } from 'react';
import './DarkMode.css';
import { DataContext } from '../../Contex/DataContex';

function DarkMode() {

    const { darkMode, setDarkMode, handlePosition } = useContext(DataContext)

//     function handlePosition() {
//         setDarkMode(!darkMode)
//         let modo = document.getElementById("active");
//         let body = document.body;

//         let val=body.classList.toggle("active")
//         localStorage.setItem("modo",val)
        

//         let valor=localStorage.getItem("modo")

//         if (valor=="true") {
//             body.classList.add("active")
//         } else {
//             body.classList.remove("active")
//         }
// }



    return (

        <div className='dark-mode'>
            {
                darkMode === true ? 
                <button id="btn-darkMode" className='oscuro' onClick={handlePosition}><span class="toggle--label-background-oscuro"></span></button> 
                :
                <button id="btn-darkMode" className='claro' onClick={handlePosition}><span class="toggle--label-background-claro"></span></button>
            }
            {/* <button id="btn-darkMode" className='' onClick={handlePosition}></button> */}
            {/* <input type="checkbox" id="toggle" className="toggle--checkbox" value={darkMode} onClick={handlePosition}/>
            <label htmlFor="toggle" className="toggle--label">
            <span className="toggle--label-background"></span>
            </label>
            <div className="background"></div> */}
        </div>
    )
}

export default DarkMode
