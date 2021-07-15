import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { makeStyles } from '@material-ui/core/styles';
import Personal from './PersonalInfoForm';
import Account from './AccountInfoForm';
import Policy from './PolicyInfoForm';
import { Button, Grid, Typography } from '@material-ui/core';
const StepperLevel = [
  'Personal Information',
  'Account Information',
  'Policy Information',
];

function getData(stepIndex) {
  switch (stepIndex) {
    case 0: {
      return <Personal />;
      break;
    }
    case 1: {
      return <Account />;
      break;
    }
    case 2: {
      return <Policy />;
      break;
    }
    default:
      return null;
  }
}

const useStaperStyle = makeStyles((theme) => ({
  previousButton: {
    color: 'white',
    background:
      'linear-gradient(80deg, rgba(131,58,180,1) 0%, rgba(42,49,138,1) 100%)',
  },
  nextButton: {
    background:
      'linear-gradient(90deg, rgba(8,224,177,1) 100%, rgba(121,9,9,1) 100%)',
  },
  submitButton: {
    background:
      'linear-gradient(90deg, rgba(32,191,159,1) 100%, rgba(121,9,9,1) 100%)',
  },
  resetButton: {
    color: 'white',
    background:
      'linear-gradient(90deg, rgba(0,36,3,1) 7%, rgba(0,212,255,1) 53%, rgba(121,9,9,1) 100%)',
  },
}));
const StepForm = () => {
  const classes = useStaperStyle();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep <= StepperLevel.length) {
      setActiveStep((prevState) => prevState + 1);
    }
  };
  const handlePrevious = () => {
    if (activeStep !== -1) {
      setActiveStep((prevState) => prevState - 1);
    }
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div style={{ background: 'transparent' }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ height: '100%', width: '100%' }}
      >
        <Grid item>
          <Stepper
            activeStep={activeStep}
            style={{
              background: 'transparent',
              width: '80rem',
              color: 'white',
            }}
          >
            {StepperLevel.map((level) => (
              <Step>
                <StepLabel>{level}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>

        {activeStep === StepperLevel.length ? (
          <Grid item>
            <Button onClick={handleReset} className={classes.resetButton}>
              <Typography>Reset</Typography>
            </Button>
          </Grid>
        ) : activeStep === -1 ? (
          <Grid item>
            <p>You get your turn soon !!</p>
            <button onClick={handleNext}>Start</button>
          </Grid>
        ) : (
          <Grid item>
            <div>{getData(activeStep)}</div>
            <Button
              disableRipple
              onClick={handlePrevious}
              className={classes.previousButton}
            >
              <Typography>Previous</Typography>
            </Button>

            <Button
              disableRipple
              onClick={handleNext}
              className={
                activeStep === 2 ? classes.submitButton : classes.nextButton
              }
            >
              <Typography>{activeStep === 2 ? 'Submit' : 'Next'}</Typography>
            </Button>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default StepForm;
