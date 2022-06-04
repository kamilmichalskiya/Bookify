import React from 'react';
import { StepperLine, StepperLabel, StepperWrapper, StepperButton, StepperValue } from './Stepper-styled';
import PropTypes from 'prop-types';

const Stepper = ({ title, value, updateValue, minValue }) => {
  const increaseValue = () => {
    updateValue(value + 1);
  };

  const decreaseValue = () => {
    updateValue(value - 1);
  };

  return (
    <StepperLine>
      <StepperLabel>{title}</StepperLabel>
      <StepperWrapper>
        <StepperButton disabled={minValue === value} onClick={decreaseValue}>
          -
        </StepperButton>
        <StepperValue>{value}</StepperValue>
        <StepperButton onClick={increaseValue}>+</StepperButton>
      </StepperWrapper>
    </StepperLine>
  );
};

Stepper.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  updateValue: PropTypes.func.isRequired,
};

export default Stepper;
