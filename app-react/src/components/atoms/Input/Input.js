import styled from 'styled-components';

export const Input = styled.input`
  font-size: 1.25rem;
  padding: 5px 8px;
  border: 1px solid ${({ theme }) => theme.colors.darkPurple};
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;
  ${({ type }) =>
    type !== 'checkbox' &&
    `width: 100%;
  max-width: 300px`};
  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 500px;
  height: 100px;
  font-size: 1.25rem;
  padding: 5px 8px;
  border: 1px solid ${({ theme }) => theme.colors.darkPurple};
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;
