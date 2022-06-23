import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  font-size: 2rem;
  padding: 10px 0px;
  border-bottom: 1px solid #fff;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin: 15px 0px;
  font-size: 1rem;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  margin-top: 30px;
  border-top: 1px solid #fff;
`;

export const ErrorText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.error};
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  margin: 20px 0;
`;

export const Image = styled.img`
  position: relative;
  display: block;
  width: 100%;
  max-width: 350px;
`;

export const DeleteImageButton = styled.button`
  position: absolute;
  cursor: pointer;
  display: block;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  width: 50px;
  height: 50px;
  border-radius: 0px 0px 0px 20px;
  font-weight: bold;
  font-size: 1.25rem;
  border: 3px solid ${({ theme }) => theme.colors.secondary};
`;
