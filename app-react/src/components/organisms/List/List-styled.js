import styled from 'styled-components';

export const RoomWrapper = styled.div`
  width: 90%;
  margin: 0px 20px;
`;

export const RoomContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  height: 150px;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
`;

export const RoomContainerContext = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  letter-spacing: 0.06em;
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
  }
`;

export const RoomContainerContextTitle = styled.div`
  height: 30%;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  padding: 12px 20px 0 20px;
  letter-spacing: 0.08em;
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const RoomContainerContextData = styled.div`
  height: 70%;
  display: flex;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const RoomContainerContextDataLeft = styled.div`
  width: 50%;
`;

export const RoomFeatures = styled.ul`
  padding-left: 35px;
  list-style-type: none;
`;

export const RoomContainerContextDataRight = styled.div`
  text-align: right;
  padding-right: 30px;
  width: 50%;
`;

export const RoomPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 10px;
`;
