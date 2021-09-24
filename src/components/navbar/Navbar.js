import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navigation'>
            <nav>
                <a href="/home"> Home </a>
                <a href="/order">  Order Review </a>
                <a href="/inventory">  Manage Inventory</a>
                <a href="/help">  Help </a>
            </nav>

        </div>
    );
};

export default Navbar;