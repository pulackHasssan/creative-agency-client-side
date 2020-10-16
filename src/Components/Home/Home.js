import React from 'react';
import CompanyIcon from '../companyIcon/CompanyIcon';
import FeedBack from '../feedBack/FeedBack';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurProject from '../OurProject/OurProject';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header />
            <CompanyIcon />
            <Service />
            <OurProject />
            <FeedBack />
            <Footer />
        </div>
    );
};

export default Home;