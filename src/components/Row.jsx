import React from 'react';
import styled from 'styled-components/macro';
import colors from '../styles/colors';
import Cell from './Cell';

const RowContainer = styled.div`
  display: flex;
  width: fit-content;
  border-top: 1px solid ${colors.black};
  border-left: 1px solid ${colors.black};
  &:last-of-type {
    border-bottom: 1px solid ${colors.black};
  }
`;

const Row = ({ width, selectedColor }) => {
  let cells = [];

  for (let i = 0; i < width; i++) {
    cells.push(<Cell key={i} selectedColor={selectedColor} />);
  }

  return <RowContainer>{cells}</RowContainer>;
};

export default Row;
