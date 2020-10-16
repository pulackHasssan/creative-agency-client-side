import React, { useContext } from 'react';
import { userContext } from '../../App';
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const adminDetails = { name: data.name, email: data.email }
        fetch('https://fast-eyrie-63772.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Admin added successfully.')
                }
            })
    }
    return (
        <div>
            <div style={{ paddingBottom: '20px' }} className="d-flex">
                <h4 className='mr-auto'>Make Admin</h4>
                <p className="ml-auto">{loggedInUser.email}</p>
            </div>
            <div>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name='name' placeholder='Admin Name' ref={register({ required: true })} />
                    <br />
                    {errors.name && <span style={{ color: 'red' }}>This field is required <br /></span>}
                    <br />
                    <input type="text" name='email' placeholder='Admin Email' ref={register({ required: true })} />
                    <br />
                    {errors.email && <span style={{ color: 'red' }}>This field is required <br /></span>}
                    <br />
                    <input type="submit" value="Make Admin" className='main-button' />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;