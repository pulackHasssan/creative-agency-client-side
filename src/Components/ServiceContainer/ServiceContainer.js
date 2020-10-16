import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceContainer.css';

const ServiceContainer = (props) => {
    const { name, description, photo } = props.service;
    return (
        <div className='service-container-style'>
            <Link to='/dashboard/order' className='service-link-style'>
                <img className="img-fluid" src={photo} alt="" />
                <h5>{name}</h5>
                <p>{description}</p>
            </Link>
        </div>
    );
};

export default ServiceContainer;