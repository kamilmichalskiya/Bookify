import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 0 40px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  height: 30px;
  width: 100%;
`;

export const GreenTextWrapper = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;