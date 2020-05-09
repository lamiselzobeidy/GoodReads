import React from 'react';
import {Table} from 'react-bootstrap'
import './AdminCatogries.css'
import { Icon } from 'semantic-ui-react';

function AdminCatogries() {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
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

export default AdminCatogries;