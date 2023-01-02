import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Login.css";
import FormInput from "../component/Form-input";

const defaultFormFields = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, email, password, confirmPassword } = formFields;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit =  (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Navigate to="/counter" />;
  }

  return (
    <form onSubmit={handleSubmit} className="form-wrapper">
      <FormInput
        label="Name"
        name="username"
        type="text"
        onChange={handleChange}
        value={username}
        required
      />
      <br />
      <FormInput
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={handleChange}
        required
      />
      <br />
      <FormInput
        label="password"
        name="password"
        type="password"
        value={password}
        onChange={handleChange}
        required
      />
      <br />
      <FormInput
        label="Confirm password"
        name="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
