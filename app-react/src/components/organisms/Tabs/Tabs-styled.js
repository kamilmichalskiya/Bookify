import styled from 'styled-components';

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
`;

export const TabsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TabHeader = styled.div`
  width: 100%;
  padding: 20px;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 2rem;
    margin-bottom: 0px;
  }
  ${({ active, theme }) =>
    active &&
    `
    border-bottom: 4px solid ${theme.colors.primary}
  `}
`;

export const TabContent = styled.div`
  width: 100%;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.secondary};
  ${({ hidden }) =>
    !hidden &&
    `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

export const NavigationBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
