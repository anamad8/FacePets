import React from 'react';
import './Header.css';
import DarkMode from '../DarkMode/DarkMode';
import imgLogo from '../Img/Pet-logo-Transparent.png'

function Header() {
    return (
        <div className='header'>
            <div className='img-logo'>
                <img src={imgLogo} alt="" className='img-logo' />
            </div>
            <DarkMode/>
        </div>
    )
}

export default Header

