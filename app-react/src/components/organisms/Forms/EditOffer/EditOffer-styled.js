import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  font-size: 2rem;
  padding: 10px 0px;
  border-bottom: 1px solid #fff;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin: 0;
  font-size: 1rem;
  padding: 20px 0 5px;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  margin-top: 30px;
  border-top: 1px solid #fff;
`;

export const ErrorText = styled.p`
  font-size: 1rem;
  margin: 0 0 5px;
  color: ${({ theme }) => theme.colors.error};
`;
