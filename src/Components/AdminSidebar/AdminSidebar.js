import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus, faAward } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './AdminSidebar.css';

const AdminSidebar = () => {
    return (
        <div>
            <div>
                <Link to='/home'><img style={{ width: '100px', paddingBottom: '50px', marginBottom: '8px' }} src="https://i.ibb.co/0cfhDzK/logo.png" alt="Logo" /></Link>
                <h5 className='text-center text-warning'>Admin Panel</h5>
                <ul>
                    <li><Link to='/admin/services' className="link-style"><FontAwesomeIcon icon={faShoppingCart} /> Service List</Link></li>
                    <li><Link to='/admin/addService' className="link-style"><FontAwesomeIcon icon={faPlus} /> Add Service</Link></li>
                    <li><Link to='/admin/makeAdmin' className="link-style"><FontAwesomeIcon icon={faAward} /> Make Admin</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default AdminSidebar;