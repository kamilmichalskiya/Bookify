import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const PasswordInputWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
  height: 40px;
  width: 100%;
  padding: 10px 15px 10px 0;
  border-radius: 5px;
`;

export const DarkEyeStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: ${({ theme }) => theme.colors.placeholder};
  }
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
