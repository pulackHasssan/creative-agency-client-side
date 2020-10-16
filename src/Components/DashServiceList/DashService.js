import React from 'react';
import "./DashServiceList.css";

const DashService = (props) => {
    const { order, time } = props.serve;

    return (
        <div className='dash-service-style float-left mr-2'>
            <h5>{order.service}</h5>
            <p>{order.details}</p>
            <p><small>{time}</small></p>
        </div>
    );
};

export default DashService;