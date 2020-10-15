import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import DashService from './DashService';
import './DashServiceList.css';

const DashServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [serves, setServes] = useState([]);
    
    useEffect(()=>{
        fetch('localhost:1000/order')
        .then(res=>res.json())
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
                serves.map(service =><DashService service={service}></DashService>)
            }
           </div>
        </div>
    );
};

export default DashServiceList;