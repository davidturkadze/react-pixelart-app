import React, { useState } from 'react';
import styled from 'styled-components/macro';
import colors from '../styles/colors';

const RowCell = styled.div`
  width: 35px;
  height: 35px;

  border-right: 1px solid ${colors.black};
  background-color: ${({ cellColor }) => cellColor};

  &:hover {
    cursor: pointer;
  }
`;

const Cell = ({ selectedColor }) => {
  const [cellColor, setCellColor] = useState('#fff');
  const [prevColor, setPrevColor] = useState(cellColor);
  const [canChangeColor, setCanChangeColor] = useState(true);

  return <RowCell />;
};

export default Cell;
