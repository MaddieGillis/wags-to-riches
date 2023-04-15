import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import adopt from '../assets/images/whitedog-adopt.jpg';


function About() {
  return (

    <Container id="card-container" style={{  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card style={{ width: '18rem', height: '18rem' }}>
        <Card.Img variant="top" id="card1" src={adopt} />
        <Card.Body>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', height: '18rem' }}>
        <Card.Img variant="top" id="card1" src={adopt} />
        <Card.Body className="d-flex flex-column justify-content-center">
          <Button id="adopt-me-btn">Adopt Me!</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', height: '18rem' }}>
        <Card.Img variant="top" id="card1" src={adopt} />
        <Card.Body>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;