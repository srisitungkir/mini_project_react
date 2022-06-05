import React from "react";
import { Card, Button } from "react-bootstrap";

const CardComponent = (props) => {
  console.log(props);
  return (
    <Card className="card_component">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Rp. {props.price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
