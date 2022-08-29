import styled from 'styled-components';

export const Input = styled.input`
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 5px 0;
  height: 55px;
  width: 350px;
  padding: 10px 25px;
  border: none;
  border-radius: 5px;
  ${({ type }) => type === 'checkbox' && `width: 30px; margin: 10px 0`};
  ${({ type }) =>
    type === 'file' &&
    `border-radius: 4px;
    width: 100%;
    max-width: 350px;
    background-color: #fff;
    `};
  ::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
    font-size: ${({ theme }) => theme.fontSize.m};
    letter-spacing: 0.08em;
  }
  &:focus {
    outline: none;
    /* box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary}; */
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 500px;
  height: 100px;
  font-size: 1.25rem;
  padding: 5px 8px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;
