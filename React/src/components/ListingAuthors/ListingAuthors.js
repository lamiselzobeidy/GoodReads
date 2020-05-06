// import React from 'react';
// import { CardColumns, CardGroup, Card } from 'react-bootstrap';
// import { Button, Icon, Label } from 'semantic-ui-react'
// import "./ListingAuthors.css"
// const src = 'https://react.semantic-ui.com/images/wireframe/white-image.png'
// function ListingAuthors(props) {
//     return (
//         <Card.Group itemsPerRow={4}>
//         <Card color='red' image={src} />
//         <Card color='orange' image={src} />
//         <Card color='yellow' image={src} />
//         <Card color='olive' image={src} />
//         <Card color='green' image={src} />
//         <Card color='teal' image={src} />
//         <Card color='blue' image={src} />
//         <Card color='violet' image={src} />
//         <Card color='purple' image={src} />
//         <Card color='pink' image={src} />
//         <Card color='brown' image={src} />
//         <Card color='grey' image={src} />
//       </Card.Group>
//     );
// }

// export default ListingAuthors;

import React from 'react'
import { Card } from 'semantic-ui-react'
const src = 'https://react.semantic-ui.com/images/wireframe/white-image.png'
const ListingAuthors = () => (
    <Card.Group itemsPerRow={4}>
    <Card color='red' image={src} />
    <Card color='orange' image={src} />
    <Card color='yellow' image={src} />
    <Card color='olive' image={src} />
    <Card color='green' image={src} />  
    <Card color='teal' image={src} />
    <Card color='blue' image={src} />
    <Card color='violet' image={src} />
    <Card color='purple' image={src} />
    <Card color='pink' image={src} />
    <Card color='brown' image={src} />
    <Card color='grey' image={src} />
  </Card.Group>
)

export default ListingAuthors
