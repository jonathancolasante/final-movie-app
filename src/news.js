import React from 'react';
import { Container, Card, CardContent, Typography } from '@mui/material';

const News = () => {
  return (
    <div style={{paddingTop: "10vh"}}>
      <Container maxWidth="lg">
        {[1, 2, 3].map((num) => (
          <Card style={{marginTop: 40}}>
            <CardContent>
              <Typography variant="h5" component="div">
                News Piece {num}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default News;
