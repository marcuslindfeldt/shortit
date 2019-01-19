import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    font: 100%/1.7 'Source Sans Pro', sans-serif;
    font-weight: normal;
    text-size-adjust: 100%;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;
