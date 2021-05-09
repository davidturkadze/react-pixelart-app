import React, { useState } from 'react';
import { Button } from '../../globalStyles';
import { EditorContainer, Heading, Subheading, Options, Option, OptionInput, OptionLabel } from './Editor.elements';

const Editor = () => {
  const [width, setWidth] = useState(8);
  const [height, setHeight] = useState(8);
  const [buttonText, setButtonText] = useState('Start');
  const [hideOptions, setHideOptions] = useState(false);
  const [hideCanvas, setHideCanvas] = useState(true);
  const [selectedColor, setSelectedColor] = useState('red');

  const initCanvas = () => {
    setHideOptions(!hideOptions);
    setHideCanvas(!hideCanvas);

    buttonText === 'Start' ? setButtonText('Reset') : setButtonText('Start');
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
    </EditorContainer>
  );
};

export default Editor;
