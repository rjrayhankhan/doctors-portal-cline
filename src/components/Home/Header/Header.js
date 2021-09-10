import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'
import HeaderMain from '../HeaderMain/HeaderMain';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Header = () => {
    return (
        <div className="header-container">
           <Navbar></Navbar>
           <HeaderMain></HeaderMain>
           <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;