import styled from 'styled-components';

export const TableHeader = styled.h1`
  width: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  margin: 30px 0 0;
  padding-top: 30px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Wrapper = styled.div`
  padding: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: auto;
  overflow-y: hidden;
  padding-bottom: 50px;
`;

export const StyledTable = styled.table`
  max-width: 100%;
  border-spacing: 0;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.tertiary};

  thead {
    tr {
      th {
        :first-of-type {
          border-right: 3px solid ${({ theme }) => theme.colors.tertiary};
          font-size: ${({ theme }) => theme.fontSize.xl};
          padding-left: 0;
          padding-right: 0;
          text-align: left;
          div {
            width: 100px;
          }
        }
        border-bottom: 3px solid ${({ theme }) => theme.colors.tertiary};
      }
    }
  }

  tbody {
    tr {
      td {
        :first-of-type {
          border-right: 3px solid ${({ theme }) => theme.colors.tertiary};
          font-size: ${({ theme }) => theme.fontSize.xl};
          text-align: center;
          max-width: 100px;
        }
        :not(:first-of-type) {
          // background-color: red !important;
          div,
          button {
            width: 120px;
            height: 40px;
          }
        }
        font-weight: bold;
        overflow: hidden;
      }
    }
  }

  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th,
  td {
    margin: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
    border-right: 1px solid ${({ theme }) => theme.colors.tertiary};

    :last-child {
      border-right: 0;
    }
  }
`;

export const TableItem = styled.div`
  max-height: 50px;
  overflow: hidden;
`;

export const TableHeaderItem = styled.div`
  min-width: 80px;
  max-height: 50px;
`;

export const TableButton = styled.button`
  width: 125px;
  height: 40px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  text-align: center;
`;
