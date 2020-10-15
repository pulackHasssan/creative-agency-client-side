import React from 'react';
import DashServiceList from '../DashServiceList/DashServiceList';
import DashSideBar from '../DashSideBar/DashSideBar';
import './DbServiceList.css';
const DbServiceList = () => {
    return (
        <div  className="container">
        <div style={{minHeight:'650px'}} className="row container-fluid">
            <div style={{backgroundColor: 'lightcoral'}} className="col-md-3">
                 <DashSideBar></DashSideBar>
            </div>
            <div style={{backgroundColor: 'aliceblue'}} className="col-md-9">
                <DashServiceList></DashServiceList>
            </div>
        </div>
        </div>
    );
};

export default DbServiceList;