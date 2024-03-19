import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material'; // Import Material-UI components
import { URL } from '../Baseurl';
import './login.css'; // Import external CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${URL}/login`, {
        username: username,
        email: 'string',
        password: password,
        phone_number: 'string',
        input_code: 0,
      });

      // Assuming the token is received in response.data.token
      console.log(response.data);
      const token = 'Admin login ';

      // Save token to local storage
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      console.log(username);
      // Set token in axios defaults for all future requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // Navigate to dashboard after successful login
      navigate('/dashboard');
      window.location.reload();
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div>
      <span>
        <img src="./images/logo_new.jpg" className="w-20 sm:w-36 mt-4" alt="" />
      </span>

      <div className="login-container">
        <div className="login-wrapper">
          <div className="login-card">
            <Typography
              variant="h5"
              align="center"
              color="primary"
            ></Typography>
            <Typography
              variant="h4"
              align="center"
              color="primary"
              gutterBottom
            >
              Welcome
            </Typography>
            <div className="login-heading">
              <Typography
                variant="h5"
                align="center"
                color="primary"
                gutterBottom
              >
                Log In
              </Typography>
            </div>
            <form onSubmit={handleSubmit} className="login-form">
              <div className="label-input-container">
                <Typography variant="subtitle1">Username</Typography>
                <TextField
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  fullWidth
                  required
                />
              </div>
              <div className="label-input-container">
                <Typography variant="subtitle1">Password</Typography>
                <TextField
                  type="password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  required
                />
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Log In
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
