import React, { useRef } from 'react';
import { exportComponentAsJPEG, exportComponentAsPNG } from 'react-component-export-image';
import styled from 'styled-components/macro';
import { Button } from '../globalStyles';
import Row from './Row';

const CanvasContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Cells = styled.div`
  margin: 35px 15px;
`;

const Canvas = ({ width, height, selectedColor }) => {
  const canvasContentRef = useRef();

  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} selectedColor={selectedColor} />);
  }

  return (
    <CanvasContainer>
      <div ref={canvasContentRef}>
        <Cells>{rows}</Cells>
      </div>

      <Button onClick={() => exportComponentAsPNG(canvasContentRef)}>Export as PNG</Button>
      <Button onClick={() => exportComponentAsJPEG(canvasContentRef)}>Export as JPEG</Button>
    </CanvasContainer>
  );
};

export default Canvas;
