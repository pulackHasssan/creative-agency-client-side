import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
// import { Link } from 'react-router-dom';
import "./Navigation.css";

const Navigation = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
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
      <Nav.Link>Our Team</Nav.Link>
      <Nav.Link><Link to='/login'><button className="main-button">Log In</button></Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    );
};

export default Navigation;