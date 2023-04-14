import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import adopt from '../assets/images/whitedog-adopt.png';


function Donate() {
  return (
    <Card style={{ width: '18rem', height: '18rem' }}>

      <Card.Img variant="top" id="card1" src={adopt} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Looking for a new addition to your family?
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>

      <Card.Img variant="top" id="card1" src={adopt} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Looking for a new addition to your family?
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>

      <Card.Img variant="top" id="card1" src={adopt} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Looking for a new addition to your family?
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>



    </Card>

    
  );
}

export default Donate;