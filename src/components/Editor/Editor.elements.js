import styled from 'styled-components/macro';
import colors from '../../styles/colors';

export const EditorContainer = styled.div`
  border: 1px solid ${colors.black};
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  padding: 40px 10px;
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  font-size: 3.125rem;
  margin-bottom: 20px;
`;

export const Subheading = styled.h2`
  font-size: 1.875rem;
  margin-bottom: 20px;
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OptionInput = styled.input`
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

export const OptionLabel = styled.label`
  margin-bottom: 10px;
  font-weight: 500;
`;
