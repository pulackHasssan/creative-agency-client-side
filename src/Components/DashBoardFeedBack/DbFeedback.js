import React from 'react';
import DashReview from '../DashReview/DashReview';
import DashSideBar from '../DashSideBar/DashSideBar';
import './Dbfeedback.css';
const DbFeedback = () => {
    return (
        <div className="container">
            <div style={{ minHeight: '650px' }} className="row container-fluid">
                <div style={{ backgroundColor: 'lightcoral' }} className="col-md-3">
                    <DashSideBar />
                </div>
                <div style={{ backgroundColor: 'aliceblue' }} className="col-md-9">
                    <DashReview />
                </div>
            </div>
        </div>

    );
};

export default DbFeedback;