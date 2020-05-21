import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border;
    outline: 0;
  }

  :root {
    --background: #272727;
    --textcolor: #fff;
    --textcolor1: #dedede;
    --primarycolor: #FFC94A;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: var(--background);
    color: var(--textcolor);
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Cinzel', serif;
  }
`;

export default GlobalStyle;
