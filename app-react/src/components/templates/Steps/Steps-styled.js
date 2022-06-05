/* eslint-disable prettier/prettier */
import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  box-shadow: 0px 0px 45px rgba(0, 0, 0, 0.1);
  font-size: ${({ theme }) => theme.fontSize.m};
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

export const GreenIconStyleWrapper = styled(IconStyleWrapper)`
  ${StyledIconBase} {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;


export const GreenTextWrapper = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0 30px;
  width: 100%;
  height: 120px;
  left: 0px;
  top: 0px;
  border-radius: 0px 0px 30px 30px;
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

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  width: 100%;
  border-radius: 100px;
  margin-top: 30px;
  margin-bottom: 30px;
  letter-spacing: 0.03em;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 80%;
  }
`;

export const SearchBarImg = styled.div`
  background-image: url(${({ url }) => url});
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  height: 50px;
  width: 100%;
  padding: 0 15px;
  border-radius: 100px;
`;

export const WhiteButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  width: 120px;
  height: 40px;
  border-radius: 100px;
  font-weight: 700;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.03em;
  margin-bottom: 110px;
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 80%;
    flex-direction: row;
  }
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  border-radius: 5px;
  padding: 0 30px;
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 65%;
  }
`;

export const ContentRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  border-radius: 5px;
  padding: 10px 20px;
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 30%;
  }
`;

export const BottomMenu = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding: 0 40px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  height: 80px;
  width: 100%;
  letter-spacing: 0.08em;
  position: fixed;
  bottom: 0px
`;
