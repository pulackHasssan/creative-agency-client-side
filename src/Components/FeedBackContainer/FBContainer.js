import React from 'react';
import "./FBContainer.css";
const FBContainer = (props) => {
    const {user, email, description} = props.feedback;
  
    return (
                <div className='feedback-container-style'>
                <h3>{user}</h3>
                <h6>{email}</h6>
                <p>{description}</p>
            </div>
    );
};

export default FBContainer;