import React from 'react'
import {CardDeck , Card} from 'react-bootstrap'
import "./ListingCatogries.css"


const ListingCatogries =()=>
{
return(
  <div className="w-75 rowControlSize">
     
     <CardDeck className="desk">
     
     <Card className="cardBody">
       <Card.Img variant="top" className="w-100" src="data:image/jpeg;base64,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" />
       <Card.Body>
         <Card.Title>Card title</Card.Title>
       
       </Card.Body>
       <Card.Footer>
         <small className="text-muted">Last updated 3 mins ago</small>
       </Card.Footer>
     </Card>
     <Card className="cardBody">
       <Card.Img variant="top" className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmI8vDtZFt540yN9BsxKmxDt44iAJM7xZRp3lWIBWZ-BlLU6b8&usqp=CAU" />
       <Card.Body>
         <Card.Title>Card title</Card.Title>
       
       </Card.Body>
       <Card.Footer>
         <small className="text-muted">Last updated 3 mins ago</small>
       </Card.Footer>
     </Card>
     <Card className="cardBody">
       <Card.Img variant="top" className="w-100" src="https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg" />
       <Card.Body>
         <Card.Title>Card title</Card.Title>
       
       </Card.Body>
       <Card.Footer>
         <small className="text-muted">Last updated 3 mins ago</small>
       </Card.Footer>
     </Card>
     <Card className="cardBody">
       <Card.Img variant="top" className="w-100" src="https://thumbs.dreamstime.com/b/silhouette-illustration-romantic-couple-have-proposal-marriage-silhouette-illustration-romantic-couple-have-proposal-121305552.jpg" />
       <Card.Body>
         <Card.Title>Card title</Card.Title>
     
       </Card.Body>
       <Card.Footer>
         <small className="text-muted">Last updated 3 mins ago</small>
       </Card.Footer>
     </Card>
     
   </CardDeck>
  </div>
  
);

}

export default ListingCatogries