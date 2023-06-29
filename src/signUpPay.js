import React, { useState } from 'react';
import { TextField, Button, Container, Typography, InputAdornment, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SecurityIcon from '@mui/icons-material/Security';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Login = () => {
  const [credit, setCredit] = useState('');
  const [security, setSecurity] = useState('');
  const [address, setAddress] = useState('');
  const [expiry, setExpiry] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = () => {
    if(address !== '' && security !== '' && credit !== '' && expiry !== '') {
      navigate('/');
    }
  };

  return(
    <Container maxWidth="xs" style={{height: '80vh', display: 'flex', alignItems: 'center'}}>
      <Box>
        <Typography variant="h4" gutterBottom align="center">
          Sign Up
        </Typography>
        <TextField
          label="Billing Address"
          variant="outlined"
          fullWidth
          margin="normal"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HomeIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Credit Card Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={credit}
          onChange={(e) => setCredit(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CreditCardIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Security Code (CCV)"
          variant="outlined"
          fullWidth
          margin="normal"
          value={security}
          onChange={(e) => setSecurity(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SecurityIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Expiry Date"
          variant="outlined"
          fullWidth
          margin="normal"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CalendarMonthIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          style={{marginTop: '1rem'}}
          disabled={credit === '' || expiry === '' || security === '' || address === ''}
        >
          Continue
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
