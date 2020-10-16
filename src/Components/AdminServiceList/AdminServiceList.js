import React, { useContext} from 'react';
import { userContext } from '../../App';

const AdminServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
  
    
   

    return (
        <div>
            <div style={{paddingBottom:'20px'}} className="d-flex">
                <h4 className='mr-auto'>All Services</h4>
                <p className="ml-auto">{loggedInUser.email}</p>
            </div>
        </div>
    );
};

export default AdminServiceList;