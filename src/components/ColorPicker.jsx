import React from 'react';
import styled from 'styled-components/macro';

const CPicker = styled.div`
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  max-width: 100%;

  cursor: pointer;
  ${({ color }) => color && `background: ${color};`};
  ${({ selectedColor }) => selectedColor && `border: 2px solid black; transition: all .2s ease-in-out; transform: scale(1.3)`};
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${CPicker} {
    margin: 40px 10px 10px 10px;
  }
`;

const ColorPicker = ({ colorSet, selectedColor, onColorChange }) => {
  return (
    <Wrapper>
      {colorSet.map((color, index) => {
        return <CPicker key={index} color={color} selectedColor={color === selectedColor} onClick={() => onColorChange(color)} />;
      })}
    </Wrapper>
  );
};

export default ColorPicker;
