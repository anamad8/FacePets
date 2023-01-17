import React, { useState} from 'react';
import './DarkMode.css';

function DarkMode() {

    const [darkMode] = useState(false)

    function handlePosition() {
        let modo = document.getElementById("active");
        let body = document.body;

        let val=body.classList.toggle("active")
        localStorage.setItem("modo",val)
        

        let valor=localStorage.getItem("modo")

        if (valor=="true") {
            body.classList.add("active")
        } else {
            body.classList.remove("active")
        }
}


    return (

        <div className='dark-mode'>
            <input type="checkbox" id="toggle" className="toggle--checkbox" value={darkMode} onClick={handlePosition}/>
            <label htmlFor="toggle" className="toggle--label">
            <span className="toggle--label-background"></span>
            </label>
            <div className="background"></div>
        </div>
    )
}

export default DarkMode
