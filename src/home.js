import React from 'react';
import Typography from '@mui/material/Typography';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
    const carouselItems = [
        { id: 1, src: '/images/across_the_spider-verse.jpeg'},
        { id: 2, src: '/images/johnwick.jpeg' },
        { id: 3, src: '/images/mario.jpeg' },
        { id: 4, src: '/images/creed.jpg' },
        { id: 5, src: '/images/fast10.jpg' },
        { id: 6, src: '/images/antman.jpg'},
        { id: 7, src: '/images/atom.jpg' },
        { id: 8, src: '/images/shazam.jpeg' },
        { id: 9, src: '/images/joker.jpg' },
      ];
    
      const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    
      return (
        <div>
          <div style={{ paddingTop: '20vh' }}>
            <Typography variant="h4" align="center" style={{color: 'white', fontFamily: 'Montserrat, sans-serif'}} gutterBottom>
              Get access to in-depth information for every movie!
            </Typography>
            <div style={{ maxWidth: '40%', margin: 'auto', padding: '20px 0', textAlign: 'center' }}>
              <Carousel responsive={responsive}>
                {carouselItems.map((item) => (
                  <div key={item.id} style={{ padding: '0 10px' }}>
                    <img src={item.src} alt="Movie poster" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                  </div>
                ))}
              </Carousel>
            </div>
    
            <Box display="flex" justifyContent="center" mt={3}>
              <Button 
                style={{
                  color: 'white',
                  backgroundColor: '#354970',
                  fontFamily: 'Montserrat, sans-serif',
                  padding: '5px 10px',
                  fontSize: '20px'
                }}
              >
                <Link to="/browse" style={{ color: 'inherit', textDecoration: 'none' }}>Browse</Link>
              </Button>
            </Box>
          </div>
        </div>
      );
};

export default Home;
