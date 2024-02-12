import React, { useState } from 'react';
import './login.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Login = () => {
  // State variables to store username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle login (e.g., send login request to backend)
    console.log('Login button clicked');
    console.log('Username:', username);
    console.log('Password:', password);
    // Here you can make API calls or perform other actions related to logging in
  };

  return (
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <a>Register</a>
      </form>
    </div>
  );
};

export default Login;
