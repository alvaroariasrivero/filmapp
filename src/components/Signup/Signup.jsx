import React from "react";
import authService from "../../services/authservice";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const username = event.target.username.value;
    authService.register(email, password, username)
      .then(() => {
        navigate(`/`);
      })
  }

  return <div>
    <h3>SignUp</h3>
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email: </label>
      <input type="text" name="email"/>
      <label htmlFor="username">Username: </label>
      <input type="text" name="username"/>
      <label htmlFor="password">Password: </label>
      <input type='password' name='password'/>
      <input type="submit" />
    </form>
  </div>;
};

export default Signup;
