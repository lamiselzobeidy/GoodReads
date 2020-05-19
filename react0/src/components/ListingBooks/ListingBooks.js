import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Card, Image, Button, Icon } from 'semantic-ui-react';
import './ListingBooks.css'

const ListingBooks = () => {
    const [books,setBooks] = useState([])
    useEffect(() => {
        axios.get("http://34.107.102.252:3000/book/")
            .then(res => {
                console.log(res.data);
                
                setBooks(res.data);
            })
            .catch(err => {
                console.log(err);

            })

    }, [])

    return (

        <Card.Group itemsPerRow={4} className="container mt-5">

            {
                books.map(book=>(

                    <Card >
                    <Image src='https://www.booktopia.com.au/blog/wp-content/uploads/2018/12/the-arsonist.jpg' wrapped ui={false} />
                    <Card.Content>
                <Card.Header>{book.bookName}</Card.Header>
                        <Card.Meta>{book.authorId.firstName +" " + book.authorId.lastName}</Card.Meta>
                        <Card.Meta>{book.catId.categoryName}</Card.Meta>
                        <Card.Description>
                            {book.brief}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='book' />
                            More details
                         </a>
                    </Card.Content>
                </Card>


                ))
            }

          
            <Card>
                <Image src='https://www.booktopia.com.au/blog/wp-content/uploads/2018/12/the-arsonist.jpg' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Daniel</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>
                        Daniel is a comedian living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='book' />
                        More details
                     </a>
                </Card.Content>
            </Card>
            <Card>
                <Image src='https://www.booktopia.com.au/blog/wp-content/uploads/2018/12/the-arsonist.jpg' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Daniel</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>
                        Daniel is a comedian living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='book' />
                        More details
                     </a>
                </Card.Content>
            </Card>
            <Card>
                <Image src='https://www.booktopia.com.au/blog/wp-content/uploads/2018/12/the-arsonist.jpg' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Daniel</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>
                        Daniel is a comedian living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='book' />
                        More details
                     </a>
                </Card.Content>
            </Card>
            <Card>
                <Image src='https://www.booktopia.com.au/blog/wp-content/uploads/2018/12/the-arsonist.jpg' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Daniel</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>
                        Daniel is a comedian living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='book' />
                        More details
                     </a>
                </Card.Content>
            </Card>
            <Card>
                <Image src='https://www.booktopia.com.au/blog/wp-content/uploads/2018/12/the-arsonist.jpg' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Daniel</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>
                        Daniel is a comedian living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='book' />
                        More details
                     </a>
                </Card.Content>
            </Card>

        </Card.Group>




    );

}

export default ListingBooks