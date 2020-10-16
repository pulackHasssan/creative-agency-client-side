import React from 'react';
import HeaderInfo from '../HeaderInfo/HeaderInfo';
import Navigation from '../Navigation/Navigation';
import "./Header.css";

const Header = () => {
    return (
        <header className="header container-fluid">
            <div className="container">
                <Navigation />
                <HeaderInfo />
            </div>
        </header>
    );
};

export default Header;