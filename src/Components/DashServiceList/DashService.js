import React from 'react';
import "./DashServiceList.css";

const DashService = (props) => {
    const {service, description} = props.serve; 
    return (
        <div className='dash-service-style float-left mr-2'>
           <h5>{service}</h5>
           <p>{description}</p>
        </div>
    );
};

export default DashService;