import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-logo'>
            <img className='logo' src="logo.png" alt="" />
            <h4>Super-Car
            </h4>
            </div>
            <div className='header-item'>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/contact">Contact</a>
                <a href="/privacy">Privacy</a>
            </div>
        </div>
    );
};

export default Header;