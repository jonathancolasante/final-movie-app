import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import moviesData from './data/moviesData.json';
import { Container, Card, CardContent, Typography, Grid, CardMedia, List, ListItem, TextField, Button, Box } from '@mui/material';

const Movie = () => {
  const { movieId } = useParams();
  const movie = moviesData.find(m => m.id === parseInt(movieId));

  // Local state for comments
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Handles new comment submission
  const handleNewComment = (e) => {
    e.preventDefault();
    if(newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div style={{ paddingTop: '3vh' }}>
    <Container>
      <Typography variant="h5" align="center" style={{fontSize: "30px", marginBottom: "30px"}}>{movie.title}</Typography>
      <Grid container spacing={3}>
        {/* Image box */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="408"
              image={movie.image}
              alt={movie.title}
            />
          </Card>
        </Grid>
        {/* Summary box */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Summary</Typography>
              <Typography variant="body1">{movie.summary}</Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Details box */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent style={{marginTop: "17px"}}>
              <Typography variant="h5">Details</Typography>
              <Typography variant="body1">Genre: {movie.genre}</Typography>
              <Typography variant="body1">Rating: {movie.rating}/5</Typography>
              <Typography variant="body1">Audience: {movie.audience}</Typography>
              <Typography variant="body1">Where to watch: {movie.watch}</Typography>
              <Typography variant="body1">Length: {movie.length}</Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Expert reviews box */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Expert Reviews</Typography>
              <List>
                {movie.expertReviews.map((review, index) => (
                  <ListItem key={index}>
                    <Typography variant="body1">{review}</Typography>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        {/* Comment section */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5">Comments</Typography>
              <form onSubmit={handleNewComment}>
                <TextField 
                  label="New Comment" 
                  value={newComment} 
                  onChange={e => setNewComment(e.target.value)} 
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <Box mt={2}>
                  <Button type="submit" variant="contained" color="primary">
                    Add Comment
                  </Button>
                </Box>
              </form>
              <List>
                {comments.map((comment, index) => (
                  <ListItem key={index}>
                    <Typography variant="body1">{comment}</Typography>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
};

export default Movie;
