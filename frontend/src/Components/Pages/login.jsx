import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        name: username,
        password: password
      });

      if (response.status === 200 && response.data.message === 'Login successful') {
        setShowPopup(true);
        setMessage('');
      } else {
        setMessage('');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('Invalid username or password');
    }
  };

  const closePopup = () => {
    setShowPopup(false);
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
        <Link to={'/register'}>Register</Link>
        {message && <p>{message}</p>}
      </form>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>&times;</span>
            <p>{`welcome ${username} !`}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
