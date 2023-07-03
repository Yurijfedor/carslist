import { styled } from 'styled-components';

export const CarListTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #fff;
`;

export const TableHead = styled.thead`
  background-color: blue;
  color: #fff;
`;

export const TableBody = styled.tbody`
  background-color: aqua;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  border: 1px solid #fff;
  padding: 8px;
  color: ${({ availability }) =>
    availability === true
      ? 'green'
      : availability === false
      ? '#ff5551'
      : 'initial'};
`;

export const TableHeaderCell = styled.th`
  border: 1px solid #fff;
  padding: 8px;
`;

export const SelectStyled = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  color: #333;
  font-size: 14px;
`;

export const OptionStyled = styled.option`
  background-color: white;
  color: #333;
  font-size: 14px;
`;
