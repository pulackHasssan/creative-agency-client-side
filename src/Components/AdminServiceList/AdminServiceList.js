import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import './AdminServiceList.css';

const AdminServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [allServices, setAllServices] = useState([]);
    useEffect(() => {
        fetch('https://fast-eyrie-63772.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])


    return (
        <div>
            <div style={{ paddingBottom: '20px' }} className="d-flex">
                <h4 className='mr-auto'>All Services</h4>
                <p className="ml-auto">{loggedInUser.email}</p>
            </div>
            <div className="table-style">
                <table>
                    <thead>
                        <th scope='col' className="text-justify">Name</th>
                        <th scope='col' className="text-justify">Email Address</th>
                        <th scope='col' className="text-justify">Service Name</th>
                        <th scope='col' className="text-justify">Order Date</th>
                    </thead>
                    <tbody>
                        {
                            allServices.map(service =>
                                <tr>
                                    <td>{service.order.name}</td>
                                    <td>{service.order.email}</td>
                                    <td>{service.order.service}</td>
                                    <td>{service.time}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminServiceList;