import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, main, div, #root {
    margin: 0;
    padding: 0;
    border: 0;
    background-color: #E5E5E5;
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
  }
`;

export default GlobalStyle;