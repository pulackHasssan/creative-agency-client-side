import React, { useContext } from 'react';
import { userContext } from '../../App';
import { useForm } from "react-hook-form";
import './Order.css';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const orderDetails = { ...loggedInUser, order: data, time: new Date().toDateString('dd/mm/yyyy') }
        fetch('https://fast-eyrie-63772.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your order placed successfully.')
                }
            })
    }

    return (
        <div>
            <div style={{ paddingBottom: '20px' }} className="d-flex">
                <h4 className='mr-auto'>Order</h4>
                <p className="ml-auto">{loggedInUser.name}</p>
            </div>
            <div className="form-style">
                <form action="" onSubmit={handleSubmit(onSubmit)} >
                    <input className="order-input" type="text" name="name" placeholder="Your Name" defaultValue={loggedInUser.name} ref={register({ required: true })} />
                    <br />
                    {errors.name && <span style={{ color: 'red' }}>This field is required <br /></span>}
                    <br />
                    <input className="order-input" type="email" name="email" placeholder="Your Email Address" defaultValue={loggedInUser.email} ref={register({ required: true })} />
                    <br />
                    {errors.email && <span style={{ color: 'red' }}>This field is required<br /></span>}
                    <br />
                    <select className="order-input" type="text" name="service" placeholder="Service Name" ref={register({ required: true })}>
                        <option value="Web and Mobile Design">Web and Mobile Design</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Content Writing">Content Writing </option>
                    </select>
                    <br />
                    {errors.service && <span style={{ color: 'red' }}>This field is required<br /></span>}
                    <br />
                    <input className="order-input" type="text" name="details" placeholder="Project Details" ref={register({ required: true })} />
                    <br />
                    {errors.details && <span style={{ color: 'red' }}>This field is required<br /></span>}
                    <br />
                    <input className="order-input" name="price" type="text" placeholder="Price" ref={register} />
                    <input type="file" />
                    <br />
                    <br />
                    <input className="main-button" type="submit" value="Submit Order" />
                </form>
            </div>

        </div>
    );
};

export default Order;