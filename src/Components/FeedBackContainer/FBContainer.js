import React from 'react';
import "./FBContainer.css";
const FBContainer = (props) => {
    const { name, email, review } = props.feedback.review;
    return (
        <div className='feedback-container-style'>
            <h3>{name}</h3>
            <h6>{email}</h6>
            <p>{review}</p>
        </div>
    );
};

export default FBContainer;