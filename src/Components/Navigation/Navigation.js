import React, { useContext, useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
// import { Link } from 'react-router-dom';
import "./Navigation.css";

const Navigation = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(()=>{
    fetch('https://fast-eyrie-63772.herokuapp.com/checkAdmin', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify({email: loggedInUser.email})
  })
  .then(res=> res.json())
  .then(data=> setIsAdmin(data))  
  },[])

    return (
            <Navbar className="nav-text" bg="" expand="lg">
                <Navbar.Brand> 
                   <Link to='/home'><img style={{width: '100px'}} src="https://i.ibb.co/0cfhDzK/logo.png" alt="logo"/></Link>
                </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav justify className="ml-auto">
    <Nav.Link className='user-name' disabled>{loggedInUser.name}</Nav.Link>
      <Nav.Link>Home</Nav.Link>
      <Nav.Link>Our Portfolio</Nav.Link>
      <Nav.Link>Contact Us</Nav.Link>
      {isAdmin &&<Nav.Link><Link to='/admin/services' className="panel-link-style">Admin Panel</Link></Nav.Link>}
      <Nav.Link><Link to='/login'><button className="main-button">Log In</button></Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    );
};

export default Navigation;