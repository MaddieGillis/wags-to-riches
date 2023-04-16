import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Login() {
  const [formState, setFormState] = useState({ emailUsername: "", password: "" });

  const [errorMessage, setErrorMessage] = useState("");

  const { emailUsername, password } = formState;

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
    fetch("http://localhost:3003/login", { body: JSON.stringify(formState), method: "POST", headers: { "Content-type": "application/json" } })
      .then((res) => res.json())
      .then(({ result }) => {
        console.log(result);
        const { token, user } = result;
        if (!token) {
          throw new Error("Error: login failed");
        }

        localStorage.setItem("store", JSON.stringify({ appVersion: "1.0", user, token }));
      });
  }

  return (
    <section className="container">
      <h2 data-testid="h1tag" className="top-title">
       Login
      </h2>
      <hr></hr>
      <form class="justify-content-center" id="contact-form">
        <div class="mt-5">
          <label htmlFor="name">Email:</label>
          <input class="form-control" type="text" name="emailUsername" defaultValue={emailUsername} onBlur={handleChange} />
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
          <button data-testid="button" class="btn btn-outline-dark" type="submit" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </form>
    </section>
  );
}

export default Login;
