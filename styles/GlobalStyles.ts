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
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6, p {
    color: var(--textcolor);
  }

  a {
    color: var(--textcolor);
  }
`;

export default GlobalStyle;
