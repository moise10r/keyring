import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper, { StepperContext } from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CheckIcon from '@mui/icons-material/Check';

import styles from './StepProgressBar.module.scss';

const steps = [
  {
    id: 1,
    label: 'Selecte Expression',
  },
  {
    id: 2,
    label: 'Define Rule Set',
  },
  {
    id: 3,
    label: 'Create Rule',
  },
];

const StepIconComponent = (props: {
  activeStep: number;
  stepNumber: number;
  onGoback: () => void;
}) => {
  const { stepNumber, activeStep } = props;
  const isActive = activeStep === stepNumber;
  return (
    <div
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
  const stepper = React.useContext(StepperContext);
  // @ts-ignore
  const { activeStep } = stepper;
  const isCompleted = activeStep > props.activeStep;

  return (
    <div
      className={`${styles.connector} ${isCompleted ? styles.completed : ''}`}
    >
      <div className={styles.line}></div>
    </div>
  );
};

const StepProgressBar = (props: { currentStep: number }) => {
  const { currentStep } = props;
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
              StepIconProps={{
                completed: currentStep > step.id,
                active: currentStep === step.id,
              }}
              StepIconComponent={() => (
                <StepIconComponent
                  activeStep={currentStep}
                  stepNumber={step.id}
                  onGoback={() => null}
                />
              )}
            >
              <span className={styles.StepLabel}>{step.label}</span>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepProgressBar;
