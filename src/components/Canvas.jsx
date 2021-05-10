import React from 'react';
import styled from 'styled-components/macro';
import Row from './Row';

const CanvasContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Cells = styled.div`
  margin-top: 40px;
  margin-bottom: 32px;
`;

const Canvas = ({ width, height, selectedColor }) => {
  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} selectedColor={selectedColor} />);
  }

  return (
    <CanvasContainer>
      <Cells>{rows}</Cells>
    </CanvasContainer>
  );
};

export default Canvas;
