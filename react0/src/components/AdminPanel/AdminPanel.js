import React, { useEffect } from 'react'
import { Nav, Tabs, Tab } from 'react-bootstrap'
import './AdminPanel.css'
import AdminCatogries from './AdminCatogries/AdminCatogries'
import AdminBooks from './AdminBooks/AdminBooks'
import AdminAuthors from './AdminAuthors/AdminAuthors'
import { Icon } from 'semantic-ui-react';

const AdminPanel = () => {

    useEffect(()=>{
        if (JSON.parse(sessionStorage.getItem("user"))) {
            if (!JSON.parse(sessionStorage.getItem("user")).isAdmin) {
                window.location = '/adminlogin'
            }
        }else{
            window.location = '/adminlogin'
        }
    },[])
    return (
        <div className="mainDiv">

            <Tabs defaultActiveKey="Books" transition={false} id="noanim-tab-example">
                <Tab eventKey="Books" title="Books">
                    <AdminBooks></AdminBooks>
                </Tab>
                <Tab eventKey="Catogries" title="Catogries">
                    <AdminCatogries></AdminCatogries>
                </Tab>
                
                <Tab eventKey="Authors" title="Authors" >
                    <AdminAuthors></AdminAuthors>
                </Tab>
            </Tabs>
        </div>
    );
}

export default AdminPanel
