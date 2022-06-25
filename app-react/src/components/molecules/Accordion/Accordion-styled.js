import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const AccordionItem = styled.div`
  width: 100%;
`;

export const AccordionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const AccordionContent = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: ${({ theme }) => theme.colors.white};
    position: relative;
    bottom: 4px;
  }
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const GreenIconStyleWrapper = styled(IconStyleWrapper)`
  ${StyledIconBase} {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const AccordionTitleText = styled.div`
  padding-top: 5px;
  font-size: 16px;
`;
