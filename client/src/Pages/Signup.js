import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Signup() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    password: "",
    passwordConfirmation: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, username, password, passwordConfirmation } = formState;

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

  function handleSubmit(e) {
    e.preventDefault();
    //send data to the backend
    fetch("http://localhost:3003/signup", { body: JSON.stringify(formState), method: "POST", headers: { "Content-type": "application/json" } })
      .then((res) => res.json())
      .then(console.log)
      .catch(console.error);
  }

  return (
    <section className="container">
      <h2 data-testid="h1tag" className="top-title">
        Sign Up to Start Searching for Dogs!
      </h2>
      <hr></hr>
      <form class="justify-content-center" id="contact-form">
        <div class="mt-5">
          <label htmlFor="name">Name:</label>
          <input class="form-control" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div class="mt-5">
          <label htmlFor="email">Email Address:</label>
          <input class="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div class="mt-5">
          <label htmlFor="email">Username:</label>
          <input class="form-control" type="username" name="username" defaultValue={username} onBlur={handleChange} />
        </div>
        <div class="mt-5">
          <label htmlFor="email">Password :</label>
          <input class="form-control" type="password" name="password" defaultValue={password} onBlur={handleChange} />
        </div>
        <div class="mt-5">
          <label htmlFor="email">Password Confirmation:</label>
          <input class="form-control" type="password" name="passwordConfirmation" defaultValue={passwordConfirmation} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

        <div class="mt-5 mb-5">
          <button id="signup-btn" data-testid="button" class="btn btn-outline-dark" type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </form>
    </section>
  );
}

export default Signup;
