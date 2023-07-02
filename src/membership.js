import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ProgressBar from './components/ProgressBar';


const Membership = () => {
  return(
    <div style={{ paddingTop: '15vh' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}> 
      <ProgressBar currentStep={1} />
      <Typography variant="h4" gutterBottom style={{fontFamily: 'Montserrat, sans-serif', color: 'white', fontWeight: '500'}}>
        Membership
      </Typography>
      <Card variant="outlined" sx={{ maxWidth: 445, mt: 3, fontFamily: 'Montserrat, sans-serif' }}>
        <CardContent>
          <Typography variant="h5">
            $5 One Time Purchase
          </Typography>
          <Typography variant="body2" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel pulvinar nisi. Mauris a scelerisque massa. Vivamus at felis commodo, rutrum purus non, tincidunt dui. Sed massa nunc, euismod at velit nec, venenatis fermentum libero. Aenean ultricies bibendum mauris, nec tempor sem. Duis a libero nisl. 
          </Typography>
        </CardContent>
      </Card>
      <Button variant="contained" color="primary" sx={{ mt: 3 }}>
        <Link to="/personal-info" style={{ color: 'inherit', textDecoration: 'none' }}>Sign Up</Link>
      </Button>
    </Box>
    </div>
  );
};

export default Membership;
