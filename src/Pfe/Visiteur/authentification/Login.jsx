import React, { useState, useEffect, useContext } from "react";
import {
  TextField,
  Button,
  Typography,
  LinearProgress,

  Grid, Box
} from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getClients } from "../../reducer/ClientSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userContext } from "../../UserContext";

// The form component
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const {setUser}=useContext(userContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClients());
  }, []);
  const { value, isLoading, err } = useSelector((state) => state.clientsData);

  const handleChange = (e) => {
    setErrors({});
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password)
      .then((data) => {
        console.log(data);
        setUser({...data,token:'client'})
        navigate("/profil");
      })
      .catch((error) => {
        setErrors({ message: error.message });
      });
  };

  const notify = () => toast.error(err);
  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch(getClients());
        if (err !== null) {
          notify()
        }
        const client = value.find(
          (f) => f.email == email && f.password == password
        );
        console.log(client);
        if (client) {
          resolve(client);
        } else {
          reject(new Error("Invalid email or password"));
        }
      }, 1000);
    });
  };
  return (
    <Box sx={{ p: 4, m: 2 }}>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>



          <Grid item xs={12}>
            <Typography variant="h4" align="center">Log In</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              error={!!errors.email || !!errors.message}
              helperText={errors.email || errors.message || ""}
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
              helperText={errors.password || errors.message || ""}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: "8px" }}
              fullWidth
            >
              {isLoading && <LinearProgress variant="indeterminate" color="secondary" />}Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

const Login = () => {
  const location=useLocation();
  
  const from = location.state?.from?.pathname || "/";
  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
