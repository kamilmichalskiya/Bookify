import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const Header = styled.div`
  width: 100%;
  font-size: 2rem;
  padding: 10px 0px;
  border-bottom: 1px solid #fff;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin: 0;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  margin-top: 30px;
  border-top: 1px solid #fff;
`;

export const ErrorText = styled.p`
  font-size: 1rem;
  margin: 0 0 5px;
  color: ${({ theme }) => theme.colors.error};
`;

export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: ${({ theme }) => theme.colors.white};
  }
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const DarkEyeStyleWrapper = styled(IconStyleWrapper)`
  ${StyledIconBase} {
    color: ${({ theme }) => theme.colors.placeholder};
  }
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
