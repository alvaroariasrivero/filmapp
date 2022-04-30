import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import authService from "../../services/authservice";

const Login = () => {

  const navigate = useNavigate();
  const[message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password)
    await authService.login(email, password)
    if(document.cookie){
      navigate('/search')
    }else{
      setMessage('Invalid userdata')
    }
  }

  return <div>
    <h3>Login</h3>
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email: </label>
      <input type="text" name="email"/>
      <label htmlFor="password">Password: </label>
      <input type='password' name='password'/>
      <input type="submit" />
    </form>
    <Link to='/signup'>SignUp</Link>
    <p>{message}</p>
  </div>;
};

export default Login;
