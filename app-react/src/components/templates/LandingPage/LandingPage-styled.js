import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
`;

export const PrimaryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 200px;
  height: 100px;
  border-radius: 20px;
`;
