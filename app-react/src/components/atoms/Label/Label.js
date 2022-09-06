import styled from 'styled-components';

export const Label = styled.label`
  font-family: Montserrat, sans-serif;
  font-size: 1rem;
  letter-spacing: 0.08em;
  padding: 20px 0 3px;
  color: ${({ theme }) => theme.colors.white};
`;
