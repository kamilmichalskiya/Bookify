import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const SearchBarContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-self: stretch;
  flex-wrap: nowrap;
  align-items: center;
  min-height: 50px;
  width: 80%;
  padding: 0 15px;
  margin-bottom: 30px;
  letter-spacing: 0.03em;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 90%;
    border-radius: 100px;
    margin-top: 30px;
    padding: 0 20px;
  }
  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 80%;
  }
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

export const DarkIconStyleWrapper = styled(IconStyleWrapper)`
  opacity: 0.2;
  &:hover {
    opacity: 0.2;
    cursor: default;
  }
`;
