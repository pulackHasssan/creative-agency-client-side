import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="full-footer">
            <div className="container">
            <div className="row main-footer-style">
                <div className="col-md-5 col-sm-12 text-sm-center m-auto">
                    <h2>Let us handle your <br/>project professionally.</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti enim in deserunt!</p>
                </div>
                <div className="col-md-7 col-sm-12 m-auto">
                    <form action="">
                        <input className="form-input-style" type="email" placeholder="Enter your email"/>
                        <br/>
                        <br/>
                        <input className="form-input-style" type="text" placeholder="Your name/ company name"/>
                        <br/>
                        <br/>
                        <textarea className="form-input-style" name="" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                        <br/>
                        <br/>
                         <input className="main-button" type="submit" value="Send"/>   
                    </form>
                </div>
            </div>
            <p className="text-center"><small>All right are reserved</small></p>
            </div>
                
        </footer>
    );
};

export default Footer;