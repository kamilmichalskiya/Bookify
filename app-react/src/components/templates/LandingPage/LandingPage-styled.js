import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';
import RoomPhoto from '../../../assets/img/photo1.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  min-height: 100vh;
  box-shadow: 0px 0px 45px rgba(0, 0, 0, 0.1);
  font-size: ${({ theme }) => theme.fontSize.m};
`;

//to możnaby na Button zamienić (ale tło dodawało, więc wstępnie ominałem)
export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: ${({ theme }) => theme.colors.white};
  }
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const DarkIconStyleWrapper = styled(IconStyleWrapper)`
  opacity: 0.2;
  &:hover {
    opacity: 0.2;
    cursor: default;
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
  flex-wrap: nowrap;
  align-items: center;
  height: 50px;
  width: 80%;
  padding: 0 15px;
  border-radius: 100px;
  margin-top: 30px;
  margin-bottom: 30px;
  letter-spacing: 0.03em; //dodać w theme?
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
`;

export const SearchBarTextContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-wrap: nowrap;
  flex-grow: 1;
  justify-content: space-around;
  padding: 0 20px;
`;

export const SearchBarTextCol = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 100px;
  flex-grow: 1;
  padding: 8px 20px 8px 20px;
  font-size: ${({ theme }) => theme.fontSize.s};
  &:hover {
    background-color: #ffffff1a;
    cursor: pointer;
  }
`;

export const SearchBarValue = styled.div`
  font-weight: 700;
  padding-left: 15px;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-top: 1px;
`;

export const FindButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  width: 120px;
  height: 32px;
  border-radius: 100px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const RoomContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  height: 150px;
  width: 60%;
  border-radius: 5px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
`;

export const RoomContainerPhoto = styled.div`
  background-image: url(${RoomPhoto});
  background-size: cover;
  width: 20%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const RoomContainerContext = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  letter-spacing: 0.06em;
`;

export const RoomContainerContextTitle = styled.div`
  height: 30%;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  padding: 12px 20px 0 20px;
  letter-spacing: 0.08em;
`;

export const RoomContainerContextData = styled.div`
  height: 70%;
  display: flex;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const RoomContainerContextDataLeft = styled.div`
  width: 70%;
`;

export const RoomFeatures = styled.ul`
  padding-left: 35px;
  list-style-type: none;
`;

export const RoomContainerContextDataRight = styled.div`
  text-align: right;
  padding-right: 30px;
  width: 30%;
`;

export const RoomPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 10px;
`;

export const DetailsButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 140px;
  height: 32px;
  border-radius: 100px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.08em;
  &:hover {
    opacity: 0.9;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding: 0 40px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  height: 30px;
  width: 100%;
`;
