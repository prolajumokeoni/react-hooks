import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Login.css";
import FormInput from "../component/Form-input";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(password !== confirmPassword) {
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
        type="text"
        value={username}
        onChange={handleUsernameChange}
        required
      />
      <br />
      <FormInput
        label="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <br />
      <FormInput
      label="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <br />
      <FormInput
      label="Confirm password"
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        required
      />
      <br />
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;
