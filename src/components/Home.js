import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/cuisine');
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}
      >
        <Typography variant="h2" component="h1">
          Welcome to Meal Planner AI
        </Typography>
        <Typography variant="h5" component="h2">
          Get personalized meal suggestions based on your preferences
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={handleGetStarted}
          sx={{ mt: 4 }}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default Home;