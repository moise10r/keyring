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

interface StepIconComponentProps {
  activeStep: number;
  stepNumber: number;
  onGoback: () => void;
}

const StepIconComponent = (props: {
  activeStep: number;
  stepNumber: number;
  onGoback: () => void;
}) => {
  const { stepNumber, activeStep, onGoback } = props;
  const isActive = activeStep === stepNumber;
  return (
    <div
      // onClick={onGoback}
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

const StepProgressBar = (props: {currentStep: number}) => {
  const {currentStep}= props
  return (
    <Box sx={{ width: '100%' }} className={styles.StepProgressBar}>
      <Stepper
        activeStep={currentStep}
        alternativeLabel
        connector={<Connector activeStep={currentStep} />}
      >
        {steps.map((step) => (
          <Step key={step.id}>
            <StepLabel
              // add class to the connector
              StepIconProps={{
                completed: currentStep > step.id,
                active: currentStep === step.id,
              }}
              StepIconComponent={() => (
                <StepIconComponent
                  activeStep={currentStep}
                  stepNumber={step.id}
                  onGoback={() => null }
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