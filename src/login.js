import React, { useState } from 'react';
import { TextField, Button, Container, Typography, InputAdornment, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');

    if(email !== '' && password !== '') {
      navigate('/');
    }

    window.location.reload();
  };


  const { t } = useTranslation();

  return(
    <Container maxWidth="xs" style={{height: '80vh', display: 'flex', alignItems: 'center'}}>
      <Box sx={{ backgroundColor: 'white', p: 2, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom align="center">
          {t('login')}
        </Typography>
        <TextField
          label={t('email_address')}
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label={t('password')}
          variant="outlined"
          fullWidth
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
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
          disabled={email === '' || password === ''}
        >
          {t('login')}
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
