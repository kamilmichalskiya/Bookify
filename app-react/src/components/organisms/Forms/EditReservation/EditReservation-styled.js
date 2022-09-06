import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';

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
  color: ${({ theme }) => theme.colors.error};
`;

export const RowText = styled.span`
  padding: 0 5px 0 10px;
`;

export const DashedLine = styled.div`
  border: none;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.white};
  height: 10px;
  flex-grow: 1;
  margin: 0 10px;
  opacity: 0.2;
`;

export const RowWrapper = styled.div`
  display: flex;
  margin: 10px 0;
  padding: 5px 0 0 0;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const SectionHeader = styled.span`
  padding-top: 30px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
`;

export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: ${({ theme }) => theme.colors.white};
  }
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const OffersBox = styled.div`
  width: 100%;
  margin-top: 30px;
`;
