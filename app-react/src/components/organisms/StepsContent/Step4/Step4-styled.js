import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-shadow: 0px 0px 45px rgba(0, 0, 0, 0.1);
  padding: 30px 0px;
  font-size: ${({ theme }) => theme.fontSize.m};
`;
