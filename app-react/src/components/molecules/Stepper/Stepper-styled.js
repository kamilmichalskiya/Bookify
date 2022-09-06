import styled from 'styled-components';

export const StepperLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const StepperWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StepperButton = styled.button`
  position: relative;
  font-size: 14px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  width: 36px;
  height: 36px;
  margin-right: 0px;
  min-width: auto;
  border: 0px;
  display: inline-flex;
  justify-content: center;
  text-align: left;
  padding: 7px 16px;
  border-radius: 50px;
  font-size: 1.5rem;
  line-height: 22px;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const StepperValue = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  display: block;
  text-align: center;
  min-width: 36px;
  margin: 0 4px;
  color: #fff;
`;
