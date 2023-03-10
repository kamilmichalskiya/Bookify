import styled from 'styled-components';

export const Button = styled.button`
  margin: 15px 0;
  padding: 7px 20px;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const PrimaryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  width: 120px;
  min-width: 80px;
  height: 32px;
  border-radius: 100px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const SecondaryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  max-width: 140px;
  width: auto;
  padding: 0px 15px;
  height: 32px;
  border-radius: 100px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.08em;
  &:hover {
    opacity: 0.9;
  }
`;

export const TertiaryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  max-width: 140px;
  width: auto;
  padding: 15px 30px;
  border-radius: 100px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.08em;
  margin-left: 10px;
  margin-bottom: 25px;
  &:hover {
    opacity: 0.9;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    margin-bottom: 0px;
  }
`;

export const SaveButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 120px;
  min-width: 80px;
  height: 32px;
  border-radius: 100px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.08em;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const DeleteButton = styled.button`
  background-color: rgb(225, 30, 30);
  color: ${({ theme }) => theme.colors.white};
  width: 120px;
  min-width: 80px;
  height: 32px;
  border-radius: 100px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
