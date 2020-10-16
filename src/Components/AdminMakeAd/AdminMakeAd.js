import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const AdminMakeAd = () => {
    return (
        <div  className="container">
        <div style={{minHeight:'650px'}} className="row container-fluid">
            <div style={{backgroundColor: "#aa5555"}} className="col-md-3">
                <AdminSidebar></AdminSidebar>
            </div>
            <div style={{backgroundColor: '#00b050'}} className="col-md-9">
                   <MakeAdmin></MakeAdmin>
            </div>
        </div>
        </div>
    );
};

export default AdminMakeAd;