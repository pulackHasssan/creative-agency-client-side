import React, { useContext } from 'react';
import { userContext } from '../../App';
import { useForm } from "react-hook-form";
import './DashReview.css';

const DashReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        const reviewDetails = { review: data, time: new Date() }
        fetch('https://fast-eyrie-63772.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your review added successfully.')
                }
            })

    }
    return (
        <div>
            <div style={{ paddingBottom: '20px' }} className="d-flex">
                <h4 className='mr-auto'>Write a review</h4>
                <p className="ml-auto">{loggedInUser.name}</p>
            </div>
            <div>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <input className="review-input" type="text" name="name" placeholder="Enter your name" defaultValue={loggedInUser.name} ref={register({ required: true })} />
                    <br />
                    {errors.name && <span style={{ color: 'red' }}>This field is required <br /></span>}
                    <br />
                    <input className="review-input" type="email" name="email" placeholder="Your email" defaultValue={loggedInUser.email} ref={register({ required: true })} />
                    <br />
                    {errors.name && <span style={{ color: 'red' }}>This field is required <br /></span>}
                    <br />
                    <textarea className="review-input" name="review" placeholder="Write review" ref={register({ required: true })} />
                    <br />
                    {errors.name && <span style={{ color: 'red' }}>This field is required <br /></span>}
                    <br />
                    <input className="main-button" type="submit" value="Post review" />
                </form>
            </div>
        </div>
    );
};

export default DashReview;