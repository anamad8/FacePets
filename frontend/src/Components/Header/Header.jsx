import React from 'react';
import './Header.css';
import DarkMode from '../DarkMode/DarkMode';

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