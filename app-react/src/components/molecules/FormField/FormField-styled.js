import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const PasswordInputWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
  height: 55px;
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
`;

export const PasswordInput = styled.input`
  font-size: ${({ theme }) => theme.fontSize.l};
  background-color: ${({ theme }) => theme.colors.white};
  margin-left: 10px;
  border: none;
  height: 100%;
  flex-grow: 1;
  ::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
    font-size: ${({ theme }) => theme.fontSize.m};
    letter-spacing: 0.08em;
  }
  &:focus {
    outline: none;
  }
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
