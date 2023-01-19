import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <h2>This is headers</h2>
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