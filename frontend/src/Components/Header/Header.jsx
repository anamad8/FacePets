import React from 'react';
import './Header.css';
import DarkMode from '../DarkMode/DarkMode';
import imgLogo from '../Img/Pet-logo-Transparent.png'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <div className='img-logo'>
               <Link to='/login'> <img src={imgLogo} alt="" className='img-logo' /></Link>
            </div>
            <DarkMode/>
        </div>
    )
}

export default Header

