import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    fullName: '',
    address: '',
    mobileNumber: '',
    nicNumber: '',
    dateOfBirth: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword, ...data } = formData;

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setErrorMessage('Password and confirm password do not match.');
      setOpenDialog(true);
      return;
    }

    try {
      await axios.post('/api/register', data);
      console.log('Registration form submitted');
      console.log('Form Data:', formData);
    } catch (error) {
      console.error('Registration failed:', error.response.data.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className="register">
      {/* Your form JSX */}
    </div>
  );
};

export default Register;
