import React from 'react';
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AdminService = () => {
    return (
        <div  className="container">
        <div style={{minHeight:'650px'}} className="row container-fluid">
            <div style={{backgroundColor: "#aa5555"}} className="col-md-3">
                <AdminSidebar></AdminSidebar>
            </div>
            <div style={{backgroundColor: '#00b050'}} className="col-md-9">
                    <AdminServiceList></AdminServiceList>
            </div>
        </div>
        </div>
    );
};

export default AdminService;