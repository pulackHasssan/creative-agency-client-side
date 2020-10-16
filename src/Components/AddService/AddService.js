import React, { useContext } from 'react';
import { userContext } from '../../App';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div>
              <div>
            <div style={{paddingBottom:'20px'}} className="d-flex">
                <h4 className='mr-auto'>Add Service</h4>
                <p className="ml-auto">{loggedInUser.email}</p>
            </div>
        </div>
        </div>
    );
};

export default AddService;