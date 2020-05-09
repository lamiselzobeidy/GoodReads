import React from 'react'
import './test.css'
import { Card, Image, Button } from 'semantic-ui-react';

var i = 0;
const colorPicker = () => {
    
    const colors = ["yellow", "green", "red",
         "blue", "red", "orange", "olive", "teal", "pink",
        "black", "violet"]
         i= i+1;

         return colors[i]
}

const ListingAuthors = () => (

    <div className='hi' >
        <p className="paragraphs">All Authors</p>
        <Card.Group itemsPerRow={5} >
            <Card  >
                <Card.Content>
                    <Card.Header  >Steve Sanders</Card.Header>
                    <Card.Meta>Friends of Elliot</Card.Meta>
                    <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color={colorPicker()}>
                            Show Profile
          </Button>
                    </div>
                </Card.Content>
            </Card>
            <Card >
                <Card.Content>
                    <Card.Header>Steve Sanders</Card.Header>
                    <Card.Meta>Friends of Elliot</Card.Meta>
                    <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color={colorPicker()}>
                            Show Profile
          </Button>
                    </div>
                </Card.Content>
            </Card>
            <Card >
                <Card.Content>
                    <Card.Header>Steve Sanders</Card.Header>
                    <Card.Meta>Friends of Elliot</Card.Meta>
                    <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color={colorPicker()}>
                            Show Profile
          </Button>
                    </div>
                </Card.Content>
            </Card>
            <Card >
                <Card.Content>
                    <Card.Header>Steve Sanders</Card.Header>
                    <Card.Meta>Friends of Elliot</Card.Meta>
                    <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color={colorPicker()}>
                            Show Profile
          </Button>
                    </div>
                </Card.Content>
            </Card>
            <Card >
                <Card.Content>
                    <Card.Header>Steve Sanders</Card.Header>
                    <Card.Meta>Friends of Elliot</Card.Meta>
                    <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color={colorPicker()}>
                            Show Profile
          </Button>
                    </div>
                </Card.Content>
            </Card>
            <Card >
                <Card.Content>
                    <Card.Header>Steve Sanders</Card.Header>
                    <Card.Meta>Friends of Elliot</Card.Meta>
                    <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color={colorPicker()}>
                            Show Profile
          </Button>
                    </div>
                </Card.Content>
            </Card>
            <Card >
                <Card.Content>
                    <Card.Header>Steve Sanders</Card.Header>
                    <Card.Meta>Friends of Elliot</Card.Meta>
                    <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color={colorPicker()}>
                            Show Profile
          </Button>
                    </div>
                </Card.Content>
            </Card>
            <Card >
                <Card.Content>
                    <Card.Header>Steve Sanders</Card.Header>
                    <Card.Meta>Friends of Elliot</Card.Meta>
                    <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color={colorPicker()}>
                            Show Profile
          </Button>
                    </div>
                </Card.Content>
            </Card>
            <Card >
                <Card.Content>
                    <Card.Header>Steve Sanders</Card.Header>
                    <Card.Meta>Friends of Elliot</Card.Meta>
                    <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color={colorPicker()}>
                            Show Profile
          </Button>
                    </div>
                </Card.Content>
            </Card>
            <Card >
                <Card.Content>
                    <Card.Header>Steve Sanders</Card.Header>
                    <Card.Meta>Friends of Elliot</Card.Meta>
                    <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color={colorPicker()}>
                            Show Profile
          </Button>
                    </div>
                </Card.Content>
            </Card>
            <Card >
                <Card.Content>
                    <Card.Header>Steve Sanders</Card.Header>
                    <Card.Meta>Friends of Elliot</Card.Meta>
                    <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color={colorPicker()}>
                            Show Profile
          </Button>
                    </div>
                </Card.Content>
            </Card>


        </Card.Group>
    </div>

)


export default ListingAuthors
