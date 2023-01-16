import React from 'react';
import './Header.css';
import Logo from '../../Img/logo-facepets.png'

function Header() {
    return (
        <div className='header'>
            <div className='img-logo'>
                <img src={Logo} alt="" />
            </div>
        </div>
    )
}

export default Header
