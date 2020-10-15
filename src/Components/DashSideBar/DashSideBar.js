import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faShoppingBasket, faComments } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './DashSideBar.css';
const DashSideBar = () => {
    return (
        <div>
            <Link to='/home'><img style={{width:'100px', paddingBottom:'50px'}} src="https://i.ibb.co/0cfhDzK/logo.png" alt="Logo"/></Link>
            <ul>
                <li><Link to='/dashboard/order' className="link-style"><FontAwesomeIcon icon={faShoppingCart}/> Order</Link></li>
                <li><Link to='/dashboard/Servicelist' className="link-style"><FontAwesomeIcon icon={faShoppingBasket}/> Service List</Link></li>
                <li><Link to='/dashboard/review' className="link-style"><FontAwesomeIcon icon={faComments}/> Review</Link></li>
            </ul>

        </div>
    );
};

export default DashSideBar;