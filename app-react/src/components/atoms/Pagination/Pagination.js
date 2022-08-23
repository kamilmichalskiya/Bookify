import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const Pagination = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  padding: 0 5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 100px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin: 0 0 10px;
  li a {
    border-radius: 5px;
    padding: 0.1rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.tertiary};
    background-color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
    margin-left: 5px;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
    background-color: unset;
    color: ${({ theme }) => theme.colors.tertiary};
  }
  li.active a {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
