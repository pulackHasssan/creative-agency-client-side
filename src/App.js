import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import DashBoard from './Components/DashBoard/DashBoard';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import DbFeedback from './Components/DashBoardFeedBack/DbFeedback';
import DbServiceList from './Components/DashBoardService/DbServiceList';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AdminService from './Components/AdminService/AdminService';
import AdminAddService from './Components/AdminAddService/AdminAddService';
import AdminMakeAd from './Components/AdminMakeAd/AdminMakeAd';
import './App.css';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/admin/services'>
            <AdminService />
          </PrivateRoute>
          <PrivateRoute path='/admin/addService'>
            <AdminAddService />
          </PrivateRoute>
          <PrivateRoute path='/admin/makeAdmin'>
            <AdminMakeAd />
          </PrivateRoute>
          <PrivateRoute path='/dashboard/order'>
            <DashBoard />
          </PrivateRoute>
          <PrivateRoute path='/dashboard/review'>
            <DbFeedback />
          </PrivateRoute>
          <PrivateRoute path='/dashboard/servicelist'>
            <DbServiceList />
          </PrivateRoute>
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
