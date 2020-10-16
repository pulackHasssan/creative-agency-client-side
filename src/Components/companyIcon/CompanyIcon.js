import React from 'react';
import './CompanyIcon.css';

const CompanyIcon = () => {
    return (
        <section className='container py-5'>
            <div className="d-flex justify-content-around flex-wrap">
                <img className="img-fluid img-style" src="https://i.ibb.co/tpFtYCn/google.png" alt="google" />
                <img className="img-fluid img-style" src="https://i.ibb.co/rMj0yTR/netflix.png" alt="netflix" />
                <img className="img-fluid img-style" src="https://i.ibb.co/mRrh70q/uber.png" alt="uber" />
                <img className="img-fluid img-style" src="https://i.ibb.co/dMDZm6H/slack.png" alt="slack" />
                <img className="img-fluid img-style" src="https://i.ibb.co/FsFrrbD/airbnb.png" alt="airbnb" />
            </div>
        </section>
    );
};

export default CompanyIcon;