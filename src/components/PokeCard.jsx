import React from 'react';
import { Card } from 'react-bootstrap';

const PokeCard = ({ id, name, image }) => {
  return (
    <Card className='my-2 border-0'>
      <Card.Img variant="top" src={image} />
      <Card.Body className='text-center'>
        <Card.Title>{name}</Card.Title>
        <Card.Text>#{id}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PokeCard;
