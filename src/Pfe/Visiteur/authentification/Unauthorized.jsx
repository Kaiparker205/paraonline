import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ErrorOutlineIcon color="error" sx={{ fontSize: 60 }} />
        <Typography component="h1" variant="h5">
          Unauthorized
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          You do not have access to the requested page.
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={goBack}
        >
          Go Back
        </Button>
      </Box>
    </Container>
  );
};

export default Unauthorized;
