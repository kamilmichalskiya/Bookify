import styled from 'styled-components';

export const StepperLine = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const StepperLabel = styled.div`
  margin-right: 8px;
  font-size: 1rem;
`;

export const StepperWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StepperButton = styled.button`
  position: relative;
  font-size: 14px;
  background-color: #fff;
  color: #0071c2;
  width: 40px;
  height: 40px;
  margin-right: 0px;
  min-width: auto;
  border: 0px;
  display: inline-flex;
  justify-content: center;
  text-align: left;
  padding: 8px 16px;
  border-radius: 2px;
  font-size: 1.5rem;
  line-height: 22px;
`;

export const StepperValue = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  display: block;
  text-align: center;
  min-width: 36px;
  margin: 0 4px;
  color: #fff;
`;
