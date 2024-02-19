import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Register = () => {
  const initialFormData = {
    name: '',
    fullName: '',
    address: '',
    mobileNumber: '',
    nicNumber: '',
    dateOfBirth: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { confirmPassword, ...data } = formData;
  
    // Check if password and confirmPassword match
    if (formData.password !== confirmPassword) {
      setErrorMessage('Password and confirm password do not match.');
      setOpenDialog(true);
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const responseData = await response.json();
  
      if (response.ok) {
        // Registration successful
        setRegistrationComplete(true);
        setFormData({ ...initialFormData }); // Clear form fields
      } else {
        // Registration failed
        setErrorMessage('Name, Mobile number, NIC number, or email already exists Please Use another one.');
        setOpenDialog(true);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setErrorMessage('An error occurred while connecting to the server. Please try again later.');
      setOpenDialog(true);
    }
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="nicNumber">NIC Number:</label>
          <input
            type="text"
            id="nicNumber"
            name="nicNumber"
            value={formData.nicNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="Please enter a valid email address"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="showPassword">Show Password</label>
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
        </div>
        {/* Buttons */}
        <button type="submit">Register</button>
        <Link to={'/login'}>Already have an account?</Link>
      </form>

      {/* Dialogs */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Alert</DialogTitle>
        <DialogContent>
          <DialogContentText>{errorMessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleCloseDialog}>Close</button>
        </DialogActions>
      </Dialog>

      <Dialog open={registrationComplete} onClose={() => setRegistrationComplete(false)}>
        <DialogTitle>Registration Complete</DialogTitle>
        <DialogContent>
          <DialogContentText>Your registration was successful.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={() => setRegistrationComplete(false)}>Close</button>
        </DialogActions> 
      </Dialog>
    </div>
  );
};

export default Register;
