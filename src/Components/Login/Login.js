import React, { useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import './Login.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
const Login = () => {
     const [loggedInUser, setLoggedInUser] = useContext(userContext);
     let history = useHistory();
     let location = useLocation();
     let { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result=> {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email: email};
            setLoggedInUser(signedInUser)
            history.replace(from)
          })
          .catch(error=> {
              console.log(error)
          });
          
    }

    return (
        <div className="container text-center">
            <Link to="/home"><img className='img-fluid' src="https://i.ibb.co/0cfhDzK/logo.png" alt="Logo"/></Link>
            <div className="login-container">
                <div className="login-style">
                <h4>Log in with</h4>
                <br/>
                <button className="login-button" onClick={handleGoogleSignIn}><FontAwesomeIcon className="w-4 text-success" icon={faArrowAltCircleRight}/> Continue with google</button>
                {loggedInUser.email && <p className='text-success'>You are logged in as {loggedInUser.email}</p>}
                <p>Don't have an account? <a href="www.gmail.com">create an account.</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;