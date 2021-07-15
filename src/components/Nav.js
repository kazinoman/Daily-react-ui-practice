import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles((theme) => ({
  nav: {
    background: theme.palette.primary.dark,
  },
}));

const Nav = () => {
  const classes = useStyle();
  return (
    <AppBar position="static" className={classes.nav}>
      <Toolbar>
        <Typography>Nav bar</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
