import React, { useEffect, useState } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import adopt from '../assets/images/whitedog-adopt.jpg';
import logo from '../assets/images/dog-crown-logo.png';
import {GET_PETS} from '../graphql/queries';
import {useQuery} from '@apollo/client';

function About() {


// bearer token
  const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0eFQwdHkzUm5qek1xSHRMQXdLTzFJZDh6VXlmcW9hUGpGaWpXekx6dlE1akVVWW5YRCIsImp0aSI6ImNmZTEwYWRlM2VlYWJmZTE5ZGQ2NWQxNDkzNWZlMmVlOGE3NDAyYzM2YzU0MGM0ZGE4ZjNjNTE2ODM4M2MwNjA1N2E5OWM3ZGFjMjMxYmU3IiwiaWF0IjoxNjgxNDkyOTU2LCJuYmYiOjE2ODE0OTI5NTYsImV4cCI6MTY4MTQ5NjU1Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.zJ1oSxYMxR-oDLqxXHf5OwD4RyDsJxjHdEYFe2nNR4YVlizF-mNIMd_XZi-6W0hbVZdicpAmF0t_lUjLfZ_cPaHtOPbSqGiREC_kQkCgiKCTS90K_TxeMX3ZnupBt_YFbW4J5EixYE1mE4_LZ0agFPqQMqwFYStxsSbCyMFxTsr962B06S2blZUlU3-o9fbxZtEyRDDk_6yhkDlmhYjXhQTaRsd8AikL0_k4rBURFqj7Co0UUYwp4hbKKl4HyEBBFQshO6jO8SKFSZp5xhn7xa27tFbN1ln3lmHZvIvwgLWvnH7alaRfAxJqpqQNumrlneJ0bG433QtvjvMDNlobsg";

// function for getting animal data
  const [animalList, setAnimalList] = useState([]);
  const {loading, data } = useQuery(GET_PETS)
  const pets = data?.pets||[]
  // const getAnimals = async () => {
  //   const res = await fetch("http://localhost:3001/api/animals", {
  //     method: "get",
     
  //   });
 
  //   const data = await res.json();
  //   console.log("??",data)
  //   console.log("???", data.animals)
  //   setAnimalList(data.animals);

  // }
  //runs on load
  // useEffect(()=>{
  //   console.log("fetch animals")
  //   getAnimals();
   

  // },[])


  return (
    <>
      <Container id="img-container" style={{ display: 'flex', alignItems: 'center', paddingLeft: '5%' }}>
        <Card.Img id="big-logo" style={{ width: 500, height: 390, borderRadius: 400 / 3 }} src={logo} />
        <Card.Body>
          <Card.Text style={{ display: 'flex', flexDirection: 'column',  alignItems: 'center', padding: '15%' }} id="logo-text">
            <div>Ready to meet your new best friend?</div>        
            <div>Login or Signup to start searching!</div>
          </Card.Text>
        </Card.Body>
      </Container>
  
      <Container fluid id="card-container" style={{ display: 'flex', alignItems: 'center' }}>
        
        
          {console.log(pets)}
          {/* here below is how the data is mapped onto the page "a" is representing */}
          {loading === true ? 'still loading' : pets.map(a => {
            return (
              <>
              <Card className="m-2 p-4">
                <Card.Img variant="top" id="card1" src={adopt} />
                <Card.Body id="card-body">
                  <Card.Title style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>{a.name} {a.gender} {a.size} {a.type} {a.age} <p> {a.status} {a.imagePath}</p>
                  <Button id="btn" className="mt-3">Adopt Me!</Button>
                  </Card.Title>
                  
                
                </Card.Body>
                </Card>
              </>
            );
          })}
        
      </Container>
    </>
  );
  
  
}

  
export default About;
