import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderInfo.css';
const HeaderInfo = () => {
    return (
        <div>
            <div className="row">
                <div className="info-style col-md-5 col-sm-12">
                    <br /> 
                    <br />
                    <h1>Let's Grow Your <br />Brand to The <br />Next Level.</h1>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vel cupiditate illum aliquid tempore maxime?</p>
                    <Link to='/dashboard/order'><button className="main-button">Hire Us</button></Link>
                </div>
                <div className="info-style col-md-7 col-sm-12">
                    <img className="image img-fluid" src="https://i.ibb.co/2MT5hM0/Frame.png" alt="Frame" />
                </div>
            </div>
        </div>
    );
};

export default HeaderInfo;