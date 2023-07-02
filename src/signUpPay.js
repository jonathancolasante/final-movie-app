import React, { useState } from 'react';
import { TextField, Button, Container, Typography, InputAdornment, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SecurityIcon from '@mui/icons-material/Security';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ProgressBar from './components/ProgressBar';

const SignUpPay = () => {
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

  const [isLargeScreen, setIsLargeScreen] = React.useState(window.innerWidth > 1700);
  
  React.useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 1700);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return(
    <Container maxWidth="xs" style={{height: '80vh', display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: isLargeScreen ? '-5vh' : '0px'}}>
      <ProgressBar currentStep={3} />
      <Box sx={{ backgroundColor: 'white', p: 2, borderRadius: 2}}>
        <Typography variant="h4" gutterBottom align="center" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '500'}}>
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

export default SignUpPay;
