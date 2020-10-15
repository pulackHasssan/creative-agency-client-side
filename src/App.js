import React, { createContext, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './Components/Login/Login';
import DashBoard from './Components/DashBoard/DashBoard';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import DbFeedback from './Components/DashBoardFeedBack/DbFeedback';
import DbServiceList from './Components/DashBoardService/DbServiceList';

 export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
          <Home/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/dashboard/order'>
            <DashBoard/>
          </Route>
          <Route path='/dashboard/review'>
            <DbFeedback/>
          </Route>
          <Route path='/dashboard/Servicelist'>
            <DbServiceList/>
          </Route>
          <Route path='*'>
            <ErrorPage/>
          </Route>
        </Switch>
      </Router>
     
    </userContext.Provider>
  );
}

export default App;
