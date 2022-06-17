import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  box-shadow: 0px 0px 45px rgba(0, 0, 0, 0.1);
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const GreenTextWrapper = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Footer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 0 40px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  height: 30px;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0 10px;
  width: 100%;
  height: 120px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: none;

  @media ${({ theme }) => theme.breakpoints.md} {
    border-bottom: initial;
    border-radius: 0px 0px 30px 30px;
    padding: 0 30px;
  }
`;

export const Logo = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.logo};
  font-weight: 700; //raczej wrzuca 600 nie 700; dodać w theme?
  letter-spacing: 0.02em; //dodać w theme?
  &::first-letter {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:hover {
    cursor: pointer;
  }
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
