import React from 'react';
import {Table} from 'react-bootstrap'
import '../AdminCatogries/AdminCatogries.css'
import { Icon } from 'semantic-ui-react';

function AdminAuthors() {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Photo</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                        <th>Actions</th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Otto</td>
                        <td>Otto</td>
                        <td><a>
                            <Icon name='edit' />
                            </a>
                            <a>
                            <Icon name='delete' />
                            </a>
                        </td>
                      
                       
                    </tr>

                </tbody>
            </Table>

        </div>
    );
}

export default AdminAuthors;