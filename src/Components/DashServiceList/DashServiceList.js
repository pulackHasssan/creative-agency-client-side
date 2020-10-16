import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import DashService from './DashService';
import './DashServiceList.css';

const DashServiceList = () => {
    const [serves, setServes] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    useEffect(()=>{
        fetch('https://fast-eyrie-63772.herokuapp.com/order?email='+ loggedInUser.email)
        .then(res=> res.json())
        .then(data=> setServes(data))
        .catch(error =>{
            console.log(error)
        })
    }, [])


    return (
        <div>
            <div style={{paddingBottom:'20px'}} className="d-flex">
                <h4 className='mr-auto'>Service List</h4>
                <p className="ml-auto">{loggedInUser.name}</p>
            </div>
           <div>
           {
                serves.map(serve =><DashService serve={serve} key={serve._id}></DashService>)
            }
           </div>
        </div>
    );
};

export default DashServiceList;