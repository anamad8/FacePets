import React from 'react';
import './Header.css';
import DarkMode from '../DarkMode/DarkMode';
// import Logo from '../../Img/logo-facepets.png';
// import logoDark from '../../Img/logo-fecepets-color.png';

function Header() {
    return (
        <div className='header'>
            <div className='img-logo'>
            </div>
            <DarkMode/>
        </div>
    )
}

export default Header
