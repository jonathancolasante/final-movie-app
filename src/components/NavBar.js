import * as React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';



const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <AppBar position="static" style={{ background: '#1B263B'}}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="logo">
            {/* Insert your logo here */}
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1, fontSize: '30px', fontFamily: 'Montserrat, sans-serif' }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>MovieSphere</Link>
          </Typography>
          <Button color="inherit" style={{fontSize: '20px', fontFamily: 'Montserrat, sans-serif'}}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          </Button>
          <Button color="inherit" style={{fontSize: '20px', fontFamily: 'Montserrat, sans-serif'}}>
            <Link to="/browse" style={{ color: 'inherit', textDecoration: 'none' }}>Browse</Link>
          </Button>
          <Button color="inherit" style={{fontSize: '20px', fontFamily: 'Montserrat, sans-serif'}}>
            <Link to="/news" style={{ color: 'inherit', textDecoration: 'none' }}>News</Link>
          </Button>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            style={{padding: 0}}
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle style={{fontSize: '35'}} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Login</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/membership" style={{ color: 'inherit', textDecoration: 'none' }}>Sign Up</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default NavBar;
  