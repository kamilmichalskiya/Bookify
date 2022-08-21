import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const GreenTextWrapper = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const CloseIconStyleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  ${StyledIconBase} {
    color: ${({ theme }) => theme.colors.white};
  }
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 700;
  letter-spacing: 0.08em;
  margin: 10px 0;
`;

export const SectionHeader = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 5px;
  margin-top: 30px;
`;

export const TextSpan = styled.span`
  letter-spacing: 0.08em;
  padding: 0 30px;
  text-align: justify;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const MapWrapper = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  position: relative;
  padding-bottom: 50%;
  width: 70%;
  overflow: hidden;
  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  padding: 10px;
  margin-top: 30px;
`;
