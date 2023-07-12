import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Slidebars from './Slidebars.tsx';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  logo: {
    marginRight: theme.spacing(2),
    width: 40,
    borderRadius: '100%',
  },
  navItem: {
    marginRight: theme.spacing(2),
    '&:last-child': {
      marginRight: 0,
    },
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  authContainer: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
  authItem: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    backgroundColor: '#658E9C', // Change the background color here
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Slidebars />
        <div className={classes.navItem}>
          <Button color="inherit">Home</Button>
        </div>
        <div className={classes.navItem}>
          <Button color="inherit">Services</Button>
        </div>
        <div className={classes.navItem}>
          <Button color="inherit">Cases</Button>
        </div>
        <div className={classes.navItem}>
          <Button color="inherit">About</Button>
        </div>
        <div className={classes.authContainer}>
          <div className={classes.authItem}>
            <Button component={Link} to="/Signup" color="inherit">Signup</Button>
          </div>
          <div className={classes.authItem}>
            <Button component={Link} to="/Login" color="inherit">Login</Button>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
