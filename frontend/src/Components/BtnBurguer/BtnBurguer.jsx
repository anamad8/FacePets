import React from 'react';
import './BtnBurguer.css'

function BtnBuguer({handleClick, btnMenu}) {
    return (
        <div onClick={handleClick} 
            className={`icon nav-icon-5 ${btnMenu ? 'open' : ''}`} >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default BtnBuguer