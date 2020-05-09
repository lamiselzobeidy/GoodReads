import React from 'react';
import { Table } from 'react-bootstrap'
import '../AdminCatogries/AdminCatogries.css'
import { Icon } from 'semantic-ui-react';


function AdminBooks() {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>CatogoryId</th>
                        <th>AuthorId</th>
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

export default AdminBooks;