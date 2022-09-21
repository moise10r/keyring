import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper, { StepperContext } from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CheckIcon from '@mui/icons-material/Check';

import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';

import styles from './StepProgressBar.module.scss';
import { styled } from '@mui/material/styles';

const steps = [
  {
    id: 1,
    label: 'Personal Details',
  },
  {
    id: 2,
    label: 'Address Details',
  },
  {
    id: 3,
    label: 'Contact Details',
  },
];

const StepIconComponent = (props: {
  activeStep: number;
  stepNumber: number;
  onGoback: () => void;
}) => {
  const { stepNumber, activeStep, onGoback } = props;
  const isActive = activeStep === stepNumber;
  return (
    <div
      onClick={onGoback}
      className={`${styles.StepIconComponent} ${
        isActive ? styles.active : ''
      } ${stepNumber < activeStep ? styles.completed : ''}`}
    >
      {stepNumber < activeStep ? (
        <CheckIcon className={styles.checkIcon} />
      ) : (
        ''
      )}
    </div>
  );
};

const Connector = (props: { activeStep: number }) => {
  // determine if the current step is active or not or if it's completed
  const stepper = React.useContext(StepperContext);
  // desable type checking for the following line
  // @ts-ignore
  const { connector, activeStep } = stepper;
  // @ts-ignore
  const isActive = activeStep === props.activeStep;
  const isCompleted = activeStep > props.activeStep;

  console.log('connector', connector, activeStep);
  return (
    <div
      className={`${styles.connector} ${isActive ? styles.active : ''} ${
        isCompleted ? styles.completed : ''
      }`}
    >
      <div className={styles.line}></div>
    </div>
  );
};

const StepProgressBar = () => {
  const [activeStep, setActiveStep] = React.useState(2);

  return (
    <Box sx={{ width: '100%' }} className={styles.StepProgressBar}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<Connector activeStep={activeStep} />}
      >
        {steps.map((step) => (
          <Step key={step.id}>
            <StepLabel
              // add class to the connector
              StepIconProps={{
                completed: activeStep > step.id,
                active: activeStep === step.id,
              }}
              StepIconComponent={() => (
                <StepIconComponent
                  activeStep={activeStep}
                  stepNumber={step.id}
                  onGoback={() =>
                    activeStep !== 1 && activeStep === step.id
                      ? setActiveStep(step.id - 1)
                      : null
                  }
                />
              )}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepProgressBar;
