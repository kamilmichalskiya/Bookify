import styled from 'styled-components';

export const Collapsible = styled.div``;

export const CollapsibleButton = styled.div`
  border: unset;
  cursor: pointer;
  font: unset;
  padding: 0.3rem;
  border-radius: 5px;
  color: #fff;
`;

export const CollapsibleContent = styled.div`
  border: 1px solid #afafaf;
  padding: 24px 24px 8px;
  border-radius: 5px;
`;

export const CollapsibleContentContainer = styled.div`
  position: absolute;
  margin-top: 8px;
  right: 15%;
  width: 40vw;
  background: ${({ theme }) => theme.colors.secondary};
  height: 0px;
  overflow: hidden;
  transition: height ease 0.3s;
  ${({ isOpen, height }) =>
    isOpen &&
    `
    height: ${height}px;
  `}

  &:after {
    box-sizing: content-box;
    position: absolute;
    border: 8px solid transparent;
    height: 0;
    width: 1px;
    content: '';
    z-index: 2;
    border-width: 8px;
    left: 50%;
    border-top: none;
    border-bottom-color: ${({ theme }) => theme.colors.primary};
    top: -7px;
  }
`;

export const CollapsibleContentSelection = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-top: 4px;
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ theme }) => theme.fontSize.m};
    padding-left: 15px;
  }
`;
