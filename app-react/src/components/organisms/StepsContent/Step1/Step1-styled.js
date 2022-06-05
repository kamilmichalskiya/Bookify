import styled from 'styled-components';
import RoomPhoto from 'assets/img/room1.png';
import { StyledIconBase } from '@styled-icons/styled-icon';

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
