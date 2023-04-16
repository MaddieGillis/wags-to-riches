import React, { useEffect, useState } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import adopt from '../assets/images/whitedog-adopt.jpg';
import logo from '../assets/images/dog-crown-logo.png';


function About() {


// bearer token

  const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0eFQwdHkzUm5qek1xSHRMQXdLTzFJZDh6VXlmcW9hUGpGaWpXekx6dlE1akVVWW5YRCIsImp0aSI6ImNmZTEwYWRlM2VlYWJmZTE5ZGQ2NWQxNDkzNWZlMmVlOGE3NDAyYzM2YzU0MGM0ZGE4ZjNjNTE2ODM4M2MwNjA1N2E5OWM3ZGFjMjMxYmU3IiwiaWF0IjoxNjgxNDkyOTU2LCJuYmYiOjE2ODE0OTI5NTYsImV4cCI6MTY4MTQ5NjU1Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.zJ1oSxYMxR-oDLqxXHf5OwD4RyDsJxjHdEYFe2nNR4YVlizF-mNIMd_XZi-6W0hbVZdicpAmF0t_lUjLfZ_cPaHtOPbSqGiREC_kQkCgiKCTS90K_TxeMX3ZnupBt_YFbW4J5EixYE1mE4_LZ0agFPqQMqwFYStxsSbCyMFxTsr962B06S2blZUlU3-o9fbxZtEyRDDk_6yhkDlmhYjXhQTaRsd8AikL0_k4rBURFqj7Co0UUYwp4hbKKl4HyEBBFQshO6jO8SKFSZp5xhn7xa27tFbN1ln3lmHZvIvwgLWvnH7alaRfAxJqpqQNumrlneJ0bG433QtvjvMDNlobsg";

// function for getting animal data
  const [animalList, setAnimalList] = useState([]);

  const getAnimals = async () => {
    const res = await fetch("http://localhost:3001/api/animals", {
      method: "get",
     
    });
 
    const data = await res.json();
    console.log("??",data)
    console.log("???", data.animals)
    setAnimalList(data.animals);

  }
  //runs on load
  useEffect(()=>{
    console.log("fetch animals")
    getAnimals();
   

  },[])


  return (

    <>
    <container id="img-container" style={{  display: 'flex', justifyContent: 'left', alignItems: 'center', paddingLeft: '4%' }}>
     <Card.Img id="big-logo" style={{width: 400, height: 400, borderRadius: 400/ 2}} src={logo} />
      <Card.Body>
        <Card.Text style={{  display: 'flex', justifyContent: 'left', alignItems: 'center', paddingLeft: '4%' }}id="card-text">
          Ready to meet your new best friend?
        </Card.Text>
      </Card.Body>
      </container>


   <Container id="card-container" style={{  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Card style={{ width: '18rem', height: '18rem' }}>
    
    {/* here below is how the data is mapped onto the page "a" is representing */}
    {animalList.map(a => {

    return  <>
    
    <Card.Img variant="top" id="card1" src={adopt} />
      <Card.Body>
        <Card.Title>{a.name} {a.gender} {a.size} {a.type} {a.age}</Card.Title>
        <p> {a.status} {a.url}</p>
        <Card.Text>
          Looking for a new addition to your family?
        </Card.Text>
      </Card.Body>
    </>

    })}
      <Card.Img variant="top" id="card1" src={adopt} />
      <Card.Body>
      <Card.Title id="card-title">Name of Dog Here?</Card.Title>
        <Card.Text id="card-text">
          Looking for a new addition to your family?
        </Card.Text>
        <Button id="adopt-me-btn">Adopt Me!</Button>
      </Card.Body>

      <Card.Img variant="top" id="card1" src={adopt} />
      <Card.Body>
        <Card.Title id="card-title">Name of Dog Here?</Card.Title>
        <Card.Text style={{  display: 'flex', justifyContent: 'center', alignItems: 'center' }} id="card-text">
          Looking for a new addition to your family?
        </Card.Text>
        <Button id="adopt-me-btn">Adopt Me!</Button>
      </Card.Body>

      <Card.Img variant="top" id="card1" src={adopt} />
      <Card.Body>
      <Card.Title id="card-title">Name of Dog Here?</Card.Title>
        <Card.Text id="card-text">
          Looking for a new addition to your family?
        </Card.Text>
        <Button id="adopt-me-btn">Adopt Me!</Button>
      </Card.Body>


     
    </Card>
    </Container>

    </>
  
  );
}

  
export default About;
