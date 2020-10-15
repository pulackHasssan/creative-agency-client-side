import React from 'react';
import "./DashServiceList.css";

const DashService = (props) => {
    const {service, details} = props.service.order; 
    return (
        <div className='dash-service-style float-left mr-2'>
           <h5>{service}</h5>
           <p>{details}</p>
            <p><small>{props.service.time}</small></p>
        </div>
    );
};

export default DashService;