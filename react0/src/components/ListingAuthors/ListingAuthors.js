import React, {useEffect, useState, useRef} from "react";
import "./test.css";
import {Card, Image, Button} from "semantic-ui-react";
import axios from "axios";
import Author from "../Author/Author";
import {Link} from "react-router-dom";
import PaginationCompo from "../Pagentaion/Pagentaion";

function ListingAuthors(props) {
    const [pageNumber, setPageNumber] = useState(0);
    const pageNumberHandler = (number) => {
        setPageNumber(number);
    };

    const [authors, setAuthors] = useState([]);
    const [filtered, setfiltred] = useState([]);

    useEffect(() => {
        console.log(authors);

        axios
            .get("http://34.107.102.252:3000/author")
            .then((res) => {
                setAuthors(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        const start = 5 * (pageNumber - 1);
        const end = start + 5;
        const filtred = authors.slice(start, end);
        setfiltred(filtred);
    }, [pageNumber]);

    useEffect(() => {
        const filtred = authors.slice(0, 5);
        setfiltred(filtred);
    }, [authors]);

    var i = 0;
    const colorPicker = () => {
        const colors = [
            "yellow",
            "green",
            "red",
            "blue",
            "red",
            "orange",
            "olive",
            "teal",
            "pink",
            "black",
            "violet",
        ];
        i = i + 1;
        return colors[i];
    };

    return (
        <div className="hi">
            <p className="paragraphs text-center">All Authors</p>
            <Card.Group itemsPerRow={3}>
                {filtered.map((author) => (
                    <Card>
                        <Image
                            src={`http://34.107.102.252:3000/${author.authorImage}`}
                            wrapped
                            ui={false}
                        />
                        <Card.Content>
                            <Card.Header>
                                {author.firstName + " " + author.lastName}{" "}
                            </Card.Header>
                            <Card.Meta>{author.DateofBirth.slice(0,10)}</Card.Meta>
                            <Card.Description>{author.bio}</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className="ui two buttons">
                                <Button key={author._id} basic color={colorPicker()}>
                                    <Link
                                        to={{
                                            pathname: "/author",
                                            xy: {
                                                authorId: author._id,
                                            },
                                        }}
                                    >
                                        Show Profile
                                    </Link>
                                </Button>
                            </div>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
            <PaginationCompo
                pageNumberHandler={pageNumberHandler}
                type={1}
            ></PaginationCompo>
        </div>
    );
}

export default ListingAuthors;
