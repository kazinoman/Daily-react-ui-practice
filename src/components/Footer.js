import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles((theme) => ({
  footer: {
    background: theme.palette.primary.dark,
    height: '10rem',
  },
}));

export default function Footer() {
  const classes = useStyle();
  return (
    <>
      <div className={classes.footer}>
        <Typography variant="h2" color="optional">
          Footer
        </Typography>
      </div>
    </>
  );
}
