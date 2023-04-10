import styled from '@emotion/styled';

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f1f8ff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const TableHead = styled.thead`
  height: 40px;
  text-align: center;
  text-transform: uppercase;
  background-color: #12bbd2;
  color: #fff;
`;

export const TableHeaderCell = styled.th`
  padding: 8px;
  text-align: center;
  border: 1px solid #ddd;

  &:first-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &:last-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const TableBody = styled.tbody`
  & tr:nth-of-type(odd) {
    background-color: #f1f1f1;
  }

  & tr:nth-of-type(even) {
    background-color: #fff;
  }
`;

export const TableCell = styled.td`
  padding: 8px;
  text-align: center;
  color: #757575;
  border: 1px solid #ddd;
  border-radius: 5px;

  &:first-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &:last-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;
