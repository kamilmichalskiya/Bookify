import styled from 'styled-components';

export const ItemWrapper = styled.div`
  width: 100%;
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 90%;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
`;

export const ItemContainerContext = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  letter-spacing: 0.06em;
`;

export const ItemContainerContextTitle = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  padding: 15px 20px 0 20px;
  letter-spacing: 0.08em;
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const ItemContainerContextData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0 20px;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const ItemContainerContextDataLeft = styled.div`
  padding: 10px 0px 0px 20px;
`;

export const ItemContainerContextDataRight = styled.div`
  text-align: right;
  padding-right: 30px;
  display: flex;
  align-items: center;
`;

export const ItemPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 10px;
`;
