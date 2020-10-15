import React, { useContext } from 'react';
import { userContext } from '../../App';
import './Order.css';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div>
            <div style={{paddingBottom:'20px'}} className="d-flex">
                <h4 className='mr-auto'>Order</h4>
                <p className="ml-auto">{loggedInUser.name}</p>
            </div>
            <div className="form-style">
                <form action="">
                    <input className="order-input" type="text" placeholder="Your Name" defaultValue={loggedInUser.name}/>
                    <br/>
                    <br/>
                    <input className="order-input" type="email" placeholder="Your Email Address" defaultValue={loggedInUser.email}/>
                    <br/>
                    <br/>
                    <input className="order-input" type="text" placeholder="Service Name"/>
                    <br/>
                    <br/>
                    <input className="order-input" type="text" placeholder="Project Details"/>
                    <br/>
                    <br/>
                    <input className="order-input" className="mr-2" type="text" placeholder="Price"/>
                    <input type="file"/>
                    <br/>
                    <br/>
                    <input className="main-button" type="submit" value="Submit Order"/>
                </form>
            </div>

        </div>
    );
};

export default Order;