import React from 'react';
import DashSideBar from '../DashSideBar/DashSideBar';
import Order from '../Order/Order';

const DashBoard = () => {
    return (
        <div className="container">
            <div style={{ minHeight: '650px' }} className="row container-fluid">
                <div style={{ backgroundColor: 'lightcoral' }} className="col-md-3">
                    <DashSideBar />
                </div>
                <div style={{ backgroundColor: 'aliceblue' }} className="col-md-9">
                    <Order />
                </div>
            </div>
        </div>
    );
};

export default DashBoard;