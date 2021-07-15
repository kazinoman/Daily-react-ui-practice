import React from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useFormStyle = makeStyles((theme) => ({
  container: {
    width: '35rem',
    height: '25rem',
    // marginLeft: '25rem',
    padding: '3rem',
    backdropFilter: 'blur(12px) saturate(200%)',
    backgroundColor: 'rgba(255, 219, 219, 0.44)',
    border: '1px solid rgba(209, 213, 219, 0.3)',
    borderRadius: '1rem',
  },
  inputStyle: {
    width: '20rem',
  },
  inputText: {
    // marginTop: '1rem',
  },
}));

const Personal = () => {
  const classes = useFormStyle();
  return (
    <form className={classes.formContainer}>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        className={classes.container}
      >
        <Grid
          item
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          //   className={classes.container}
        >
          <Grid item>
            <Typography
              className={classes.inputText}
              style={{ color: 'white' }}
            >
              Policy Type
            </Typography>
          </Grid>
          <Grid item>
            <TextField variant="outlined" className={classes.inputStyle} />
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography style={{ color: 'white' }}>
              Expire policy date
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              className={classes.inputStyle}
              type="date"
              defaultValue="2017-05-24"
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography style={{ color: 'white' }}>Why I need this</Typography>
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              className={classes.inputStyle}
              multiline
              maxRows={5}
              rows={5}
            />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default Personal;
