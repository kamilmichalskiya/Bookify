/* eslint-disable prettier/prettier */
import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
import RoomPhoto from "../../../assets/img/photo1.png";
import ProgressBar1 from "../../../assets/img/progressbar1.png";

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
  background-image: url(${ProgressBar1});
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
  letter-spacing: 0.03em; //to trzeba globalnie ustawić!
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 65%;
  border-radius: 5px;
  padding: 0 30px;
`;

export const ContentLeftTitle = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  padding: 15px 0px;
  letter-spacing: 0.08em;
`;

export const RoomContainerPhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const RoomContainerPhoto = styled.div`
  background-image: url(${RoomPhoto});
  background-size: cover;
  width: 70%;
  height: 220px;
  border-radius: 5px;
`;

export const RoomDescription = styled.div`
  align-self: center;
  width: 100%;
  margin-top: 10px;
`;

export const RoomMainFeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  padding: 10px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
`;

export const RoomMainFeatureWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 3px;
`;

export const RoomMainFeatureIcon = styled.div`
  width: 40px;
`;

export const RoomAllFeaturesTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  letter-spacing: 0.08em;
`;

export const RoomAllFeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 10px 10px;
`;

export const RoomAllFeatureWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  margin-bottom: 5px;
  padding-right: 40px;
`;

export const RoomAllFeatureIcon = styled.div`
  width: 25px;
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
