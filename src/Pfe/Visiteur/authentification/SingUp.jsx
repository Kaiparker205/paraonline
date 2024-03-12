import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Box, Checkbox, FormControlLabel ,} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { addClient, getClients } from '../../reducer/ClientSlice';

// The signup form component
const Signup = () => {
  // The state variables for the input fields
  const [username, setUserame] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const dispatch = useDispatch();
  const { value, isLoading, err } = useSelector((state) => state.clientsData);

  // The state variable for the errors
  const [errors, setErrors] = useState({});

  // The function to handle the change of the input fields
  const handleChange = (e) => {
    // Clear the errors object
    setErrors({});

    // Update the state variables with the input values
    if (e.target.name === 'username') {
      setUserame(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    } else if (e.target.name === 'confirmPassword') {
      setConfirmPassword(e.target.value);
    } else if (e.target.name === 'agree') {
      setAgree(e.target.checked);
    }
  };
  const notify = () => toast.success("Your account creation was successful.");
  const notifyError = () => toast.error(err);

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(username, email, password, confirmPassword, agree)
      .then((data) => {
        dispatch(addClient(data))
        notify()
      })
      .catch((error) => {
        setErrors({ message: error.message });
      });
  };


  const signup = (username, email, password, confirmPassword, agree) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          username && 
          email &&
          password &&
          confirmPassword &&
          password === confirmPassword &&
          agree
        ) {
        dispatch(getClients());
        if (err !== null) {
          notifyError()
          reject(new Error(err));
        }
        else {

          const client = value.find(
            (f) => f.email == email && f.usename == username)
            if(client){
              reject(new Error("user is already existe"));

            }
            
            else{
              resolve({ id: Math.random(), username, email,password });
            }
        }
        
        } else {
          reject(new Error('Invalid input or password mismatch or terms not agreed'));
        }
      }, 1000);
    });
  };

  return (
    <Box sx={{ p: 4, m: 2 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <ToastContainer />
          <Grid item xs={12}>
            <Typography variant="h4" align="center">Signup</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Name"
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              error={!!errors.name || !!errors.message}
              helperText={errors.name || errors.message || ''}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              error={!!errors.email || !!errors.message}
              helperText={errors.email || errors.message || ''}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              error={!!errors.password || !!errors.message}
              helperText={errors.password || errors.message || ''}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword || !!errors.message}
              helperText={errors.confirmPassword || errors.message || ''}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox />}
              label="I agree all statements in Terms of service"
              name="agree"
              value="agree"
              onChange={handleChange}
              error={!!errors.agree || !!errors.message}
              helperText={errors.agree || errors.message || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Signup
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Signup;
