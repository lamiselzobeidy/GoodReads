import React, {useState, useEffect} from "react";
import axios from "axios";
import {Card, Image, Button, Icon} from "semantic-ui-react";
import "./ListingBooks.css";
import Pagenation from "../Pagentaion/Pagentaion";
import {Link} from "react-router-dom";

const ListingBooks = () => {
    const [filtered, setfiltred] = useState([]);
    const [books, setBooks] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const pageNumberHandler = (number) => {
        setPageNumber(number);
    };

    useEffect(() => {
        const start = 5 * (pageNumber - 1);
        const end = start + 5;
        const filtred = books.slice(start, end);
        setfiltred(filtred);
    }, [pageNumber]);

    useEffect(() => {
        const filtred = books.slice(0, 5);
        setfiltred(filtred);
    }, [books]);

    useEffect(() => {
        axios
            .get("http://34.107.102.252:3000/book/")
            .then((res) => {
                console.log(res.data);

                setBooks(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="hi">

        <p className="paragraphs text-center">All Books</p>
        <Card.Group itemsPerRow={3} className="container mt-5">
                {filtered.map((book) => (
                    <Card>
                        <Image
                            src={`http://34.107.102.252:3000/${book.coverImageName}`}
                            wrapped
                            ui={false}
                        />
                        <Card.Content>
                            <Card.Header>{book.bookName}</Card.Header>
                            <Card.Meta>
                                {book.authorId.firstName + " " + book.authorId.lastName}
                            </Card.Meta>
                            <Card.Meta>{book.catId.categoryName}</Card.Meta>
                            <Card.Description>{book.brief}</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <Link
                              to={`/bookprofile/${book._id}`}
                          >
                            Show Book
                          </Link>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
            <Pagenation pageNumberHandler={pageNumberHandler} type={2}></Pagenation>
        </div>
    );
};

export default ListingBooks;
