import React from 'react';
import AddService from '../AddService/AddService';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AdminAddService = () => {
    return (
        <div  className="container">
        <div style={{minHeight:'650px'}} className="row container-fluid">
            <div style={{backgroundColor: "#aa5555"}} className="col-md-3">
                <AdminSidebar></AdminSidebar>
            </div>
            <div style={{backgroundColor: '#00b050'}} className="col-md-9">
                    <AddService></AddService>
            </div>
        </div>
        </div>
    );
};

export default AdminAddService;