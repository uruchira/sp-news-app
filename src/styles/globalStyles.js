import { css } from "@emotion/react";

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #09357b;
    margin: 0;
    font-size: 14px;
    font-family: georgia, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-weight: bold;
    font-family: georgia, Arial, sans-serif;
  }

  p {
    font-family: "Roboto", sans-serif;
  }

  a,
  a:active,
  a:visited {
    text-decoration: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
    box-shadow: 0 0 0px 1000px #ffffff inset !important;
  }

  select:focus {
    outline: none;
  }

  @media print {
    html {
      font-size: 9px;
    }
  }
`;

export default globalStyles;
