import React, {useState, useEffect} from "react";

import axios from "axios";
import {MDBCol, MDBFormInline, MDBBtn, MDBInput, MDBContainer, MDBRow, MDBInputGroup} from "mdbreact";

import "./SearchPage.css";
import {Card, Icon, Image} from "semantic-ui-react";

export default function SearchPage() {

    const getBooks = (bookname) => {
        axios
            .get(`http://34.107.102.252:3000/search/searchbook/${bookname}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setResults(res.data);
                setCardType(1);
            });
    };

    const getAuthors = (authorname) => {
        axios
            .get(`http://34.107.102.252:3000/search/searcauthor/${authorname}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setResults(res.data);
                setCardType(2);
            });
    };

    const getCategories = (categoryname) => {
        axios
            .get(`http://34.107.102.252:3000/search/searchcategory/${categoryname}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setResults(res.data);
                setCardType(3);
            });
    };

    const searchCall = (operation, searchName) => {
        console.log(operation, searchName);
        if (operation === 1) {
            getBooks(searchName);
        } else if (operation === 2) {
            getAuthors(searchName);
        } else if (operation === 3) {
            getCategories(searchName);
        } else {
            alert("Operation not valid")
        }
    };

    const [Radiobutton, setRadioButton] = useState(1);
    const [searchedResults, setResults] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [cardType, setCardType] = useState(0);
    return (
        <MDBContainer>

            <MDBRow md="12">
                <MDBFormInline className="md-form mr-auto mb-4">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search"
                           aria-label="Search" onChange={(e) => setSearchName(e.target.value)}/>
                    <MDBBtn gradient="aqua" rounded size="sm" type="button" className="mr-auto"
                            onClick={() => searchCall(Radiobutton, searchName)}>
                        Search
                    </MDBBtn>
                </MDBFormInline>
            </MDBRow>
            <MDBRow>
                <MDBCol md="6">
                    <MDBRow className="mb-4">
                        <MDBInput
                            onClick={() => setRadioButton(1)}
                            checked={Radiobutton === 1 ? true : false}
                            label='Books'
                            type='radio'
                            id='radio1'
                            containerClass='mr-5'
                        />
                    </MDBRow>

                    <MDBRow className="mb-4">
                        <MDBInput
                            onClick={() => setRadioButton(2)}
                            checked={Radiobutton === 2 ? true : false}
                            label='Authors'
                            type='radio'
                            id='radio2'
                            containerClass='mr-5'
                        />
                    </MDBRow>

                    <MDBRow className="mb-4">
                        <MDBInput
                            onClick={() => setRadioButton(3)}
                            checked={Radiobutton === 3 ? true : false}
                            label='Category'
                            type='radio'
                            id='radio3'
                            containerClass='mr-5'
                        />
                    </MDBRow>

                </MDBCol>

                <MDBRow>

                    {searchedResults.map(items => {
                        let img = "";
                        let header = "";
                        let info = "";
                        if (cardType === 1) {
                            img = items.coverImageName;
                            header = items.bookName;
                            info = items.brief
                        }
                        if (cardType === 2) {
                            img = items.authorImage;
                            header = items.fullName;
                            info = items.bio;
                        }
                        if (cardType === 3) {
                            img = null;
                            header = items.categoryName;
                            info = items.summary;
                        }
                        return (
                            <MDBCol md="4">
                                <Card>
                                    <Image
                                        src={img}
                                        wrapped
                                        ui={false}/>
                                    <Card.Content>
                                        <Card.Header>
                                            {header}
                                        </Card.Header>
                                        <Card.Description>
                                            {info}
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <a>
                                            <Icon name='book'/>
                                            More details
                                        </a>
                                    </Card.Content>
                                </Card>
                            </MDBCol>
                        )
                    })}
                </MDBRow>

            </MDBRow>

        </MDBContainer>


    );

}

