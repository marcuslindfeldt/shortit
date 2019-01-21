import { createGlobalStyle } from 'styled-components/macro';
import { colorPrimary } from './variables';

export default createGlobalStyle`
  html {
    font: 100%/1.7 'Source Sans Pro', sans-serif;
    font-weight: normal;
    text-size-adjust: 100%;
  }

  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  :link, :visited {
    color: ${colorPrimary}
  }
`;
