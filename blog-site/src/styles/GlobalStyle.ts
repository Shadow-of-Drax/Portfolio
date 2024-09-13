import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fonts.join(',')};
    background-color: ${(props) => props.theme.colors.background};
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;