import styled from 'styled-components';

export const SearchBarItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 100px;
  padding: 8px;
  font-size: ${({ theme }) => theme.fontSize.s};
  &:hover {
    background-color: #ffffff1a;
    cursor: pointer;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 8px 20px 8px;
  }
`;

export const SearchBarItemValue = styled.div`
  font-weight: 700;
  padding-left: 15px;
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-top: 4px;
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
