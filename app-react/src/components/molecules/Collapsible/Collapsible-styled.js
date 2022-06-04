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
  padding: 0.5rem;
  border-radius: 5px;
`;

export const CollapsibleContentContainer = styled.div`
  position: absolute;
  height: 0px;
  overflow: hidden;
  transition: height ease 0.3s;
  ${({ isOpen, height }) =>
    isOpen &&
    `
    height: ${height}px;
  `}
`;
