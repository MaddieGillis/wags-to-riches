import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../graphql/mutations";
import Auth from '../utils/Auth';

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    message: "",
    password: "",
    passwordConfirmation: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { email, username, password, passwordConfirmation } = formState;

  const [addUser, { error, data }] = useMutation(ADD_USER, {onCompleted: (data)=>{
    Auth.login(data.addUser.token);
  } });

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("Please enter a valid email address");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   //send data to the backend
  //   fetch("http://localhost:3003/signup", { body: JSON.stringify(formState), method: "POST", headers: { "Content-type": "application/json" } })
  //     .then((res) => res.json())
  //     .then(console.log)
  //     .catch(console.error);
  // }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      console.log(formState)
       await addUser({
        variables: { ...formState }
      });

      

      // const response = await createUser(userFormData);

      // if (!response.ok) {
      //   throw new Error('something went wrong!');
      // }

      // const { token, user } = await response.json();
      // console.log(user);
      // Auth.login(token);
    } catch (err) {
      console.error(err);
      //setShowAlert(true);
    }

    // setFormState({
    //   username: '',
    //   email: '',
    //   password: '',
    // });
  };

  return (
    <section className="container">
      <h2 data-testid="h1tag" className="top-title">
        Sign Up to Start Searching for Dogs!
      </h2>
      <hr></hr>
      <form class="justify-content-center" id="contact-form">
        {/* <div class="mt-5"> */}
          {/* <label htmlFor="name">Name:</label>
          <input class="form-control" type="text" name="name" defaultValue={username} onBlur={handleChange} />
        </div> */}
        <div class="mt-5">
          <label htmlFor="email">Email Address:</label>
          <input class="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div class="mt-5">
          <label htmlFor="username">Username:</label>
          <input class="form-control" type="text" name="username" defaultValue={username} onBlur={handleChange} />
        </div>
        <div class="mt-5">
          <label htmlFor="password">Password :</label>
          <input class="form-control" type="password" name="password" defaultValue={password} onBlur={handleChange} />
        </div>
        <div class="mt-5">
          <label htmlFor="passwordConfirmation">Password Confirmation:</label>
          <input class="form-control" type="password" name="passwordConfirmation" defaultValue={passwordConfirmation} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

        <div class="mt-5 mb-5">
          <button id="btn" data-testid="button" class="btn btn-outline-dark" type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </form>
    </section>
  );
}

export default Signup;
