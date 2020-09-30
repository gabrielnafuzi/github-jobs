import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background: #F6F7FB;
    --color-white: #fff;
    --color-title: #282538;
    --color-text-secondary: #B9BDCF;
    --color-blue: #1E86FF;
    --color-blue-dark: #334680;
    --color-border: #b7bcce;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background: var(--color-background);
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: Roboto, sans-serif;
  }

  ul {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;
