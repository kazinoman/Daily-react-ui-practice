import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles((theme) => ({
  backGroundSetting: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')`,
    height: '45rem',
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  },
  text: {
    color: '#fff',
    fontFamily: 'Nunito',
    paddingTop: '20rem',
  },
}));

const Hero = () => {
  const classes = useStyle();

  return (
    <div className={classes.backGroundSetting}>
      <Typography
        variant="h2"
        color="initial"
        align="center"
        className={classes.text}
      >
        React Blog
      </Typography>
    </div>
  );
};

export default Hero;
