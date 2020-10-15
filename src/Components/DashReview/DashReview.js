import React, { useContext } from 'react';
import { userContext } from '../../App';

const DashReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div>
            <div style={{paddingBottom:'20px'}} className="d-flex">
                <h4 className='mr-auto'>Write a review</h4>
                <p className="ml-auto">{loggedInUser.name}</p>
                </div>
                <div>
                    <form action="">
                        <input className="review-input" type="text" placeholder="Enter your name"/>
                        <br/>
                        <br/>
                        <input className="review-input" type="email" placeholder="Your email"/>
                        <br/>
                        <br/>
                        <textarea className="review-input" placeholder="Write review"></textarea>
                        <br/>
                        <br/>
                        <input className="main-button" type="submit" value="Post review"/>
                    </form>
                </div>
             </div>
    );
};

export default DashReview;