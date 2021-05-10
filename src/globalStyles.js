import styled, { createGlobalStyle } from 'styled-components/macro';
import colors from './styles/colors';

const GlobalStyle = createGlobalStyle`
 html {
   font: 16px 'Roboto', sans-serif;
   box-sizing: border-box;
}

 *,
 *::before,
 *::after {
   box-sizing: border-box;
}
// reset headers
h1,
h2,
h3,
h4,
p {
  margin: 0;
}

body {
  background-color: ${colors.white};
  color: ${colors.black};
}
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 576px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  font-size: 1.25rem;
  background-color: ${colors.blue};
  color: ${colors.white};
  min-width: 250px;
  padding: 15px 40px;
  border-radius: 3px;
  text-transform: uppercase;
  border: none;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  margin: 5px 0;

  &:hover {
    background-color: ${colors.dark_blue};
  }
`;

export default GlobalStyle;
