import React, { useState } from 'react';
import styled from 'styled-components/macro';
import colors from '../styles/colors';

const RowCell = styled.div`
  width: 35px;
  height: 35px;
  border-right: 1px solid ${colors.black};
  background: ${({ cellColor }) => (cellColor ? cellColor : '#fff')};

  &:hover {
    cursor: pointer;
  }
`;

const Cell = ({ selectedColor }) => {
  const [cellColor, setCellColor] = useState();
  const [prevColor, setPrevColor] = useState(cellColor);
  const [canChangeColor, setCanChangeColor] = useState(true);

  const applyColor = () => {
    setCellColor(selectedColor);
    setCanChangeColor(false);
  };

  function changeColorOnHover() {
    setPrevColor(cellColor);
    setCellColor(selectedColor);
  }

  function resetColor() {
    if (canChangeColor) {
      setCellColor(prevColor);
    }

    setCanChangeColor(true);
  }

  return <RowCell onClick={applyColor} cellColor={cellColor} onMouseEnter={changeColorOnHover} onMouseLeave={resetColor} />;
};

export default Cell;
