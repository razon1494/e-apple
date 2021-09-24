import React from 'react';
import './Header.css';
import logo1 from '../../images/logo1.png'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo1} alt="" />
            <p>e-apple for your service</p>
        </div>
    );
};

export default Header;