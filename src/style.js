import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
  }
  
  body {
    background: linear-gradient(180deg, #EEEEEE 0%, #FFFFFF 100%);  
  }
  `;
