import React, { useState } from 'react';
import { Button } from '../globalStyles';
import ColorPicker from './ColorPicker';
import styled from 'styled-components/macro';
import colors from '../styles/colors';

const EditorContainer = styled.div`
  border: 1px solid ${colors.black};
  border-radius: 8px;
  max-width: 700px;
  width: 100%;
  padding: 40px 10px;
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 3.125rem;
  margin-bottom: 20px;
`;

const Subheading = styled.h2`
  font-size: 1.875rem;
  margin-bottom: 20px;
`;

const Options = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionInput = styled.input`
  height: 100px;
  width: 100px;
  font-size: 3rem;
  text-align: center;
  border: 1px solid ${colors.grey};
  border-radius: 5px;
  padding-left: 15px;
  margin: 0 15px;

  &:focus {
    outline: none;
    border-color: ${colors.grey};
    box-shadow: 0 0 0.5rem ${colors.light_grey};
  }
`;

const OptionLabel = styled.label`
  margin-bottom: 10px;
  font-weight: 500;
`;

const colorSet = ['#4A90E2', '#F5A623', '#F8E71C', '#8B572A', '#417505', '#BD10E0', '#50E3C2', '#9013FE', '#B8E986'];

const Editor = () => {
  const [width, setWidth] = useState(8);
  const [height, setHeight] = useState(8);
  const [buttonText, setButtonText] = useState('Start');
  const [hideOptions, setHideOptions] = useState(false);
  const [hideCanvas, setHideCanvas] = useState(true);
  const [selectedColor, setSelectedColor] = useState('#4A90E2');

  const initCanvas = () => {
    setHideOptions(!hideOptions);
    setHideCanvas(!hideCanvas);

    buttonText === 'Start' ? setButtonText('Reset') : setButtonText('Start');
  };

  const changeColor = (color) => {
    setSelectedColor(color);
  };

  let drawingOptions = (
    <Options>
      <Option>
        <OptionLabel htmlFor="width">Width</OptionLabel>
        <OptionInput
          type="number"
          name="width"
          defaultValue={width}
          onChange={(e) => {
            setWidth(e.target.value);
          }}
        />
      </Option>
      <Option>
        <OptionLabel htmlFor="height">Height</OptionLabel>
        <OptionInput
          type="number"
          name="height"
          defaultValue={height}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />
      </Option>
    </Options>
  );

  return (
    <EditorContainer>
      <Heading>Pixel Art</Heading>
      {hideCanvas && <Subheading>Enter Grid Dimensions</Subheading>}
      {hideCanvas && drawingOptions}
      <Button onClick={initCanvas}>{buttonText}</Button>
      {hideOptions && <ColorPicker colorSet={colorSet} selectedColor={selectedColor} onColorChange={changeColor} />}
    </EditorContainer>
  );
};

export default Editor;
