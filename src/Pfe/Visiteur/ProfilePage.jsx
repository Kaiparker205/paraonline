import React, { useState, useEffect, useContext } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  TextField,
  Button,
  Snackbar,
  Typography,Grid
} from '@mui/material';
import { Alert } from '@mui/material';
import axios from 'axios';
import { userContext } from '../UserContext';
import { deepOrange } from '@mui/material/colors';
import useAut from '../route/useAut';
function ProfilePage() {
  const accesToken = useAut();
  const { user, setUser } = useContext(userContext);
  useEffect(() => {
    console.log(accesToken);
    console.log(user);

  }, [])
  const [userMod, setUserMod] = useState({
    id: '',
    username: '',
    password: '',
    email: '',
    tel: '',
  });
  const [edit, setEdit] = useState(false);



  // A function to update the state variables when the user types in the text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserMod((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // A function to toggle the editing mode when the user clicks the edit button
  const handleEdit = () => {
    setEdit((prevEdit) => !prevEdit);
  };

  // A function to send the updated information to the server and show a success message when the user clicks the save button
  const handleSave = () => {
    axios
      .put(`http://localhost:3001/users/${user.id}`, user)
      .then((res) => {
        setUser(res.data);
        setEdit(false);
        setOpen(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // A function to reset the state variables and exit the editing mode when the user clicks the cancel button
  const handleCancel = () => {
    axios
      .get(`http://localhost:3001/users/${user.id}`)
      .then((res) => {
        setUser(res.data);
        setEdit(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // A state variable and a function to control the snackbar component
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 500, mx: 'auto', mt: 5 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: deepOrange[500] }}>
          {user.username[0].toUpperCase()}
        </Avatar>
      }
      title={<Typography variant="h5">{user.username}</Typography>}
      action={
        <Button variant="contained" color="primary" onClick={handleEdit}>
          {edit ? 'Done' : 'Edit'}
        </Button>
      }
    />
    <CardContent>
      <Grid container spacing={2}>
        {edit ? (
          <>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={userMod.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={userMod.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tel"
                name="tel"
                type="tel"
                value={userMod.tel}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="success" onClick={handleSave} fullWidth>
                Save
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="error" onClick={handleCancel} fullWidth>
                Cancel
              </Button>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Password: {user.password}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Email: {user.email}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Tel: {user.tel}</Typography>
            </Grid>
          </>
        )}
      </Grid>
    </CardContent>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Profile updated successfully
      </Alert>
    </Snackbar>
  </Card>

  );
}
export default ProfilePage