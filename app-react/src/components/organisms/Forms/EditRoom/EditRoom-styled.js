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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  max-height: 350px;
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
  top: 3px;
  right: 3px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  width: 32px;
  height: 32px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.red};
  }
`;
