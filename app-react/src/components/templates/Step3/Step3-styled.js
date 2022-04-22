/* eslint-disable prettier/prettier */
import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
import ProgressBar3 from "../../../assets/img/progressbar3.png";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
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
  width: 80%;
  border-radius: 100px;
  margin-top: 30px;
  margin-bottom: 30px;
  letter-spacing: 0.03em; //dodać w theme?
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
`;

export const SearchBarImg = styled.div`
  background-image: url(${ProgressBar3});
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  height: 50px;
  width: 90%;
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
  justify-content: space-between;
  align-items: flex-start;
  width: 70%;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.03em;
`;

export const ContentLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 65%;
  border-radius: 5px;
  padding: 0 30px;
`;

export const ContentLeftTitle = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 700;
  padding: 25px 0px;
  letter-spacing: 0.08em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
`;

export const SectionHeader = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const UserInput = styled.input`
  margin: 10px 0;
  padding: 10px;
  
`;

export const ContentLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  padding: 10px 0;
`;

export const RowWrapper = styled.div`
  display: flex;
  margin: 10px 0;
  padding: 5px 0 0 0;
  width: 100%;
  align-items: center;
`;

export const RowWrapperProvision = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 10px 0;
  padding: 15px 0 15px 0;
  width: 100%;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const RowText = styled.span`
  padding: 0 5px 0 10px;
`;

export const ContentRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 30%;
  border-radius: 5px;
  padding: 10px 20px;
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
`;
