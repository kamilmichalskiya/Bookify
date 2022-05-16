import styled from 'styled-components';
import RoomPhoto from '../../../assets/img/photo1.png';

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
