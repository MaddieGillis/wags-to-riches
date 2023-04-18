import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import { useMutation } from "@apollo/client";
import Auth from "../utils/Auth"
import { LOGIN_USER } from "../graphql/mutations";

function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });

  const [errorMessage, setErrorMessage] = useState("");

  const { email, password } = formState;

  const [login, { error }] = useMutation(LOGIN_USER, {onCompleted:(data) => {
    Auth.login(data.login.token);
  }});

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
      } 
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  // function handleSubmit(e) {
    
  // //   e.preventDefault();
  // //   fetch("http://localhost:3003/login", { body: JSON.stringify(formState), method: "POST", headers: { "Content-type": "application/json", "Access-Control-Allow-Origin": "*"
  // // } })
  // //     .then((res) => res.json())
  // //     .then(({ result }) => {
  // //       console.log(result);
  // //       const { token, user } = result;
  // //       if (!token) {
  // //         throw new Error("Error: login failed");
  // //       }

  // //       localStorage.setItem("store", JSON.stringify({ appVersion: "1.0", user, token }));
  // //     });
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
     await login({
        variables: { ...formState }
      });

      

    } catch (err) {
      console.error(err);
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
       Login
      </h2>
      <hr></hr>
      <form class="justify-content-center" id="contact-form">
        <div class="mt-5">
          <label htmlFor="name">Email:</label>
          <input class="form-control" type="text" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div class="mt-5">
          <label htmlFor="email">Password</label>
          <input class="form-control" type="password" name="password" defaultValue={password} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

          <div class="mt-5 mb-5">
          <button id="btn" data-testid="button" class="btn btn-outline-dark" type="submit" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </form>
    </section>
  );
}

export default Login;
