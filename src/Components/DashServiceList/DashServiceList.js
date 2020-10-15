import React, { useContext } from 'react';
import { userContext } from '../../App';
import DashService from './DashService';
import './DashServiceList.css';

const DashServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const serviceList = [
        {
            service: "Web & Mobile Design",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aliquam!'
        },
        {
            service: "Graphic Design",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, totam natus deleniti beatae corrupti doloremque!"
        }
    ]
    return (
        <div>
            <div style={{paddingBottom:'20px'}} className="d-flex">
                <h4 className='mr-auto'>Service List</h4>
                <p className="ml-auto">{loggedInUser.name}</p>
            </div>
            {
                serviceList.map(serve =><DashService serve={serve}></DashService>)
            }
        </div>
    );
};

export default DashServiceList;